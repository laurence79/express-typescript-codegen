import { mapOperations } from '../../../helpers/open-api/v2';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import 'ts-array-extensions';
import { LogFn, progress } from '../../../lib/cli-logging';
import {
  responseBodyTypeNameTemplate,
  parametersTypeNameTemplate
} from '../../../templates';
import { controllersTemplate } from '../../../templates/controllersTemplate';
import { initUpper } from '../../../helpers/initUpper';
import { initLower } from '../../../helpers/initLower';

export const fromV2 = (document: OpenApiV2.Document, log?: LogFn): string => {
  const handlers = mapOperations(document).map(
    ({ operationId, parameters, responses, path, method }) => {
      const responseBodyType =
        responses
          .compactMap(({ statusCode, response }) => {
            const { schema } = response;
            if (!schema) {
              return undefined;
            }
            return responseBodyTypeNameTemplate(operationId, statusCode);
          })
          .join(' | ') || undefined;

      const statusCodeType = responses
        .map(({ statusCode }) =>
          statusCode === 'default' ? 'number' : statusCode
        )
        .join(' | ');

      const bodyParamType = parameters.some(
        p => p.in === 'body' || (p.in === 'formData' && p.type !== 'file')
      )
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
      const controllerTypeName = `${initUpper(operationId)}Controller`;
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
        pathParamsType,
        responseBodyType,
        bodyParamType,
        queryParamsType,
        statusCodeType
      };
    }
  );

  return controllersTemplate(handlers);
};
