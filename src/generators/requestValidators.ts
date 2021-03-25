import { mapOperations } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import {
  parametersTypeNameTemplate,
  requestValidatorTemplate
} from '../templates';
import { Logger, success } from '../lib/cli-logging';

const fromV2 = (
  document: OpenApiV2.Document
): Parameters<typeof requestValidatorTemplate>[0] => {
  return mapOperations(document).compactMap(({ operationId, parameters }) => {
    return {
      operationId,
      properties: parameters
        .map(p => p.in)
        .distinct()
        .map(p => ({
          requestPropertyName: p === 'header' ? 'headers' : p,
          typeName: parametersTypeNameTemplate(operationId, p)
        }))
    };
  });
};

const fromV3 = (): Parameters<typeof requestValidatorTemplate>[0] => {
  throw new Error('OpenApi 3 not supported');
};

export const generateRequestValidators = ({
  jsonSchemaFilename,
  openApiDocument,
  logger
}: {
  jsonSchemaFilename: string;
  openApiDocument: OpenApi.Document;
  logger?: Logger;
}): string => {
  const log = logger?.create('Generating request body validators');

  const types =
    'swagger' in openApiDocument ? fromV2(openApiDocument) : fromV3();

  const code = requestValidatorTemplate(types, jsonSchemaFilename);

  log?.(success());

  return code;
};
