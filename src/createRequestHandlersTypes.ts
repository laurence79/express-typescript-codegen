import fs from 'fs';
import prettier from 'prettier';
import { initUpper } from './helpers/initUpper';
import {
  dereferenceResponseObject,
  isReferenceObject,
  mapParameters
} from './helpers/v2';
import * as OpenAPI from './types/OpenAPI';
import * as OpenAPIV2 from './types/OpenAPIV2';
import 'ts-array-extensions';
import { prettierStyle } from './helpers/prettierStyle';
import { initLower } from './helpers/initLower';

const fromV2 = (
  document: OpenAPIV2.Document
): { operationId: string; code: string }[] => {
  return mapParameters(document).map(
    ({ operationId, parameters, operation: { responses } }) => {
      const paramsType = `Param.${initUpper(operationId)}Params`;

      const responseBodyType = Object.keys(responses)
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
        .join(' | ');

      const statusCodes = Object.keys(responses).join(' | ');

      const requestBodyType = parameters.some(p => p.in === 'body')
        ? `Schema.${initUpper(operationId)}RequestBody`
        : 'unknown';

      const queryType = `Query.${initUpper(operationId)}Query`;

      return {
        code: `export type ${initUpper(operationId)}RequestHandler =
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
  throw new Error('OpenAPI 3 not supported');
};

export const createRequestHandlersTypes = (
  document: OpenAPI.Document,
  filename: string
): void => {
  const types = 'swagger' in document ? fromV2(document) : fromV3();

  const code = `
  import * as Schema from './schemaTypes';
  import * as Query from './queryTypes';
  import * as Param from './parameterTypes';
  import { RequestHandler } from '../../lib/express-async';
  
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

  fs.writeFileSync(filename, prettier.format(code, prettierStyle));
};
