import * as OpenApi from '../../../types/OpenApi';
import { LogFn } from '../../../lib/cli-logging';
import { fromV2 } from './v2';
import { fromV3 } from './v3';
import { TypeDefContext } from '../../../helpers/open-api/TypeDefContext';

export const generateControllers = (
  openApiDocument: OpenApi.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    readonlyDTOs: boolean;
    emptyType: 'never' | 'unknown' | '{}';
  },
  context: TypeDefContext,
  log?: LogFn
): string => {
  return 'swagger' in openApiDocument
    ? fromV2(openApiDocument, options, context, log)
    : fromV3(openApiDocument, options, context, log);
};
