/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import { mapOperations } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import { LogFn, Logger, progress, success } from '../lib/cli-logging';
import { responseBodyTypeNameTemplate } from '../templates';
import { parametersTypeNameTemplate } from '../templates/parametersTypeName';

const fromV2 = (document: OpenApiV2.Document, log?: LogFn) => {
  return mapOperations(document).map(
    ({ method, path, parameters, operationId, responses }) => {
      log?.(progress(`Adding ${method} ${path}`));

      const bodyArg = parameters.first(p => p.in === 'body');
      const pathArgs = parameters.filter(p => p.in === 'path');
      const queryArgs = parameters.filter(p => p.in === 'query');
      const headerArgs = parameters.filter(p => p.in === 'header');

      const headersType = headerArgs.any()
        ? `Schema.${parametersTypeNameTemplate(operationId, 'header')}`
        : 'unknown';

      const pathParamsType = pathArgs.any()
        ? `Schema.${parametersTypeNameTemplate(operationId, 'path')}`
        : 'unknown';

      const queryParamsType = queryArgs.any()
        ? `Schema.${parametersTypeNameTemplate(operationId, 'query')}`
        : 'unknown';

      const requestBodyType = bodyArg
        ? `Schema.${parametersTypeNameTemplate(operationId, 'body')}`
        : 'unknown';

      const responseBodyType =
        responses
          .compactMap(({ statusCode, response }) => {
            const { schema } = response;
            if (!schema) {
              return undefined;
            }
            return `Schema.${responseBodyTypeNameTemplate(
              operationId,
              statusCode
            )}`;
          })
          .join(' | ') || 'unknown';

      const statusCodes = responses
        .map(({ statusCode }) =>
          statusCode === 'default' ? 'number' : statusCode
        )
        .join(' | ');

      const methodStubType = `MethodStub<
        ${headersType},
        ${pathParamsType},
        ${queryParamsType},
        ${requestBodyType},
        ${statusCodes},
        ${responseBodyType}
      >`;

      const requestHandlerPath = path.replace(
        /\{(?:.*?)\}/g,
        x => `:${x.substr(1, x.length - 2)}`
      );

      return {
        operationId,
        requestHandlerPath,
        method,
        methodStubType
      };
    }
  );
};

const fromV3 = () => {
  throw new Error('OpenApi 3 not supported');
};

export const generateServerStub = ({
  logger,
  openApiDocument,
  schemaTypesModuleName
}: {
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  schemaTypesModuleName: string;
}): string => {
  const log = logger?.create('Generating server stubs');

  const types =
    'swagger' in openApiDocument ? fromV2(openApiDocument, log) : fromV3();

  const code = `
import { RequestHandler } from '@laurence79/express-async-request-handler';
import { Router } from 'express';
import * as Schema from './${schemaTypesModuleName}';
  
type RequestLog<THeaders, TParams, TQuery, TBody> = {
  headers: THeaders;
  params: TParams;
  query: TQuery;
  body: TBody;
};

type ResponseStub<TStatus extends number, TBody> = {
  statusCode: TStatus;
  body: TBody;
};

type MethodStub<
  THeaders,
  TParams,
  TQuery,
  TRequestBody,
  TStatus extends number,
  TResponseBody
> = {
  requestHandler: RequestHandler<
    TParams,
    TResponseBody,
    TRequestBody,
    TQuery,
    Record<string, unknown>,
    TStatus
  >;
  respondWith(data: ResponseStub<TStatus, TResponseBody>): void;
  callLog(): RequestLog<THeaders, TParams, TQuery, TRequestBody>[];
};

const methodStub = <
  THeaders,
  TParams,
  TQuery,
  TRequestBody,
  TStatus extends number,
  TResponseBody
>(): MethodStub<
  THeaders,
  TParams,
  TQuery,
  TRequestBody,
  TStatus,
  TResponseBody
> => {
  const log: RequestLog<THeaders, TParams, TQuery, TRequestBody>[] = [];

  let responseStub: ResponseStub<TStatus, TResponseBody> | null = null;

  return {
    requestHandler: (req, res) => {
      const { headers, params, query, body } = req;

      log.push({
        headers: (headers as unknown) as THeaders,
        params,
        query,
        body
      });

      if (!responseStub) {
        throw new Error('Method not stubbed');
      }

      res.status(responseStub.statusCode).send(responseStub.body);
    },

    respondWith(data) {
      responseStub = data;
    },

    callLog() {
      return log;
    }
  };
};

type MethodStubs = {
  ${types
    .map(
      ({ operationId, methodStubType }) =>
        `readonly ${operationId}: ${methodStubType};`
    )
    .join('\n')}
};

export type ServiceStub = {
  readonly middleware: RequestHandler;
  readonly reset: () => void;
  readonly stubs: () => MethodStubs;
};

export const serviceStub = (): ServiceStub => {
  let methodStubs: MethodStubs;
  let currentRouter: RequestHandler;

  const reset = () => {
    methodStubs = {
      ${types
        .map(({ operationId }) => `${operationId}: methodStub()`)
        .join(',\n')}
    };

    currentRouter = Router()
      ${types
        .map(
          ({ method, operationId, requestHandlerPath }) =>
            `.${method}('${requestHandlerPath}', methodStubs.${operationId}.requestHandler)`
        )
        .join('\n')}
  };

  reset();

  return {
    reset,
    middleware: (...args: Parameters<RequestHandler>) => currentRouter(...args),
    stubs: () => methodStubs
  };
};
`;

  log?.(success());

  return code;
};
