import { JSONSchema7 } from 'json-schema';
import * as OpenApi from '../../../types/OpenApi';
import { LogFn } from '../../../lib/cli-logging';
import { fromV2 } from './v2';
import { fromV3 } from './v3';

export const generateRequestValidators = (
  openApiDocument: OpenApi.Document,
  jsonSchema: JSONSchema7,
  log?: LogFn
): string => {
  return 'swagger' in openApiDocument
    ? fromV2(openApiDocument, jsonSchema, log)
    : fromV3(openApiDocument, jsonSchema, log);
};
