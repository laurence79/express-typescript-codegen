/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateControllers } from './controllers';
import { TypeDefContext } from '../../helpers/open-api/TypeDefContext';

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

  const context = new TypeDefContext();

  const controllers = generateControllers(
    openApiDocument,
    { nonRequiredType },
    context,
    log
  );

  const code = `
    import { Request, Response, Express, NextFunction, ParamsDictionary, ErrorRequestHandler } from 'express-serve-static-core';
    import { Router } from 'express';
    import { asyncRequestHandler } from '@laurence79/express-async-request-handler';
    import { ParsedQs } from 'qs';
    import { injectable } from 'tsyringe';
    import { Validator, ValidationError } from 'express-json-validator-middleware';
    
    ${context.generateCode()}

    ${controllers}
  `;

  log?.(success());

  return code;
};
