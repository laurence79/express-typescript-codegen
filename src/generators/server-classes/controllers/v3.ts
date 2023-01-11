import { mapOperations } from '../../../helpers/open-api/v3';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import 'ts-array-extensions';
import { LogFn, progress } from '../../../lib/cli-logging';
import {
  responseBodyTypeNameTemplate,
  parametersTypeNameTemplate
} from '../../../templates';
import { controllersTemplate } from '../../../templates/controllersTemplate';
import { initUpper } from '../../../helpers/initUpper';
import { initLower } from '../../../helpers/initLower';

export const fromV3 = (document: OpenApiV3.Document, log?: LogFn): string => {
  const handlers = mapOperations(document).map(
    ({ path, operationId, parameters, responses, requestBody, method }) => {
      const responseTypes = responses.compactMap(({ statusCode, response }) => {
        const bodyType =
          !response.content || !('application/json' in response.content)
            ? undefined
            : responseBodyTypeNameTemplate(operationId, statusCode);

        return {
          bodyType,
          statusCodeType: String(statusCode)
        };
      });

      const bodyParamType =
        requestBody && Object.keys(requestBody.content).length > 0
          ? parametersTypeNameTemplate(operationId, 'body')
          : undefined;

      const queryParamsType = parameters.some(p => p.in === 'query')
        ? parametersTypeNameTemplate(operationId, 'query')
        : undefined;

      const pathParamsType = parameters.some(p => p.in === 'path')
        ? parametersTypeNameTemplate(operationId, 'path')
        : undefined;

      const requestTypeName = `${initUpper(operationId)}Request`;
      const responseTypeName = `${initUpper(operationId)}Response`;
      const controllerTypeName = `${initUpper(operationId)}Handler`;
      const controllerMethodName = initLower(operationId);

      const expressPath = path.replace(
        /\{(?:.*?)\}/g,
        x => `:${x.substr(1, x.length - 2)}`
      );

      log?.(progress(operationId));

      return {
        httpMethod: method,
        expressPath,
        requestTypeName,
        responseTypeName,
        controllerTypeName,
        controllerMethodName,
        operationId,
        pathParamsType,
        bodyParamType,
        queryParamsType,
        responseTypes
      };
    }
  );

  return controllersTemplate(handlers);
};
