import { mapOperations } from '../../helpers/open-api/v3';
import * as OpenApiV3 from '../../types/OpenApiV3';
import { LogFn, progress } from '../../lib/cli-logging';
import { responseBodyTypeNameTemplate } from '../../templates';
import { parametersTypeNameTemplate } from '../../templates/parametersTypeName';

export const fromV3 = (
  document: OpenApiV3.Document,
  log?: LogFn
): {
  operationId: string;
  requestHandlerPath: string;
  method: string;
  methodStubType: string;
}[] => {
  return mapOperations(document).map(
    ({ method, path, parameters, operationId, responses, requestBody }) => {
      log?.(progress(`Adding ${method} ${path}`));

      const pathArgs = parameters.filter(p => p.in === 'path');
      const queryArgs = parameters.filter(p => p.in === 'query');
      const headerArgs = parameters.filter(p => p.in === 'header');

      const headersType = headerArgs.any()
        ? parametersTypeNameTemplate(operationId, 'header')
        : 'unknown';

      const pathParamsType = pathArgs.any()
        ? parametersTypeNameTemplate(operationId, 'path')
        : 'unknown';

      const queryParamsType = queryArgs.any()
        ? parametersTypeNameTemplate(operationId, 'query')
        : 'unknown';

      const requestBodyType = requestBody
        ? parametersTypeNameTemplate(operationId, 'body')
        : 'unknown';

      const responseBodyType =
        responses
          .map(({ statusCode, response }) => {
            if (
              !response.content ||
              Object.keys(response.content).length === 0
            ) {
              return 'unknown';
            }

            return responseBodyTypeNameTemplate(operationId, statusCode);
          })
          .distinct()
          .join(' | ') || 'unknown';

      const statusCodes = responses
        .map(({ statusCode }) =>
          statusCode === 'default' ? 'number' : statusCode
        )
        .join(' | ');

      const methodStubType = `MethodStub<
        ${headersType},
        ${pathParamsType},
        ${queryParamsType},
        ${requestBodyType},
        ${statusCodes},
        ${responseBodyType}
      >`;

      const requestHandlerPath = path.replace(
        /\{(?:.*?)\}/g,
        x => `:${x.substr(1, x.length - 2)}`
      );

      return {
        operationId,
        requestHandlerPath,
        method,
        methodStubType
      };
    }
  );
};
