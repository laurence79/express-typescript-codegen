import * as OpenApi from '../../../types/OpenApi';
import { LogFn } from '../../../lib/cli-logging';
import { fromV2 } from './v2';
import { fromV3 } from './v3';

export const generateTypes = (
  openApiDocument: OpenApi.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  },
  log?: LogFn
): string[] => {
  return 'swagger' in openApiDocument
    ? fromV2(openApiDocument, options, log)
    : fromV3(openApiDocument, options, log);
};
