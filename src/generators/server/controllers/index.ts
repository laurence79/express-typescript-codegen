import * as OpenApi from '../../../types/OpenApi';
import { LogFn } from '../../../lib/cli-logging';
import { fromV2 } from './v2';
import { fromV3 } from './v3';

export const generateControllers = (
  openApiDocument: OpenApi.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  },
  emitType: (name: string, code: string) => void,
  log?: LogFn
): string => {
  return 'swagger' in openApiDocument
    ? fromV2(openApiDocument, options, emitType, log)
    : fromV3(openApiDocument, options, emitType, log);
};
