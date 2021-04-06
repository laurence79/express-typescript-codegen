import * as OpenApi from '../../../types/OpenApi';
import { LogFn } from '../../../lib/cli-logging';
import { fromV2 } from './v2';
import { fromV3 } from './v3';

export const generateRequestHandlersTypes = (
  openApiDocument: OpenApi.Document,
  log?: LogFn
): string => {
  return 'swagger' in openApiDocument
    ? fromV2(openApiDocument, log)
    : fromV3(openApiDocument, log);
};
