/* eslint-disable no-template-curly-in-string */
import { JSONSchema7 } from 'json-schema';
import { mapOperations } from '../../../helpers/open-api/v2';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import 'ts-array-extensions';
import { parametersTypeNameTemplate } from '../../../templates';
import { LogFn, progress } from '../../../lib/cli-logging';
import { expressRequestPropertyName } from '../../../helpers/open-api/expressRequestPropertyName';
import { requestValidationSchemaClassTemplate } from '../../../templates/requestValidationSchemaClassTemplate';

export const fromV2 = (
  openApiDocument: OpenApiV2.Document,
  jsonSchema: JSONSchema7,
  log?: LogFn
): string => {
  log?.(progress('Generating request body validators'));

  const operations = mapOperations(openApiDocument).map(
    ({ operationId, parameters }) => {
      const parameterTypes = parameters
        .map(p => p.in)
        .distinct()
        .map(p => ({
          typeName: parametersTypeNameTemplate(operationId, p),
          requestProperty: expressRequestPropertyName(p)
        }));

      log?.(progress(`Generating ${operationId}Validator`));

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
