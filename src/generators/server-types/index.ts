import { JSONSchema7 } from 'json-schema';
import { LogFn, progress, success } from '../../lib/cli-logging';
import * as OpenApi from '../../types/OpenApi';
import { fromV2 } from './v2';
import { fromV3 } from './v3';
import { fromJsonSchema } from './jsonSchema';

export const generateServerTypes = (
  openApiDocument: OpenApi.Document,
  jsonSchema: JSONSchema7,
  log?: LogFn
): string => {
  log?.(progress('Generating typescript types'));

  const types = [
    ...fromJsonSchema(jsonSchema, log),
    ...('swagger' in openApiDocument
      ? fromV2(openApiDocument, log)
      : fromV3(openApiDocument, log))
  ];

  log?.(success());

  return types.join('\n\n');
};
