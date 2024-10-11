import * as OpenApiV3 from '../../../types/OpenApiV3';
import { typeDefForObject } from './typeDefForObject';
import { typeDefForReference } from './typeDefForReference';
import { typeDefForEnum } from './typeDefForEnum';
import { isObjectSchema } from './isObjectSchema';
import { makeIdentifier } from '../../../templates/makeIdentifier';
import { TypeDefContext } from '../TypeDefContext';

export const typeDefForSchema = (
  schema: OpenApiV3.SchemaObject | OpenApiV3.ReferenceObject,
  document: OpenApiV3.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    binaryType?: 'Buffer' | 'Blob';
    readonlyDTOs: boolean;
    emptyType: 'never' | 'unknown' | '{}';
  },
  context: TypeDefContext
): string => {
  if ('$ref' in schema) {
    return typeDefForReference(
      schema,
      document,
      options,
      context,
      typeDefForSchema
    );
  }

  const { binaryType = 'Buffer' } = options;

  const { enum: enumProp, allOf, oneOf, anyOf, title } = schema;

  const type = title ? makeIdentifier(title) : undefined;

  if (type) {
    if (!context.shouldEmitType(type)) {
      return type;
    }
    context.willEmitType(type);
  }

  const preliminaryType = (() => {
    if (enumProp) {
      return typeDefForEnum(enumProp);
    }

    const base = isObjectSchema(schema)
      ? typeDefForObject(schema, document, typeDefForSchema, options, context)
      : null;

    if (allOf) {
      return allOf
        .map(m => typeDefForSchema(m, document, options, context))
        .concat(base ? [base] : [])
        .distinct()
        .join(' & ');
    }

    const unionOf = (oneOf ?? []).concat(anyOf ?? []);

    if (unionOf.length > 0) {
      const union = unionOf
        .map(m => typeDefForSchema(m, document, options, context))
        .distinct()
        .join(' | ');

      return base ? `${base} & (${union})` : union;
    }

    if (!schema.type) {
      // default to object
      return base ?? options.emptyType;
    }

    if (schema.type === 'object') {
      return base ?? options.emptyType;
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
      const arrayType = options.readonlyDTOs ? 'ReadonlyArray' : 'Array';
      return `${arrayType}<${typeDefForSchema(
        items,
        document,
        options,
        context
      )}>`;
    }

    return options.emptyType;
  })();

  const code =
    'nullable' in schema && schema.nullable
      ? `${preliminaryType} | null`
      : preliminaryType;

  if (type) {
    context.emitType(type, code);

    return type;
  }

  return code;
};
