/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateJsonSchema } from '../json-schema';
import { generateServerTypes } from '../server-types';
import { initLower } from '../../helpers/initLower';
import { fromV2 } from './v2';
import { fromV3 } from './v3';

export const generateStubs = ({
  logger,
  openApiDocument,
  serviceName
}: {
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  serviceName: string;
}): string => {
  const log = logger?.create('Generating server stubs');

  const jsonSchema = generateJsonSchema(openApiDocument, log);
  const types = generateServerTypes(openApiDocument, jsonSchema, log);

  const data =
    'swagger' in openApiDocument
      ? fromV2(openApiDocument, log)
      : fromV3(openApiDocument, log);

  const code = `
    import { RequestHandler } from '@laurence79/express-async-request-handler';
    import { Router } from 'express';

    ${types}
      
    type RequestLog<THeaders, TParams, TQuery, TBody> = {
      headers: THeaders;
      params: TParams;
      query: TQuery;
      body: TBody;
    };

    type ResponseStub<TStatus extends number = number, TBody = unknown> = {
      statusCode: TStatus;
      body: TBody;
    };

    type MethodStub<
      THeaders,
      TParams,
      TQuery,
      TRequestBody,
      TResponseStub extends ResponseStub
    > = {
      requestHandler: RequestHandler<
        TParams,
        TResponseStub['body'],
        TRequestBody,
        TQuery,
        Record<string, unknown>,
        TResponseStub['statusCode']
      >;
      respondWith(data: TResponseStub | TResponseStub[]): void;
      callLog(): RequestLog<THeaders, TParams, TQuery, TRequestBody>[];
    };

    const methodStub = <
      THeaders,
      TParams,
      TQuery,
      TRequestBody,
      TResponseStub extends ResponseStub
    >(): MethodStub<THeaders, TParams, TQuery, TRequestBody, TResponseStub> => {
      const log: RequestLog<THeaders, TParams, TQuery, TRequestBody>[] = [];

      let responseStub: TResponseStub | TResponseStub[] | null = null;

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

          if (Array.isArray(responseStub)) {
            const stub = responseStub.shift();

            if (!stub) {
              throw new Error('No more stubbed responses left');
            }

            return res.status(stub.statusCode).send(stub.body);
          }

          return res.status(responseStub.statusCode).send(responseStub.body);
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
      ${data
        .map(
          ({ operationId, methodStubType }) =>
            `readonly ${operationId}: ${methodStubType};`
        )
        .join('\n')}
    };

    export type ${serviceName}ServiceStub = {
      readonly middleware: RequestHandler;
      readonly reset: () => void;
      readonly stubs: () => MethodStubs;
    };

    export const ${initLower(serviceName)}ServiceStub 
    = (): ${serviceName}ServiceStub => {
      let methodStubs: MethodStubs;
      let currentRouter: RequestHandler;

      const reset = () => {
        methodStubs = {
          ${data
            .map(({ operationId }) => `${operationId}: methodStub()`)
            .join(',\n')}
        };

        currentRouter = Router()
          ${data
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
