/* eslint-disable no-param-reassign */
import type { Json, JsonArray, JsonMap } from '@laurence79/ts-json';
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import jsonPointer from 'json-pointer';
import { promisify } from 'util';
import { Logger, success } from '../lib/cli-logging';

const fileExists = promisify(fs.exists);
const readFile = promisify(fs.readFile);

const loadFromFile = async (source: string, logger?: Logger): Promise<Json> => {
  const log = logger?.create(`Loading OpenAPI file ${source}`);

  if (!(await fileExists(source))) {
    throw new Error(`File ${source} does not exist`);
  }

  const extension = path.extname(source);
  const data = await readFile(source, 'utf-8');

  const doc = (() => {
    if (['.yaml', '.yml'].includes(extension)) {
      return yaml.parse(data) as Json;
    }

    if (extension === '.json') {
      return JSON.parse(data) as Json;
    }

    throw new Error(`Unsupported extension ${extension}`);
  })();

  log?.(success());

  return doc;
};

type JsonReference = {
  $ref: string;
};

const isReference = (node: unknown): node is JsonReference => {
  return (
    typeof node === 'object' &&
    node !== null &&
    '$ref' in node &&
    typeof node.$ref === 'string'
  );
};

type Walkable = JsonArray | JsonMap;

const isWalkable = (node: unknown): node is Walkable => {
  return typeof node === 'object' && node !== null;
};

type Files = Map<string, Walkable>;

const getAbsolutePath = (
  refBasePath: string,
  referencePath: string
): string => {
  if (path.isAbsolute(referencePath)) {
    return referencePath;
  }

  return path.join(path.dirname(refBasePath), referencePath);
};

const inferTitle = (referencePath: string, pointer: string): string | null => {
  if (pointer) {
    return pointer.substring(pointer.lastIndexOf('/') + 1);
  }

  if (referencePath) {
    return path.parse(referencePath).name;
  }

  return null;
};

const dereference = async (
  refBasePath: string,
  reference: JsonReference,
  files: Files,
  logger?: Logger
): Promise<Json> => {
  const { $ref } = reference;

  const [referencePath, pointer] = $ref.split('#');

  const file = referencePath
    ? getAbsolutePath(refBasePath, referencePath)
    : refBasePath;

  const refDoc = await (async () => {
    const cachedDoc = files.get(file);

    if (!cachedDoc) {
      const doc = await loadFromFile(file);

      if (!isWalkable(doc)) {
        throw new Error(`Can not walk ${file}`);
      }

      files.set(file, doc);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      await walk(doc, file, files, logger);

      return doc;
    }

    return cachedDoc;
  })();

  const node = pointer ? (jsonPointer.get(refDoc, pointer) as Json) : refDoc;

  if (isReference(node)) {
    return dereference(file, node, files, logger);
  }

  if (typeof node === 'object' && node && !Array.isArray(node) && !node.title) {
    node.title = inferTitle(referencePath, pointer);
  }

  return node;
};

const walkArray = async (
  node: JsonArray,
  refBasePath: string,
  files: Files,
  logger?: Logger
): Promise<void> => {
  await node.forEachAsync(async (item, index) => {
    if (isReference(item)) {
      node[index] = await dereference(refBasePath, item, files, logger);
      return;
    }

    if (isWalkable(item)) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      await walk(item, refBasePath, files, logger);
    }
  });
};

const walkMap = async (
  node: JsonMap,
  refBasePath: string,
  files: Files,
  logger?: Logger
): Promise<void> => {
  await Object.entries(node).forEachAsync(async ([key, item]) => {
    if (isReference(item)) {
      node[key] = await dereference(refBasePath, item, files, logger);
      return;
    }

    if (isWalkable(item)) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      await walk(item, refBasePath, files, logger);
    }
  });
};

const walk = async (
  node: Walkable,
  refBasePath: string,
  files: Files,
  logger?: Logger
): Promise<void> => {
  if (Array.isArray(node)) {
    await walkArray(node, refBasePath, files, logger);
    return;
  }

  await walkMap(node, refBasePath, files, logger);
};

export const load = async (source: string, logger?: Logger): Promise<Json> => {
  const data = await loadFromFile(source, logger);

  if (!isWalkable(data)) {
    throw new Error(`Can not walk ${source}`);
  }

  const files = new Map<string, Walkable>();
  files.set(source, data);

  await walk(data, source, files, logger);

  return data;
};
