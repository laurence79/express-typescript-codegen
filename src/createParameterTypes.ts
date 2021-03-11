import fs from 'fs';
import prettier from 'prettier';
import { initUpper } from './helpers/initUpper';
import { mapParameters } from './helpers/v2';
import * as OpenAPI from './types/OpenAPI';
import * as OpenAPIV2 from './types/OpenAPIV2';
import 'ts-array-extensions';
import { prettierStyle } from './helpers/prettierStyle';

const fromV2 = (document: OpenAPIV2.Document): string[] => {
  return mapParameters(document).map(({ operationId, parameters }) => {
    const typeName = `${initUpper(operationId)}Params`;

    const fields = parameters
      .filter(p => p.in === 'path')
      .map(({ name }) => name);

    const definition = fields.none()
      ? 'ParamsDictionary'
      : `{ ${fields.map(field => `${field}: string`).join('; ')} }`;

    return `export type ${typeName} = ${definition}`;
  });
};

const fromV3 = (): string[] => {
  throw new Error('OpenAPI 3 not supported');
};

export const createParameterTypes = (
  document: OpenAPI.Document,
  filename: string
): void => {
  const types = 'swagger' in document ? fromV2(document) : fromV3();

  const code = `
  import { ParamsDictionary } from 'express-serve-static-core';
  
  ${types.join('\n\n')}
`;

  fs.writeFileSync(filename, prettier.format(code, prettierStyle));
};
