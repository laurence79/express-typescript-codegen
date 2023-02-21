import { LogFn, progress } from '../../../lib/cli-logging';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import { mapOperations } from '../../../helpers/open-api/v2';
import { responseBodyTypeNameTemplate } from '../../../templates';

export const fromV2 = (document: OpenApiV2.Document, log?: LogFn): string[] => {
  return mapOperations(document).flatMap(({ operationId, responses }) => {
    return responses.compactMap(({ statusCode, response }) => {
      const { schema } = response;

      if (!schema) {
        return undefined;
      }

      if (schema.type !== 'file') {
        return undefined;
      }

      const typeName = responseBodyTypeNameTemplate(operationId, statusCode);

      log?.(progress(`adding ${typeName}`));

      return `export type ${typeName} = Buffer;`;
    });
  });
};
