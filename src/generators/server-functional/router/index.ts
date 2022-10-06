import * as OpenApi from '../../../types/OpenApi';
import { LogFn } from '../../../lib/cli-logging';
import { fromV2 } from './v2';
import { fromV3 } from './v3';

export const generateRouter = (
  openApiDocument: OpenApi.Document,
  serviceName: string,
  log?: LogFn
): string => {
  return 'swagger' in openApiDocument
    ? fromV2(openApiDocument, serviceName, log)
    : fromV3(openApiDocument, serviceName, log);
};
