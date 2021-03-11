import fs from 'fs';
import Ajv from 'ajv';
import { JSONSchema7 } from 'json-schema';
import { initUpper } from './helpers/initUpper';
import {
  dereferenceResponseObject,
  isReferenceObject,
  mapParameters,
  mapSchema
} from './helpers/v2';
import * as OpenAPI from './types/OpenAPI';
import * as OpenAPIV2 from './types/OpenAPIV2';
import 'ts-array-extensions';

const fromV2 = (document: OpenAPIV2.Document): JSONSchema7 => {
  const inlineResponseBodyDefinitions: Record<string, JSONSchema7> = {};

  mapParameters(document).forEach(
    ({ operationId, parameters, operation: { responses } }) => {
      parameters?.forEach(parameterObject => {
        if (parameterObject.in !== 'body') return;

        const { schema } = parameterObject as OpenAPIV2.InBodyParameterObject;
        const key = `${initUpper(operationId)}RequestBody`;

        inlineResponseBodyDefinitions[key] = mapSchema(schema);
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
        inlineResponseBodyDefinitions[key] = mapSchema(schema);
      });
    }
  );

  const documentDefinitions: Record<string, JSONSchema7> = {};

  Object.keys(document.definitions).forEach(key => {
    const value = document.definitions?.[key];

    if (value) {
      documentDefinitions[key] = mapSchema(value);
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
  throw new Error('OpenAPI 3 not supported');
};

export const createJsonSchema = (
  document: OpenAPI.Document,
  filename: string
): JSONSchema7 => {
  const schema = 'swagger' in document ? fromV2(document) : fromV3();

  fs.writeFileSync(filename, JSON.stringify(schema, null, 2));

  const ajv = new Ajv();
  ajv.addSchema(schema);

  Object.keys(schema.definitions).forEach(key => {
    ajv.getSchema(`#/definitions/${key}`);
  });

  return schema;
};
