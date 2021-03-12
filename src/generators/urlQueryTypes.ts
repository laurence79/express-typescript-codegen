import { initUpper } from '../helpers/initUpper';
import { mapParameters } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import { LogFn, Logger, progress, success } from '../lib/cli-logging';

const fromV2 = (document: OpenApiV2.Document, log?: LogFn): string[] => {
  return mapParameters(document).map(({ operationId, parameters }) => {
    const typeName = `${initUpper(operationId)}Query`;

    log?.(progress(`Adding ${typeName}`));

    const fields = parameters
      .filter(p => p.in === 'query')
      .map(({ name }) => name);

    const definition = fields.none()
      ? 'ParsedQs'
      : `{ ${fields.map(field => `${field}?: string`).join('; ')} }`;

    return `export type ${typeName} = ${definition}`;
  });
};

const fromV3 = (): string[] => {
  throw new Error('OpenApi 3 not supported');
};

export const generateURLQueryTypes = ({
  openApiDocument,
  logger
}: {
  openApiDocument: OpenApi.Document;
  logger?: Logger;
}): string => {
  const log = logger?.create('Generating typescript types for queries');

  const types =
    'swagger' in openApiDocument ? fromV2(openApiDocument, log) : fromV3();

  const code = `
  import { ParsedQs } from 'qs';
  
  ${types.join('\n\n')}
`;

  log?.(success());

  return code;
};
