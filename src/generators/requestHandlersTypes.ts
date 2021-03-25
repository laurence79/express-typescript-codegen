import { initUpper } from '../helpers/initUpper';
import { mapOperations } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import { initLower } from '../helpers/initLower';
import { LogFn, Logger, progress, success } from '../lib/cli-logging';
import { responseBodyTypeNameTemplate } from '../templates';
import { parametersTypeNameTemplate } from '../templates/parametersTypeName';

const fromV2 = (
  document: OpenApiV2.Document,
  log?: LogFn
): { operationId: string; code: string }[] => {
  return mapOperations(document).map(
    ({ operationId, parameters, responses }) => {
      const responseBodyType =
        responses
          .compactMap(({ statusCode, response }) => {
            const { schema } = response;
            if (!schema) {
              return undefined;
            }
            return `Schema.${responseBodyTypeNameTemplate(
              operationId,
              statusCode
            )}`;
          })
          .join(' | ') || 'unknown';

      const statusCodes = responses
        .map(({ statusCode }) =>
          statusCode === 'default' ? 'number' : statusCode
        )
        .join(' | ');

      const bodyParamType = parameters.some(p => p.in === 'body')
        ? `Schema.${parametersTypeNameTemplate(operationId, 'body')}`
        : 'unknown';

      const queryParamsType = parameters.some(p => p.in === 'query')
        ? `Schema.${parametersTypeNameTemplate(operationId, 'query')}`
        : 'unknown';

      const pathParamsType = parameters.some(p => p.in === 'path')
        ? `Schema.${parametersTypeNameTemplate(operationId, 'path')}`
        : 'unknown';

      const typeName = `${initUpper(operationId)}RequestHandler`;

      log?.(progress(typeName));

      return {
        code: `export type ${typeName} =
          RequestHandler<
            ${pathParamsType},
            ${responseBodyType},
            ${bodyParamType},
            ${queryParamsType},
            Record<string, any>,
            ${statusCodes}>`,
        operationId
      };
    }
  );
};

const fromV3 = (): { operationId: string; code: string }[] => {
  throw new Error('OpenApi 3 not supported');
};

export const generateRequestHandlersTypes = ({
  schemaTypesModuleName,
  logger,
  openApiDocument
}: {
  schemaTypesModuleName: string;
  logger?: Logger;
  openApiDocument: OpenApi.Document;
}): string => {
  const log = logger?.create(
    'Generating typescript types for request handlers'
  );

  const types =
    'swagger' in openApiDocument ? fromV2(openApiDocument, log) : fromV3();

  const code = `
  import { RequestHandler } from '@laurence79/express-async-request-handler';
  import * as Schema from './${schemaTypesModuleName}';
  
  ${types.map(t => t.code).join('\n\n')}

  export type RequestHandlers = {
    ${types
      .map(
        t =>
          `${initLower(t.operationId)}: ${initUpper(
            t.operationId
          )}RequestHandler`
      )
      .join(';\n')}
  };
`;

  log?.(success());

  return code;
};
