/* eslint-disable @typescript-eslint/no-non-null-assertion */

import type { Json, JsonArray, JsonMap } from '@laurence79/ts-json';
import fs from 'fs/promises';
import path from 'path';
import yaml from 'yaml';
import jsonPointer from 'json-pointer';
import { Logger, success } from '../../lib/cli-logging';
import * as OpenApi from '../../types/OpenApi';
import * as OpenApiV3 from '../../types/OpenApiV3';
import * as OpenApiV2 from '../../types/OpenApiV2';
import { AsyncJsonWalker } from './AsyncJsonWalker';

async function fileExists(filename: string) {
  try {
    await fs.access(filename);
    return true;
  } catch (err: unknown) {
    if (
      typeof err === 'object' &&
      err &&
      'code' in err &&
      err.code === 'ENOENT'
    ) {
      return false;
    } else {
      throw err;
    }
  }
}

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

class Reference {
  private static getAbsolutePath(
    refBasePath: string,
    referencePath: string
  ): string {
    if (path.isAbsolute(referencePath)) {
      return referencePath;
    }

    return path.join(path.dirname(refBasePath), referencePath);
  }

  constructor(reference: string, refBasePath: string) {
    const [referencePath, pointer] = reference.split('#');

    this.filename = referencePath
      ? Reference.getAbsolutePath(refBasePath, referencePath)
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
    const data = await fs.readFile(filename, 'utf-8');

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

/**
 * Returns true when the given JSON pointer refers to a PathItemObject
 * position - i.e. a direct child of `/paths`. These refs need special
 * handling because the parent key is the OpenAPI path string (e.g.
 * `/things/{thingId}`), which is not a safe destination for placing
 * components and whose characters must never be URL-encoded when
 * building internal JSON pointers.
 */
const isPathItemPointer = (ptr: string): boolean => {
  const tokens = jsonPointer.parse(ptr);
  return tokens.length === 2 && tokens[0] === 'paths';
};

export const load = async (source: string, logger?: Logger): Promise<Json> => {
  const filename = path.isAbsolute(source)
    ? source
    : path.join(process.cwd(), source);

  const loader = new Loader(logger);

  const doc = (await loader.load(filename)) as unknown as OpenApi.Document &
    JsonMap;

  const walked: string[] = [];
  const inlinedRefs = new Set<string>();

  const walkFn = async (node: JsonMap, ptr: string) => {
    if (!isReference(node) || walked.includes(ptr)) {
      return;
    }

    walked.push(ptr);

    const ref = new Reference(node.$ref, filename);

    const refDoc = await loader.load(ref.filename);
    const refNode = jsonPointer.get(refDoc, ref.pointer) as JsonMap;

    // PathItemObject refs (e.g. the value of a `/things/{thingId}` entry)
    // are inlined in place rather than being relocated into
    // `#/components/...`. The path key is not a valid destination for a
    // component and building a JSON pointer that traverses it runs the
    // risk of tokens (like `{thingId}`) being misinterpreted as
    // URL-encoded values.
    if (isPathItemPointer(ptr)) {
      const cloned = JSON.parse(JSON.stringify(refNode)) as JsonMap;

      // Replace the `{ $ref: ... }` node in place with the target
      // PathItemObject's contents. Mutating `node` preserves the object
      // identity held by the surrounding `paths` map, so the original
      // path key (e.g. `/things/{thingId}`) is kept verbatim and no
      // JSON-pointer manipulation of the path string is required.
      Object.keys(node).forEach(k => {
        Reflect.deleteProperty(node, k);
      });
      Object.entries(cloned).forEach(([k, v]) => {
        node[k] = v;
      });

      await AsyncJsonWalker.walk(node, walkFn, ptr);

      return;
    }

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

      node.$ref = newRef.$;

      const canonicalKey = ref.$;

      if (!inlinedRefs.has(canonicalKey)) {
        inlinedRefs.add(canonicalKey);

        const cloned = JSON.parse(JSON.stringify(refNode)) as JsonMap;
        jsonPointer.set(doc, newRef.pointer, cloned);

        await AsyncJsonWalker.walk(cloned, walkFn, newRef.pointer);
      }
    }
  };

  await AsyncJsonWalker.walk(doc, walkFn);

  return doc;
};
