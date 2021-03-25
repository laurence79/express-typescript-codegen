/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import { mapOperations } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import { LogFn, Logger, progress, success } from '../lib/cli-logging';
import { responseTypeNameTemplate } from '../templates';
import { parametersTypeNameTemplate } from '../templates/parametersTypeName';

const fromV2 = (document: OpenApiV2.Document, log?: LogFn) => {
  return mapOperations(document).map(
    ({ method, parameters, path, operationId, responses }) => {
      const bodyArg = parameters.first(p => p.in === 'body');
      const pathArgs = parameters.filter(p => p.in === 'path');
      const queryArgs = parameters.filter(p => p.in === 'query');
      const headerArgs = parameters.filter(p => p.in === 'header');

      const responseTypeName = responseTypeNameTemplate(operationId);

      const interpolationPath =
        '`${this.baseUrl}' +
        path.replace(/\{(?:.*?)\}/g, x => '$' + x) +
        (queryArgs.any() ? '?${query}' : '') +
        '`';

      const argsType = [
        ...(pathArgs.any()
          ? [`Schema.${parametersTypeNameTemplate(operationId, 'path')}`]
          : []),

        ...(queryArgs.any()
          ? [`Schema.${parametersTypeNameTemplate(operationId, 'query')}`]
          : []),

        ...(headerArgs.any()
          ? [`Schema.${parametersTypeNameTemplate(operationId, 'header')}`]
          : []),

        ...(bodyArg
          ? [
              `{ body: Schema.${parametersTypeNameTemplate(
                operationId,
                'body'
              )} }`
            ]
          : [])
      ].join('&');

      log?.(progress(`Adding ${method} ${path}`));

      const fetchOpts = `{
        ${[
          'method',
          ...(headerArgs.any()
            ? [`headers: {${headerArgs.map(h => h.name).join(',')}}`]
            : []),
          ...(bodyArg ? ['body: JSON.stringify(body)'] : [])
        ].join(',\n')}
      }`;

      const statusCodes = responses
        .map(({ statusCode }) =>
          statusCode === 'default' ? 'number' : statusCode
        )
        .join(' | ');

      const hasResponseBody = responses.some(r => r.response.schema);

      const paramNames = parameters
        .filter(p => p.in !== 'body')
        .map(p => p.name)
        .concat(bodyArg ? ['body'] : []);

      return `
public async ${operationId}(${
        argsType ? `args: ${argsType}` : ''
      }): Promise<Responses.${responseTypeName}> {
  ${argsType ? `const {${paramNames.join(', ')}} = args;` : ''}

  ${
    queryArgs.any()
      ? `const query = qs.stringify({ ${queryArgs
          .map(q => q.name)
          .join(', ')} });`
      : ''
  }

  const method = '${method.toUpperCase()}',
  const url = ${interpolationPath};

  const response = await fetch(url, ${fetchOpts});

  const { status } = response;

  ${
    hasResponseBody
      ? 'const responseBody = (await response.json()) as unknown;'
      : ''
  }

  this.logger?.('REST API Call', {
    ${[
      'method',
      'url',
      ...(bodyArg ? ['requestBody: body'] : []),
      'status',
      ...(hasResponseBody ? ['responseBody'] : []),
      ...headerArgs.concat(pathArgs).map(a => a.name)
    ].join(',\n')}
  });

  return {
    status,
    body: ${hasResponseBody ? 'responseBody' : 'undefined'}
  } as Responses.${responseTypeName};
}`;
    }
  );
};

const fromV3 = () => {
  throw new Error('OpenApi 3 not supported');
};

export const generateClient = ({
  logger,
  openApiDocument,
  clientResponseTypesModuleName,
  schemaTypesModuleName
}: {
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  clientResponseTypesModuleName: string;
  schemaTypesModuleName: string;
}): string => {
  const log = logger?.create('Generating client');

  const types =
    'swagger' in openApiDocument ? fromV2(openApiDocument, log) : fromV3();

  const code = `
import qs from 'qs';
import { fetch } from 'cross-fetch';
import * as Responses from './${clientResponseTypesModuleName}';
import * as Schema from './${schemaTypesModuleName}';
  
type LogFn = (message: string, data: Record<string, unknown>) => void;

export class Client {
  public constructor(
    public readonly baseUrl: string,
    private readonly logger?: LogFn
  ) {}
  
  ${types.join('\n\n')}
}
`;

  log?.(success());

  return code;
};
