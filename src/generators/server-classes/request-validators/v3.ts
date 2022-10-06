/* eslint-disable no-template-curly-in-string */
import { JSONSchema7 } from 'json-schema';
import { mapOperations } from '../../../helpers/open-api/v3';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import 'ts-array-extensions';
import { parametersTypeNameTemplate } from '../../../templates';
import { LogFn, progress } from '../../../lib/cli-logging';
import { expressRequestPropertyName } from '../../../helpers/open-api/expressRequestPropertyName';
import { requestValidationSchemaClassTemplate } from '../../../templates/requestValidationSchemaClassTemplate';

export const fromV3 = (
  openApiDocument: OpenApiV3.Document,
  jsonSchema: JSONSchema7,
  log?: LogFn
): string => {
  log?.(progress('Generating request validators'));

  const operations = mapOperations(openApiDocument).map(
    ({ operationId, parameters, requestBody }) => {
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

      return {
        name: operationId,
        parameterTypes
      };
    }
  );

  return requestValidationSchemaClassTemplate({
    jsonSchema,
    operations
  });
};
