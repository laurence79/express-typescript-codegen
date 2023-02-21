import * as OpenApiV2 from '../../../types/OpenApiV2';
import { typeDefForObject } from './typeDefForObject';
import { typeDefForReference } from '../typeDefForReference';
import { typeDefForEnum } from './typeDefForEnum';

export const typeDefForSchema = (
  schemas: OpenApiV2.SchemaObject | OpenApiV2.SchemaObject[],
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    binaryType?: 'Buffer' | 'Blob';
  },
  emitType: (name: string, definition: string) => void
): string => {
  const gen = (schema: OpenApiV2.SchemaObject): string => {
    if (typeof schema === 'boolean') {
      throw new Error(`Schema nodes must be an object.`);
    }

    if ('$ref' in schema && schema.$ref) {
      return typeDefForReference(schema.$ref);
    }

    const { type = 'object', enum: enumProp, allOf, title } = schema;

    const code = (() => {
      if (enumProp) {
        return typeDefForEnum(enumProp);
      }

      if (type === 'object') {
        const def = typeDefForObject(
          schema,
          typeDefForSchema,
          options,
          emitType
        );

        if (allOf) {
          return allOf
            .map(m =>
              typeDefForSchema(m as OpenApiV2.SchemaObject, options, emitType)
            )
            .concat(def)
            .join(' & ');
        }

        return def;
      }

      if (allOf) {
        return allOf
          .map(m =>
            typeDefForSchema(m as OpenApiV2.SchemaObject, options, emitType)
          )
          .join(' & ');
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
        return `Array<${typeDefForSchema(items, options, emitType)}>`;
      }

      return 'unknown';
    })();

    if (title) {
      emitType(title, code);

      return title;
    }

    return code;
  };

  if (Array.isArray(schemas)) {
    return schemas.map(gen).join(' | ');
  }

  return gen(schemas);
};
