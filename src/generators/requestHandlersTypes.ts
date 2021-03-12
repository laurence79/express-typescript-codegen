import { initUpper } from '../helpers/initUpper';
import {
  dereferenceResponseObject,
  isReferenceObject,
  mapParameters
} from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import { initLower } from '../helpers/initLower';
import { LogFn, Logger, progress, success } from '../lib/cli-logging';

const fromV2 = (
  document: OpenApiV2.Document,
  log?: LogFn
): { operationId: string; code: string }[] => {
  return mapParameters(document).map(
    ({ operationId, parameters, operation: { responses } }) => {
      const paramsType = `Param.${initUpper(operationId)}Params`;

      const responseBodyType =
        Object.keys(responses)
          .compactMap(statusCode => {
            const response = responses[statusCode];
            const responseObject = isReferenceObject(response)
              ? dereferenceResponseObject(response, document)
              : response;
            if (!responseObject) {
              return undefined;
            }
            const { schema } = responseObject;
            if (!schema) {
              return undefined;
            }
            return `Schema.${initUpper(operationId)}${statusCode}ResponseBody`;
          })
          .join(' | ') || 'unknown';

      const statusCodes = Object.keys(responses)
        .map(k => (k === 'default' ? 'number' : k))
        .join(' | ');

      const requestBodyType = parameters.some(p => p.in === 'body')
        ? `Schema.${initUpper(operationId)}RequestBody`
        : 'unknown';

      const queryType = `Query.${initUpper(operationId)}Query`;

      const typeName = `${initUpper(operationId)}RequestHandler`;

      log?.(progress(typeName));

      return {
        code: `export type ${typeName} =
          RequestHandler<
            ${paramsType},
            ${responseBodyType},
            ${requestBodyType},
            ${queryType},
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
  jsonSchemaTypesModuleName,
  logger,
  openApiDocument,
  pathParameterTypesModuleName,
  queryTypesModuleName
}: {
  jsonSchemaTypesModuleName: string;
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  pathParameterTypesModuleName: string;
  queryTypesModuleName: string;
}): string => {
  const log = logger?.create(
    'Generating typescript types for request handlers'
  );

  const types =
    'swagger' in openApiDocument ? fromV2(openApiDocument, log) : fromV3();

  const code = `
  import { RequestHandler } from '@laurence79/express-async-request-handler';
  import * as Schema from './${jsonSchemaTypesModuleName}';
  import * as Query from './${queryTypesModuleName}';
  import * as Param from './${pathParameterTypesModuleName}';
  
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
