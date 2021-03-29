import { JSONSchema7 } from 'json-schema';
import { LogFn, progress, success } from '../lib/cli-logging';
import { typeDefForSchema } from '../helpers/json-api';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import { mapOperations } from '../helpers/v2';
import { responseBodyTypeNameTemplate } from '../templates';

const fromV2 = (document: OpenApiV2.Document, log?: LogFn): string[] => {
  return mapOperations(document).flatMap(({ operationId, responses }) => {
    return responses.compactMap(({ statusCode, response }) => {
      const { schema } = response;

      if (!schema) {
        return undefined;
      }

      if (schema.type !== 'file') {
        return undefined;
      }

      const typeName = responseBodyTypeNameTemplate(operationId, statusCode);

      log?.(progress(`adding ${typeName}`));

      return `export type ${typeName} = Buffer;`;
    });
  });
};

const fromV3 = (): string[] => {
  throw new Error('OpenApi 3 not supported');
};

const fromJsonSchema = (jsonSchema: JSONSchema7, log?: LogFn): string[] => {
  const { definitions } = jsonSchema;

  if (!definitions) return [];

  return Object.keys(definitions).compactMap(typeName => {
    if (typeof typeName !== 'string') return undefined;

    const definition = definitions[typeName];

    log?.(progress(typeName));

    return `export type ${typeName} = ${typeDefForSchema(definition)};`;
  });
};

export const generateServerTypes = (
  openApiDocument: OpenApi.Document,
  jsonSchema: JSONSchema7,
  log?: LogFn
): string[] => {
  log?.(progress('Generating typescript types'));

  const types = [
    ...fromJsonSchema(jsonSchema, log),
    ...('swagger' in openApiDocument ? fromV2(openApiDocument, log) : fromV3())
  ];

  log?.(success());

  return types;
};
