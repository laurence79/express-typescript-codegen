import * as OpenApi from '../../../types/OpenApi';
import { LogFn } from '../../../lib/cli-logging';
import { fromV3 } from './v3';
import { fromV2 } from './v2';
import { TypeDefContext } from '../../../helpers/open-api/TypeDefContext';

export const generateMethods = (
  openApiDocument: OpenApi.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  },
  context: TypeDefContext,
  log?: LogFn
): string[] => {
  return 'swagger' in openApiDocument
    ? fromV2(openApiDocument, options, context, log)
    : fromV3(openApiDocument, options, context, log);
};
