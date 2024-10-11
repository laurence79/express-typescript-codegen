import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateControllers } from './controllers';
import { TypeDefContext } from '../../helpers/open-api/TypeDefContext';

export const generate = ({
  logger,
  openApiDocument,
  nonRequiredType,
  readonlyDTOs,
  emptyType
}: {
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  serviceName: string;
  nonRequiredType: 'optional' | 'nullable' | 'both';
  readonlyDTOs: boolean;
  emptyType: 'never' | 'unknown' | '{}';
}): string => {
  const log = logger?.create('Generating server');

  const context = new TypeDefContext();

  const controllers = generateControllers(
    openApiDocument,
    { nonRequiredType, readonlyDTOs, emptyType },
    context,
    log
  );

  const code = `
    import type { Request, Response, Express, NextFunction, ParamsDictionary, ErrorRequestHandler } from 'express-serve-static-core';
    import { Router } from 'express';
    import { ParsedQs } from 'qs';
    import * as ExpressJonValidator from 'express-json-validator-middleware';
    
    ${context.generateCode()}

    ${controllers}
  `;

  log?.(success());

  return code;
};
