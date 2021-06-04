/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateServerTypes } from '../server-types';
import { generateRequestHandlersTypes } from './request-handlers-types';
import { generateRouter } from './router';
import { generateJsonSchema } from '../json-schema';
import { generateRequestValidators } from './request-validators';

export const generateServer = ({
  logger,
  openApiDocument,
  serviceName
}: {
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  serviceName: string;
}): string => {
  const log = logger?.create('Generating server');

  const jsonSchema = generateJsonSchema(openApiDocument, log);
  const types = generateServerTypes(openApiDocument, jsonSchema, log);
  const handlers = generateRequestHandlersTypes(openApiDocument, log);
  const validators = generateRequestValidators(openApiDocument, log);
  const router = generateRouter(openApiDocument, serviceName, log);

  const code = `
    import Ajv from 'ajv';
    import { Request, Router } from 'express';
    import { RequestHandler } from '@laurence79/express-async-request-handler';

    export type TypedParams = Record<string, string | number | boolean>;

    export type ValidationOptions = {
      logger?: (
        req: Request<TypedParams, unknown, unknown, TypedQsRecord>
      ) => (message: string, data: Record<string, unknown>) => void;
    };
    
    export interface TypedQsArray extends Array<TypedQsElement> {}
    
    export interface TypedQsRecord extends Record<string, TypedQsElement> {}
    
    export type TypedQsElement =
      | undefined
      | string
      | boolean
      | number
      | TypedQsArray
      | TypedQsRecord;
    
    export type ValidationRequestHandler = RequestHandler<TypedParams, unknown, unknown, TypedQsRecord>;

    ${types}

    ${handlers}

    const ajv = new Ajv({ strict: false, coerceTypes: true });
    ajv.addSchema(${JSON.stringify(jsonSchema)});

    ${validators}

    ${router}
  `;

  log?.(success());

  return code;
};
