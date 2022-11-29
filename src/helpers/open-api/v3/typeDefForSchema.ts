import * as OpenApiV3 from '../../../types/OpenApiV3';
import { typeDefForObject } from './typeDefForObject';
import { typeDefForReference } from '../typeDefForReference';
import { typeDefForEnum } from './typeDefForEnum';
import { isObjectSchema } from './isObjectSchema';

export const typeDefForSchema = (
  schema: OpenApiV3.SchemaObject | OpenApiV3.ReferenceObject,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    binaryType?: 'Buffer' | 'Blob';
  }
): string => {
  if ('$ref' in schema) {
    return typeDefForReference(schema.$ref);
  }

  const { binaryType = 'Buffer' } = options;

  const { enum: enumProp, allOf, oneOf, anyOf } = schema;

  const preliminaryType = (() => {
    if (enumProp) {
      return typeDefForEnum(enumProp);
    }

    const base = isObjectSchema(schema)
      ? typeDefForObject(schema, typeDefForSchema, options)
      : null;

    if (allOf) {
      return allOf
        .map(m => typeDefForSchema(m, options))
        .concat(base ? [base] : [])
        .join(' & ');
    }

    const unionOf = (oneOf ?? []).concat(anyOf ?? []);

    if (unionOf.length > 0) {
      const union = unionOf.map(m => typeDefForSchema(m, options)).join(' | ');

      return base ? `${base} & (${union})` : union;
    }

    if (!schema.type) {
      // default to object
      return base ?? 'unknown';
    }

    if (schema.type === 'object') {
      return base ?? 'unknown';
    }

    if (schema.type === 'string') {
      if (schema.format === 'binary') {
        return binaryType;
      }

      return 'string';
    }

    if (schema.type === 'boolean' || schema.type === 'number') {
      return schema.type;
    }

    if (schema.type === 'integer') {
      return 'number';
    }

    if (schema.type === 'array') {
      const { items } = schema;
      if (!items) {
        throw new Error(`Array nodes must have an items property.`);
      }
      if (Array.isArray(items)) {
        throw new Error(`Array items property must be singular.`);
      }
      return `Array<${typeDefForSchema(items, options)}>`;
    }

    return 'unknown';
  })();

  if ('nullable' in schema && schema.nullable) {
    return `${preliminaryType} | null`;
  }

  return preliminaryType;
};
