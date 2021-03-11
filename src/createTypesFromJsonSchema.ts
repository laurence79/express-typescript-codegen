import fs from 'fs';
import prettier from 'prettier';
import { JSONSchema7, JSONSchema7Definition } from 'json-schema';
import { typeNameForReference } from './helpers/json-api';
import { prettierStyle } from './helpers/prettierStyle';

const tsTypeForSchema = (
  schema: JSONSchema7 | JSONSchema7Definition
): string => {
  if (typeof schema === 'boolean') {
    throw new Error(`Schema nodes must ba an object.`);
  }
  if ('$ref' in schema && schema.$ref) {
    return typeNameForReference(schema.$ref);
  }
  if (!('type' in schema)) {
    throw new Error(`Schema nodes must have a type.`);
  }
  const { type } = schema;

  if (type === 'object') {
    const { required, properties } = schema;
    if (!properties) return 'unknown';
    const requiredProperties = Array.isArray(required) ? required : [];
    const propertyList = Object.keys(properties).compactMap(propertyName => {
      if (typeof propertyName !== 'string') return undefined;
      const propertyObject = properties[propertyName];
      const isRequired = requiredProperties.includes(propertyName);
      const propertyType = tsTypeForSchema(propertyObject);
      return `${propertyName}${isRequired ? '' : '?'}: ${propertyType}`;
    });
    return `{ ${propertyList.join('; ')} }`;
  }

  const { enum: enumProp } = schema;
  if (enumProp) {
    return enumProp
      .map(e => {
        if (typeof e === 'string') {
          return `"${e}"`;
        }
        if (e === null) {
          return 'null';
        }
        return e.toString();
      })
      .join(' | ');
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
    return `Array<${tsTypeForSchema(items)}>`;
  }

  throw new Error(`Unrecognized type ${type?.toString() ?? ''}`);
};

export const createTypesFromJsonSchema = (
  schema: JSONSchema7,
  filename: string
): void => {
  const { definitions } = schema;
  if (!definitions) return;
  const types = Object.keys(definitions).compactMap(typeName => {
    if (typeof typeName !== 'string') return undefined;
    const definition = definitions[typeName];

    return `export type ${typeName} = ${tsTypeForSchema(definition)};`;
  });

  const code = types.join('\n\n');

  fs.writeFileSync(filename, prettier.format(code, prettierStyle));
};
