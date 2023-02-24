/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Json, JsonMap } from '@laurence79/ts-json';
import JsonPointer from 'json-pointer';
import { JSONSchema7 } from 'json-schema';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import { JsonWalker } from '../../JsonWalker';
import { isReferenceObject } from './isReferenceObject';

const mapProperties = (properties: {
  [name: string]: OpenApiV2.SchemaObject;
}): {
  [key: string]: JSONSchema7;
} => {
  const r: { [key: string]: JSONSchema7 } = {};
  Object.keys(properties).forEach(key => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    r[key] = mapSchema(properties[key]);
  });
  return r;
};

const mapSchema = (
  schemas: OpenApiV2.SchemaObject | OpenApiV2.SchemaObject[]
): JSONSchema7 => {
  /**
   * This currently does nothing, but is a placeholder for removing
   * unsupported features from Open Api
   */

  const convert = (schema: OpenApiV2.SchemaObject): JSONSchema7 => {
    const { properties, ...rest } = schema;

    return {
      ...rest,
      ...(properties ? { properties: mapProperties(properties) } : undefined)
    } as JSONSchema7;
  };

  const converted = (() => {
    if (Array.isArray(schemas)) {
      if (schemas.length === 1) {
        return convert(schemas[0]);
      }
      return { anyOf: schemas.map(convert) };
    }

    return convert(schemas);
  })();

  return converted;
};

const bundleReferences = (
  schema: JSONSchema7,
  document: OpenApiV2.Document
): void => {
  const visited: string[] = [];

  const walker = (obj: JsonMap, ptr: string) => {
    if (!isReferenceObject(obj) || visited.includes(ptr)) {
      return;
    }

    visited.push(ptr);

    const pointer = obj.$ref.split('#')[1];

    const target = mapSchema(JsonPointer.get(document, pointer));

    JsonPointer.set(schema, pointer, target);

    // eslint-disable-next-line no-param-reassign
    obj.$ref = `#${pointer}`;

    JsonWalker.walk(schema as Json, walker, pointer);
  };

  JsonWalker.walk(schema as Json, walker);
};

export const exportAsJsonSchema = (
  schemas: OpenApiV2.SchemaObject | OpenApiV2.SchemaObject[],
  document: OpenApiV2.Document
): JSONSchema7 => {
  const converted = mapSchema(schemas);

  bundleReferences(converted, document);

  return converted;
};
