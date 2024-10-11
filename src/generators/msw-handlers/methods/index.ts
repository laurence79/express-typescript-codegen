import * as OpenApi from '../../../types/OpenApi';
import { LogFn } from '../../../lib/cli-logging';
import { fromV3 } from './v3';
import { fromV2 } from './v2';
import { TypeDefContext } from '../../../helpers/open-api/TypeDefContext';

export const generateMethods = (
  openApiDocument: OpenApi.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    readonlyDTOs: boolean;
    emptyType: 'never' | 'unknown' | '{}';
  },
  context: TypeDefContext,
  log?: LogFn
): string[] => {
  if ('swagger' in openApiDocument) {
    return fromV2(openApiDocument, options, context, log);
  }
  return fromV3(openApiDocument, options, context, log);
};
