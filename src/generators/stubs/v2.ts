import { mapOperations } from '../../helpers/open-api/v2';
import * as OpenApiV2 from '../../types/OpenApiV2';
import { LogFn, progress } from '../../lib/cli-logging';
import { responseBodyTypeNameTemplate } from '../../templates';
import { parametersTypeNameTemplate } from '../../templates/parametersTypeName';

export const fromV2 = (
  document: OpenApiV2.Document,
  log?: LogFn
): {
  operationId: string;
  requestHandlerPath: string;
  method: string;
  methodStubType: string;
}[] => {
  return mapOperations(document).map(
    ({ method, path, parameters, operationId, responses }) => {
      log?.(progress(`Adding ${method} ${path}`));

      const bodyArg = parameters.first(
        p => p.in === 'body' || (p.in === 'formData' && p.type !== 'file')
      );
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

      const requestBodyType = bodyArg
        ? parametersTypeNameTemplate(operationId, 'body')
        : 'unknown';

      const responseStubType =
        responses
          .map(({ statusCode, response }) => {
            const statusCodeType =
              statusCode === 'default' ? 'number' : statusCode;

            const responseBodyType = (() => {
              const { schema } = response;

              if (!schema) {
                return 'undefined';
              }

              return responseBodyTypeNameTemplate(operationId, statusCode);
            })();

            return `ResponseStub<${statusCodeType}, ${responseBodyType}>`;
          })
          .distinct()
          .join(' | ') || 'ResponseStub';

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
