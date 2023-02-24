/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Json, JsonMap } from '@laurence79/ts-json';
import JsonPointer from 'json-pointer';
import { JSONSchema7 } from 'json-schema';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import { JsonWalker } from '../../JsonWalker';
import { isReferenceObject } from './isReferenceObject';

const mapProperties = (properties: {
  [name: string]: OpenApiV3.SchemaObject | OpenApiV3.ReferenceObject;
}): {
  [key: string]: JSONSchema7;
} => {
  const r: { [key: string]: JSONSchema7 } = {};
  Object.keys(properties).forEach(key => {
    const property = properties[key];

    if ('format' in property && property.format === 'binary') {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    r[key] = mapSchema(properties[key]);
  });
  return r;
};

const mapSchema = (
  schema: OpenApiV3.SchemaObject | OpenApiV3.ReferenceObject
): JSONSchema7 => {
  return '$ref' in schema
    ? { $ref: schema.$ref }
    : ({
        ...schema,

        ...('properties' in schema && schema.properties
          ? { properties: mapProperties(schema.properties) }
          : undefined),

        ...(schema.allOf
          ? {
              allOf: schema.allOf.map(mapSchema)
            }
          : undefined),

        ...(schema.anyOf
          ? {
              anyOf: schema.anyOf.map(mapSchema)
            }
          : undefined),

        ...(schema.oneOf
          ? {
              oneOf: schema.oneOf.map(mapSchema)
            }
          : undefined),

        ...('items' in schema && schema.items
          ? { items: mapSchema(schema.items) }
          : undefined)
      } as JSONSchema7);
};

const bundleReferences = (
  schema: JSONSchema7,
  document: OpenApiV3.Document
): void => {
  const visited: string[] = [];

  const walker = (obj: JsonMap, ptr: string) => {
    if (!isReferenceObject(obj) || visited.includes(ptr)) {
      return;
    }

    visited.push(ptr);

    const docPointer = obj.$ref.split('#')[1];

    const target = mapSchema(JsonPointer.get(document, docPointer));

    const convertedPointer = `/definitions/${docPointer.substring(
      docPointer.lastIndexOf('/') + 1
    )}`;

    JsonPointer.set(schema, convertedPointer, target);

    // eslint-disable-next-line no-param-reassign
    obj.$ref = `#${convertedPointer}`;

    JsonWalker.walk(target as Json, walker, convertedPointer);
  };

  JsonWalker.walk(schema as Json, walker);
};

export const exportAsJsonSchema = (
  schema: OpenApiV3.SchemaObject | OpenApiV3.ReferenceObject,
  document: OpenApiV3.Document
): JSONSchema7 => {
  const converted = mapSchema(schema);

  bundleReferences(converted, document);

  return converted;
};
