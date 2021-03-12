import { mapParameters } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import { LogFn, Logger, progress, success } from '../lib/cli-logging';
import { pathParameterTypeName } from '../templates';

const fromV2 = (document: OpenApiV2.Document, log?: LogFn): string[] => {
  return mapParameters(document).map(({ operationId, parameters }) => {
    const typeName = pathParameterTypeName(operationId);

    log?.(progress(typeName));

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
  throw new Error('OpenApi 3 not supported');
};

export const generatePathParameterTypes = ({
  openApiDocument,
  logger
}: {
  openApiDocument: OpenApi.Document;
  logger?: Logger;
}): string => {
  const log = logger?.create('Generating typescript types for path parameters');

  const types =
    'swagger' in openApiDocument ? fromV2(openApiDocument, log) : fromV3();

  const code = `
  import { ParamsDictionary } from 'express-serve-static-core';
  
  ${types.join('\n\n')}
`;

  log?.(success());

  return code;
};
