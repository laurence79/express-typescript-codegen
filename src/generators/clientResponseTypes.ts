import { mapOperations } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import {
  responseBodyTypeNameTemplate,
  responseTypeNameTemplate,
  responseTypesTemplate
} from '../templates';
import { Logger, success } from '../lib/cli-logging';

type TemplateArgs = Parameters<typeof responseTypesTemplate>[1];

const fromV2 = (document: OpenApiV2.Document): TemplateArgs => {
  return mapOperations(document).map(({ operationId, responses }) => {
    const childTypes = responses.map(({ statusCode, response }) => {
      const { schema } = response;

      const bodyType = schema
        ? responseBodyTypeNameTemplate(operationId, statusCode)
        : 'unknown';

      return {
        statusCode: statusCode === 'default' ? 'number' : statusCode,
        bodyType
      };
    });

    const type = responseTypeNameTemplate(operationId);

    return {
      type,
      childTypes
    };
  });
};

const fromV3 = (): TemplateArgs => {
  throw new Error('OpenApi 3 not supported');
};

export const generateClientResponseTypes = ({
  openApiDocument,
  logger,
  schemaTypesModuleName
}: {
  openApiDocument: OpenApi.Document;
  logger?: Logger;
  schemaTypesModuleName: string;
}): string => {
  const log = logger?.create('Generating response types');

  const types =
    'swagger' in openApiDocument ? fromV2(openApiDocument) : fromV3();

  const code = responseTypesTemplate(schemaTypesModuleName, types);

  log?.(success());

  return code;
};
