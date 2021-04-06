import * as OpenApi from '../../../types/OpenApi';
import { LogFn } from '../../../lib/cli-logging';
import { fromV3 } from './v3';
import { fromV2 } from './v2';

export const generateMethods = (
  openApiDocument: OpenApi.Document,
  log?: LogFn
): string[] => {
  return 'swagger' in openApiDocument
    ? fromV2(openApiDocument, log)
    : fromV3(openApiDocument, log);
};
