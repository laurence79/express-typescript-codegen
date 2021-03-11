import fs from 'fs';
import prettier from 'prettier';
import { mapParameters } from './helpers/v2';
import * as OpenAPI from './types/OpenAPI';
import * as OpenAPIV2 from './types/OpenAPIV2';
import 'ts-array-extensions';
import { prettierStyle } from './helpers/prettierStyle';
import { validator } from './templates';

const fromV2 = (document: OpenAPIV2.Document): string[] => {
  return mapParameters(document).compactMap(({ operationId, parameters }) => {
    if (parameters.some(p => p.in === 'body')) {
      return operationId;
    }
    return undefined;
  });
};

const fromV3 = (): string[] => {
  throw new Error('OpenAPI 3 not supported');
};

export const createValidators = (
  document: OpenAPI.Document,
  filename: string
): void => {
  const operationIds = 'swagger' in document ? fromV2(document) : fromV3();
  const code = validator(operationIds);
  fs.writeFileSync(filename, prettier.format(code, prettierStyle));
};
