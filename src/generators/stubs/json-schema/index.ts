import { JSONSchema7 } from 'json-schema';
import * as OpenApi from '../../../types/OpenApi';
import 'ts-array-extensions';
import { LogFn, progress } from '../../../lib/cli-logging';
import { fromV3 } from './v3';
import { fromV2 } from './v2';

export const generateJsonSchema = (
  openApiDocument: OpenApi.Document,
  log?: LogFn
): JSONSchema7 => {
  log?.(progress(`Generating JSON schema from Open API Document`));

  const schema =
    'swagger' in openApiDocument
      ? fromV2(openApiDocument, log)
      : fromV3(openApiDocument, log);

  return schema;
};
