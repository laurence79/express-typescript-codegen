/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateControllers } from './controllers';

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

  const types: Record<string, string> = {};

  const controllers = generateControllers(
    openApiDocument,
    { nonRequiredType },
    (name, def) => {
      types[name] = def;
    },
    log
  );

  const code = `
    import { Request, Response, Express, NextFunction, ParamsDictionary, ErrorRequestHandler } from 'express-serve-static-core';
    import { Router } from 'express';
    import { asyncRequestHandler } from '@laurence79/express-async-request-handler';
    import { ParsedQs } from 'qs';
    import { injectable } from 'tsyringe';
    import { Validator, ValidationError } from 'express-json-validator-middleware';
    
    ${Object.entries(types)
      .map(([name, def]) => `export type ${name} = ${def};`)
      .join('\n\n')}

    ${controllers}
  `;

  log?.(success());

  return code;
};
