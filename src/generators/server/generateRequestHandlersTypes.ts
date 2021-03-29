import { initUpper } from '../../helpers/initUpper';
import { mapOperations } from '../../helpers/v2';
import * as OpenApiV2 from '../../types/OpenApiV2';
import 'ts-array-extensions';
import { initLower } from '../../helpers/initLower';
import { LogFn, progress } from '../../lib/cli-logging';
import { responseBodyTypeNameTemplate } from '../../templates';
import { parametersTypeNameTemplate } from '../../templates/parametersTypeName';

export const generateRequestHandlersTypes = (
  document: OpenApiV2.Document,
  log?: LogFn
): string[] => {
  return mapOperations(document).map(
    ({ operationId, parameters, responses }) => {
      const responseBodyType =
        responses
          .compactMap(({ statusCode, response }) => {
            const { schema } = response;
            if (!schema) {
              return undefined;
            }
            return responseBodyTypeNameTemplate(operationId, statusCode);
          })
          .join(' | ') || 'unknown';

      const statusCodes = responses
        .map(({ statusCode }) =>
          statusCode === 'default' ? 'number' : statusCode
        )
        .join(' | ');

      const bodyParamType = parameters.some(
        p => p.in === 'body' || (p.in === 'formData' && p.type !== 'file')
      )
        ? parametersTypeNameTemplate(operationId, 'body')
        : 'unknown';

      const queryParamsType = parameters.some(p => p.in === 'query')
        ? parametersTypeNameTemplate(operationId, 'query')
        : 'unknown';

      const pathParamsType = parameters.some(p => p.in === 'path')
        ? parametersTypeNameTemplate(operationId, 'path')
        : 'unknown';

      const typeName = `${initUpper(operationId)}RequestHandler`;

      log?.(progress(typeName));

      return `
        export type ${typeName} = RequestHandler<
          ${pathParamsType},
          ${responseBodyType},
          ${bodyParamType},
          ${queryParamsType},
          Record<string, any>,
          ${statusCodes}
        >`;
    }
  ).concat(`
    export type RequestHandlers = {
      ${mapOperations(document)
        .map(
          ({ operationId }) =>
            `${initLower(operationId)}: ${initUpper(operationId)}RequestHandler`
        )
        .join(';\n')}
    };
  `);
};
