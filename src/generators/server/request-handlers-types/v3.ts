import { initUpper } from '../../../helpers/initUpper';
import { mapOperations } from '../../../helpers/open-api/v3';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import 'ts-array-extensions';
import { initLower } from '../../../helpers/initLower';
import { LogFn, progress } from '../../../lib/cli-logging';
import {
  responseBodyTypeNameTemplate,
  requestHandlersTemplate,
  parametersTypeNameTemplate
} from '../../../templates';

export const fromV3 = (document: OpenApiV3.Document, log?: LogFn): string => {
  const handlers = mapOperations(document).map(
    ({ operationId, parameters, responses, requestBody }) => {
      const responseBodyType =
        responses
          .compactMap(({ statusCode, response }) => {
            if (
              !response.content ||
              !('application/json' in response.content)
            ) {
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

      const bodyParamType =
        requestBody && Object.keys(requestBody.content).length > 0
          ? parametersTypeNameTemplate(operationId, 'body')
          : 'unknown';

      const queryParamsType = parameters.some(p => p.in === 'query')
        ? parametersTypeNameTemplate(operationId, 'query')
        : 'unknown';

      const pathParamsType = parameters.some(p => p.in === 'path')
        ? parametersTypeNameTemplate(operationId, 'path')
        : 'unknown';

      const methodName = initLower(operationId);

      const typeName = `${initUpper(operationId)}RequestHandler`;

      log?.(progress(typeName));

      return {
        methodName,
        typeName,
        pathParamsType,
        responseBodyType,
        bodyParamType,
        queryParamsType,
        statusCodes
      };
    }
  );

  return requestHandlersTemplate(handlers);
};
