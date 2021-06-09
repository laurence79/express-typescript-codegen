import { JSONSchema7Definition } from 'json-schema';
import { typeDefForEnum } from './typeDefForEnum';
import { typeDefForObject } from './typeDefForObject';
import { typeDefForReference } from './typeDefForReference';

declare module 'json-schema' {
  interface JSONSchema7 {
    nullable?: true;
  }
}

export const typeDefForSchema = (schema: JSONSchema7Definition): string => {
  if (typeof schema === 'boolean') {
    throw new Error(`Schema nodes must be an object.`);
  }

  if (Array.isArray(schema.type)) {
    throw new Error(
      `Array schema types are not supported (until we understand what they're for).`
    );
  }

  const preliminaryType = (() => {
    if ('$ref' in schema && schema.$ref) {
      return typeDefForReference(schema.$ref);
    }

    const { enum: enumProp, allOf, oneOf, anyOf } = schema;

    if (enumProp) {
      return typeDefForEnum(enumProp, typeDefForSchema);
    }

    const base =
      schema.type === 'object'
        ? typeDefForObject(schema, typeDefForSchema)
        : null;

    if (allOf) {
      return allOf
        .map(m => typeDefForSchema(m))
        .concat(base ? [base] : [])
        .join(' & ');
    }

    const unionOf = (oneOf ?? []).concat(anyOf ?? []);

    if (unionOf.length > 0) {
      const union = unionOf.map(m => typeDefForSchema(m)).join(' | ');

      return base ? `${base} & (${union})` : union;
    }

    if (schema.type === 'object') {
      return base ?? 'unknown';
    }

    if (
      schema.type === 'boolean' ||
      schema.type === 'null' ||
      schema.type === 'number' ||
      schema.type === 'string'
    ) {
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
      return `Array<${typeDefForSchema(items)}>`;
    }

    throw new Error(`Unrecognized type in schema ${JSON.stringify(schema)}`);
  })();

  if ('nullable' in schema && schema.nullable) {
    return `${preliminaryType} | null`;
  }

  return preliminaryType;
};
