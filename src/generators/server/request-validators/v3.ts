/* eslint-disable no-template-curly-in-string */
import { mapOperations } from '../../../helpers/open-api/v3';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import 'ts-array-extensions';
import {
  parametersTypeNameTemplate,
  requestValidatorFunctionNameTemplate,
  requestValidatorTemplate
} from '../../../templates';
import { LogFn, progress } from '../../../lib/cli-logging';
import { expressRequestPropertyName } from '../../../helpers/open-api/expressRequestPropertyName';

export const fromV3 = (
  openApiDocument: OpenApiV3.Document,
  log?: LogFn
): string => {
  log?.(progress('Generating request body validators'));

  return mapOperations(openApiDocument)
    .compactMap(({ operationId, parameters, requestBody }) => {
      const parameterTypes = parameters
        .map(p => p.in as OpenApiV3.ParameterObject['in'] | 'body')
        .distinct()
        .concat(
          requestBody && Object.keys(requestBody.content).length > 0
            ? ['body']
            : []
        )
        .map(p => ({
          typeName: parametersTypeNameTemplate(operationId, p),
          requestProperty: expressRequestPropertyName(p)
        }));

      if (parameterTypes.none()) {
        return undefined;
      }

      log?.(progress(`Generating ${operationId}Validator`));

      return requestValidatorTemplate({
        functionName: requestValidatorFunctionNameTemplate(operationId),
        parameterTypes
      });
    })
    .join('\n\n');
};
