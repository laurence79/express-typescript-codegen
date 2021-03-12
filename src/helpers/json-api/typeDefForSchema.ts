import { JSONSchema7Definition } from 'json-schema';
import { typeDefForEnum } from './typeDefForEnum';
import { typeDefForObject } from './typeDefForObject';
import { typeDefForReference } from './typeDefForReference';

export const typeDefForSchema = (schema: JSONSchema7Definition): string => {
  if (typeof schema === 'boolean') {
    throw new Error(`Schema nodes must be an object.`);
  }

  if ('$ref' in schema && schema.$ref) {
    return typeDefForReference(schema.$ref);
  }

  if (!('type' in schema)) {
    throw new Error(`Schema nodes must have a type.`);
  }

  const { type, enum: enumProp } = schema;

  if (type === 'object') {
    return typeDefForObject(schema, typeDefForSchema);
  }

  if (enumProp) {
    return typeDefForEnum(enumProp);
  }

  if (
    type === 'boolean' ||
    type === 'null' ||
    type === 'number' ||
    type === 'string'
  ) {
    return type;
  }

  if (type === 'integer') {
    return 'number';
  }

  if (type === 'array') {
    const { items } = schema;
    if (!items) {
      throw new Error(`Array nodes must have an items property.`);
    }
    if (Array.isArray(items)) {
      throw new Error(`Array items property must be singular.`);
    }
    return `Array<${typeDefForSchema(items)}>`;
  }

  throw new Error(`Unrecognized type ${type?.toString() ?? ''}`);
};
