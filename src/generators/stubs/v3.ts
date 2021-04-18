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

      const responseStubType =
        responses
          .map(({ statusCode, response }) => {
            const statusCodeType =
              statusCode === 'default' ? 'number' : statusCode;

            const responseBodyType = (() => {
              if (
                !response.content ||
                Object.keys(response.content).length === 0
              ) {
                return 'undefined';
              }

              return responseBodyTypeNameTemplate(operationId, statusCode);
            })();

            return `ResponseStub<${statusCodeType}, ${responseBodyType}>`;
          })
          .distinct()
          .join(' | ') || 'unknown';

      const methodStubType = `MethodStub<
        ${headersType},
        ${pathParamsType},
        ${queryParamsType},
        ${requestBodyType},
        ${responseStubType}
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
