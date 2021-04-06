/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { JSONSchema7 } from 'json-schema';
import * as OpenApiV3 from '../../../types/OpenApiV3';

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
    r[key] = convertSchemaToJsonSchema(properties[key]);
  });
  return r;
};

export const convertSchemaToJsonSchema = (
  schema: OpenApiV3.SchemaObject | OpenApiV3.ReferenceObject
): JSONSchema7 => {
  if ('$ref' in schema) {
    return {
      $ref: schema.$ref.replace('components/schemas', 'definitions')
    };
  }

  return {
    ...schema,

    ...('properties' in schema && schema.properties
      ? { properties: mapProperties(schema.properties) }
      : undefined),

    ...(schema.allOf
      ? { allOf: schema.allOf.map(convertSchemaToJsonSchema) }
      : undefined),

    ...(schema.anyOf
      ? { anyOf: schema.anyOf.map(convertSchemaToJsonSchema) }
      : undefined),

    ...(schema.oneOf
      ? { oneOf: schema.oneOf.map(convertSchemaToJsonSchema) }
      : undefined),

    ...('items' in schema && schema.items
      ? { items: convertSchemaToJsonSchema(schema.items) }
      : undefined)
  } as JSONSchema7;
};
