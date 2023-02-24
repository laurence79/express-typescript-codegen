/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
import type { Json, JsonArray, JsonMap } from '@laurence79/ts-json';
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import jsonPointer from 'json-pointer';
import { promisify } from 'util';
import { Logger, success } from '../lib/cli-logging';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV3 from '../types/OpenApiV3';
import * as OpenApiV2 from '../types/OpenApiV2';
import { AsyncJsonWalker } from './AsyncJsonWalker';

const fileExists = promisify(fs.exists);
const readFile = promisify(fs.readFile);

type JsonReferenceObject =
  | OpenApiV2.ReferenceObject
  | OpenApiV3.ReferenceObject;

const isReference = (node: unknown): node is JsonReferenceObject => {
  return (
    typeof node === 'object' &&
    node !== null &&
    '$ref' in node &&
    typeof node.$ref === 'string'
  );
};

const getAbsolutePath = (
  refBasePath: string,
  referencePath: string
): string => {
  if (path.isAbsolute(referencePath)) {
    return referencePath;
  }

  return path.join(path.dirname(refBasePath), referencePath);
};

class Reference {
  constructor(reference: string, refBasePath: string) {
    const [referencePath, pointer] = reference.split('#');

    this.filename = referencePath
      ? getAbsolutePath(refBasePath, referencePath)
      : refBasePath;

    this.pointer = pointer;

    this.$ = [this.filename, pointer].join('#');
  }

  public readonly filename: string;

  public readonly pointer: string;

  public readonly $: string;
}

class Loader {
  constructor(private readonly logger?: Logger) {}

  private readonly files = new Map<string, Promise<JsonMap>>();

  private async loadFromFile(filename: string): Promise<JsonMap> {
    const log = this.logger?.create(`Loading file ${filename}`);

    if (!(await fileExists(filename))) {
      throw new Error(`File ${filename} does not exist`);
    }

    const extension = path.extname(filename);
    const data = await readFile(filename, 'utf-8');

    const doc = (() => {
      if (['.yaml', '.yml'].includes(extension)) {
        return yaml.parse(data) as JsonMap;
      }

      if (extension === '.json') {
        return JSON.parse(data) as JsonMap;
      }

      throw new Error(`Unsupported extension ${extension}`);
    })();

    log?.(success());

    return doc;
  }

  private static async makeReferencesAbsolute(
    filename: string,
    doc: JsonMap | JsonArray
  ): Promise<void> {
    await AsyncJsonWalker.walk(doc, item => {
      if (isReference(item)) {
        const ref = new Reference(item.$ref, filename);
        item.$ref = ref.$;
      }
    });
  }

  public async load(filename: string): Promise<JsonMap> {
    if (!this.files.has(filename)) {
      this.files.set(
        filename,
        (async () => {
          const doc = await this.loadFromFile(filename);
          await Loader.makeReferencesAbsolute(filename, doc);
          return doc;
        })()
      );
    }

    return this.files.get(filename)!;
  }
}

const inferTitle = (node: JsonMap, reference: Reference): string => {
  if (node.title && typeof node.title === 'string') {
    return node.title;
  }

  if (!reference.pointer) {
    return path.parse(reference.filename).name;
  }

  return reference.pointer.substring(reference.pointer.lastIndexOf('/') + 1);
};

const componentKeyForPointer = (ptr: string): string => {
  const p = jsonPointer.parse(ptr).reverse();

  if (p.includes('schema')) {
    return 'schemas';
  }
  if (p.includes('parameters')) {
    return 'parameters';
  }
  if (p.includes('responses')) {
    return 'responses';
  }

  return 'schemas';
};

export const load = async (source: string, logger?: Logger): Promise<Json> => {
  const filename = path.isAbsolute(source)
    ? source
    : path.join(process.cwd(), source);

  const loader = new Loader(logger);

  const doc = ((await loader.load(filename)) as unknown) as OpenApi.Document &
    JsonMap;

  const walked: string[] = [];

  const walkFn = async (node: JsonMap, ptr: string) => {
    if (!isReference(node) || walked.includes(ptr)) {
      return;
    }

    walked.push(ptr);

    const ref = new Reference(node.$ref, filename);

    const refDoc = await loader.load(ref.filename);
    const refNode = jsonPointer.get(refDoc, ref.pointer) as JsonMap;
    const title = inferTitle(refNode, ref);
    refNode.title = title;

    if (ref.filename !== filename) {
      const newRef = (() => {
        if ('swagger' in doc) {
          return new Reference(`#/definitions/${title}`, filename);
        }

        const key = componentKeyForPointer(ptr);

        return new Reference(`#/components/${key}/${title}`, filename);
      })();

      jsonPointer.set(doc, newRef.pointer, refNode);

      node.$ref = newRef.$;

      await AsyncJsonWalker.walk(doc, walkFn, newRef.pointer);
    }
  };

  await AsyncJsonWalker.walk(doc, walkFn);

  return doc;
};
