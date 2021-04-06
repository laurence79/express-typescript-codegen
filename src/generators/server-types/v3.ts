import { LogFn, progress } from '../../lib/cli-logging';
import * as OpenApiV3 from '../../types/OpenApiV3';
import { mapOperations } from '../../helpers/open-api/v3';
import { responseBodyTypeNameTemplate } from '../../templates';

export const fromV3 = (document: OpenApiV3.Document, log?: LogFn): string[] => {
  return mapOperations(document).flatMap(({ operationId, responses }) => {
    return responses.compactMap(({ statusCode, response }) => {
      if (response.content?.['application/json']) {
        return undefined;
      }

      const typeName = responseBodyTypeNameTemplate(operationId, statusCode);

      log?.(progress(`adding ${typeName}`));

      return `export type ${typeName} = Buffer;`;
    });
  });
};
