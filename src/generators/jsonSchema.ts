import Ajv from 'ajv';
import { JSONSchema7 } from 'json-schema';
import { mapOperations, convertSchemaToJsonSchema } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import { LogFn, Logger, progress, success } from '../lib/cli-logging';
import { responseBodyTypeNameTemplate } from '../templates';
import { parametersTypeNameTemplate } from '../templates/parametersTypeName';

const fromV2 = (document: OpenApiV2.Document, log?: LogFn): JSONSchema7 => {
  const definitions: Record<string, JSONSchema7> = {};

  mapOperations(document).forEach(({ operationId, parameters, responses }) => {
    parameters
      .groupBy(p => p.in)
      .forEach(({ key, values }) => {
        if (!['body', 'path', 'query', 'header', 'formData'].includes(key)) {
          throw new Error(`Unsupported parameter in ${key}`);
        }

        if (key === 'body') {
          if (values.length > 1) {
            throw new Error(
              'Only a single body parameter per operation is supported'
            );
          }

          const { schema } = values[0] as OpenApiV2.InBodyParameterObject;

          const typeName = parametersTypeNameTemplate(operationId, 'body');

          log?.(progress(`adding ${typeName}`));

          definitions[typeName] = convertSchemaToJsonSchema(schema);

          return;
        }

        const typeName = parametersTypeNameTemplate(operationId, key);

        const schema: {
          type: 'object';
          properties: NonNullable<OpenApiV2.SchemaObject['properties']>;
          required: NonNullable<OpenApiV2.SchemaObject['required']>;
        } = {
          type: 'object',
          properties: {},
          required: []
        };

        values.forEach(v => {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { in: _, name, required, ...rest } = v;
          schema.properties[name] = rest;
          if (required) {
            schema.required = [...schema.required, name];
          }
        });

        log?.(progress(`adding ${typeName}`));

        definitions[typeName] = convertSchemaToJsonSchema(schema);
      });

    responses.forEach(({ statusCode, response }) => {
      const { schema } = response;

      if (!schema) {
        return;
      }

      const key = responseBodyTypeNameTemplate(operationId, statusCode);

      log?.(progress(`adding ${key}`));

      definitions[key] = convertSchemaToJsonSchema(schema);
    });
  });

  Object.keys(document.definitions ?? {}).forEach(key => {
    const value = document.definitions?.[key];

    if (value) {
      log?.(progress(`adding ${key}`));

      definitions[key] = convertSchemaToJsonSchema(value);
    }
  });

  const out = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    definitions
  };

  return out as JSONSchema7;
};

const fromV3 = (): JSONSchema7 => {
  throw new Error('OpenApi 3 not supported');
};

export const generateJsonSchema = ({
  openApiDocument,
  logger
}: {
  openApiDocument: OpenApi.Document;
  logger?: Logger;
}): JSONSchema7 => {
  const log = logger?.create(`Generating JSON schema from Open API Document`);

  const schema =
    'swagger' in openApiDocument ? fromV2(openApiDocument, log) : fromV3();

  log?.(progress(`Validating JSON schema`));

  const ajv = new Ajv({ strict: false });
  ajv.addSchema(schema);

  Object.keys(schema.definitions).forEach(key => {
    log?.(progress(`Validating ${key}`));
    ajv.getSchema(`#/definitions/${key}`);
  });

  log?.(success());

  return schema;
};
