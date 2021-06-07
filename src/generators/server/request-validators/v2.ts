/* eslint-disable no-template-curly-in-string */
import { mapOperations } from '../../../helpers/open-api/v2';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import 'ts-array-extensions';
import {
  parametersTypeNameTemplate,
  requestValidatorFunctionNameTemplate,
  requestValidatorTemplate
} from '../../../templates';
import { LogFn, progress } from '../../../lib/cli-logging';
import { expressRequestPropertyName } from '../../../helpers/open-api/expressRequestPropertyName';
import { initUpper } from '../../../helpers/initUpper';

export const fromV2 = (
  openApiDocument: OpenApiV2.Document,
  log?: LogFn
): string => {
  log?.(progress('Generating request body validators'));

  return mapOperations(openApiDocument)
    .compactMap(({ operationId, parameters }) => {
      if (parameters.none()) {
        return undefined;
      }

      const parameterTypes = parameters
        .map(p => p.in)
        .distinct()
        .map(p => ({
          typeName: parametersTypeNameTemplate(operationId, p),
          requestProperty: expressRequestPropertyName(p)
        }));

      log?.(progress(`Generating ${operationId}Validator`));

      const requestHandlerTypeName = `${initUpper(operationId)}RequestHandler`;

      return requestValidatorTemplate({
        requestHandlerTypeName,
        functionName: requestValidatorFunctionNameTemplate(operationId),
        parameterTypes
      });
    })
    .join('\n\n');
};
