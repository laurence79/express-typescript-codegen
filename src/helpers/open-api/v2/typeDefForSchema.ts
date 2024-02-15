import * as OpenApiV2 from '../../../types/OpenApiV2';
import { typeDefForObject } from './typeDefForObject';
import { typeDefForReference } from './typeDefForReference';
import { typeDefForEnum } from './typeDefForEnum';
import { makeIdentifier } from '../../../templates/makeIdentifier';
import { TypeDefContext } from '../TypeDefContext';

export const typeDefForSchema = (
  schemas: OpenApiV2.SchemaObject | OpenApiV2.SchemaObject[],
  document: OpenApiV2.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    binaryType?: 'Buffer' | 'Blob';
    readonlyDTOs: boolean;
  },
  context: TypeDefContext
): string => {
  const gen = (schema: OpenApiV2.SchemaObject): string => {
    if (typeof schema === 'boolean') {
      throw new Error(`Schema nodes must be an object.`);
    }

    if ('$ref' in schema) {
      return typeDefForReference(
        schema as OpenApiV2.ReferenceObject,
        document,
        options,
        context,
        typeDefForSchema
      );
    }

    const { enum: enumProp, allOf, title } = schema;

    const type = title ? makeIdentifier(title) : undefined;

    if (type) {
      if (!context.shouldEmitType(type)) {
        return type;
      }
      context.willEmitType(type);
    }

    const code = (() => {
      if (enumProp) {
        return typeDefForEnum(enumProp);
      }

      if (schema.type === 'object') {
        const def = typeDefForObject(
          schema,
          document,
          typeDefForSchema,
          options,
          context
        );

        if (allOf) {
          return allOf
            .map(m =>
              typeDefForSchema(
                m as OpenApiV2.SchemaObject,
                document,
                options,
                context
              )
            )
            .concat(def)
            .join(' & ');
        }

        return def;
      }

      if (allOf) {
        return allOf
          .map(m =>
            typeDefForSchema(
              m as OpenApiV2.SchemaObject,
              document,
              options,
              context
            )
          )
          .join(' & ');
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
        const arrayType = options.readonlyDTOs ? 'ReadonlyArray' : 'Array';
        return `${arrayType}<${typeDefForSchema(
          items,
          document,
          options,
          context
        )}>`;
      }

      return 'unknown';
    })();

    if (type) {
      context.emitType(type, code);

      return type;
    }

    return code;
  };

  if (Array.isArray(schemas)) {
    return schemas.map(gen).join(' | ');
  }

  return gen(schemas);
};
