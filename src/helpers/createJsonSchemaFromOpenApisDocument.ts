import Ajv from 'ajv';
import { JSONSchema7 } from 'json-schema';
import { initUpper } from './initUpper';
import {
  dereferenceResponseObject,
  isReferenceObject,
  mapParameters,
  convertSchemaToJsonSchema
} from './v2';
import * as OpenApi from '../types/OpenApis';
import * as OpenApiV2 from '../types/OpenApisV2';
import 'ts-array-extensions';
import { LogFn, Logger, progress, success } from '../lib/cli-logging';

const fromV2 = (document: OpenApiV2.Document, log?: LogFn): JSONSchema7 => {
  const inlineResponseBodyDefinitions: Record<string, JSONSchema7> = {};

  mapParameters(document).forEach(
    ({ operationId, parameters, operation: { responses } }) => {
      parameters?.forEach(parameterObject => {
        if (parameterObject.in !== 'body') return;

        const { schema } = parameterObject as OpenApiV2.InBodyParameterObject;
        const key = `${initUpper(operationId)}RequestBody`;

        log?.(progress(`adding ${key}`));

        inlineResponseBodyDefinitions[key] = convertSchemaToJsonSchema(schema);
      });

      Object.keys(responses).forEach(statusCode => {
        const response = responses[statusCode];
        const responseObject = isReferenceObject(response)
          ? dereferenceResponseObject(response, document)
          : response;
        if (!responseObject) {
          return;
        }
        const { schema } = responseObject;
        if (!schema) {
          return;
        }
        const key = `${initUpper(operationId)}${statusCode}ResponseBody`;

        log?.(progress(`adding ${key}`));

        inlineResponseBodyDefinitions[key] = convertSchemaToJsonSchema(schema);
      });
    }
  );

  const documentDefinitions: Record<string, JSONSchema7> = {};

  Object.keys(document.definitions).forEach(key => {
    const value = document.definitions?.[key];

    if (value) {
      log?.(progress(`adding ${key}`));

      documentDefinitions[key] = convertSchemaToJsonSchema(value);
    }
  });

  const out = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    definitions: {
      ...documentDefinitions,
      ...inlineResponseBodyDefinitions
    }
  };

  return out as JSONSchema7;
};

const fromV3 = (): JSONSchema7 => {
  throw new Error('OpenApi 3 not supported');
};

export const createJsonSchemaFromOpenApiDocument = ({
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
    ajv.getSchema(`#/definitions/${key}`);
  });

  log?.(success());

  return schema;
};
