import * as OpenApi from '../../../types/OpenApi';
import { LogFn } from '../../../lib/cli-logging';
import { fromV3 } from './v3';
import { fromV2 } from './v2';

export const generateMethods = (
  openApiDocument: OpenApi.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  },
  emitType: (name: string, code: string) => void,
  log?: LogFn
): string[] => {
  return 'swagger' in openApiDocument
    ? fromV2(openApiDocument, options, emitType, log)
    : fromV3(openApiDocument, options, emitType, log);
};
