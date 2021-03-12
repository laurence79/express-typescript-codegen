import { mapParameters } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import { validatorTemplate } from '../templates';
import { Logger, success } from '../lib/cli-logging';

const fromV2 = (document: OpenApiV2.Document): string[] => {
  return mapParameters(document).compactMap(({ operationId, parameters }) => {
    if (parameters.some(p => p.in === 'body')) {
      return operationId;
    }
    return undefined;
  });
};

const fromV3 = (): string[] => {
  throw new Error('OpenApi 3 not supported');
};

export const generateJSONSchemaValidators = ({
  jsonSchemaFilename,
  openAPIDocument,
  logger
}: {
  jsonSchemaFilename: string;
  openAPIDocument: OpenApi.Document;
  logger?: Logger;
}): string => {
  const log = logger?.create('Generating JSON schema validators');

  const operationIds =
    'swagger' in openAPIDocument ? fromV2(openAPIDocument) : fromV3();

  const code = validatorTemplate(operationIds, jsonSchemaFilename);

  log?.(success());

  return code;
};
