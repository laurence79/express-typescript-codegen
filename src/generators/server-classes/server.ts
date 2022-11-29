/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateServerTypes } from '../server-types';
import { generateControllers } from './controllers';
import { generateJsonSchema } from '../json-schema';
import { generateRequestValidators } from './request-validators';
import { requestValidationMiddlewareClassTemplate } from '../../templates/requestValidationMiddlewareClassTemplate';

export const generateServerClasses = ({
  logger,
  openApiDocument,
  nonRequiredType
}: {
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  serviceName: string;
  nonRequiredType: 'optional' | 'nullable' | 'both';
}): string => {
  const log = logger?.create('Generating server');

  const jsonSchema = generateJsonSchema(openApiDocument, log);
  const types = generateServerTypes(
    openApiDocument,
    jsonSchema,
    { nonRequiredType },
    log
  );
  const controllers = generateControllers(openApiDocument, log);
  const validators = generateRequestValidators(
    openApiDocument,
    jsonSchema,
    log
  );

  const code = `
    import Ajv from 'ajv';
    import { AnyValidateFunction } from 'ajv/dist/core';
    import { Request, Response, Express, NextFunction, ParamsDictionary, RequestHandler } from 'express-serve-static-core';
    import { Router } from 'express';
    import { asyncRequestHandler } from '@laurence79/express-async-request-handler';
    import { ParsedQs } from 'qs';
    import { injectable } from 'tsyringe';
    
    ${types}

    ${validators}

    ${requestValidationMiddlewareClassTemplate()}

    ${controllers}
  `;

  log?.(success());

  return code;
};
