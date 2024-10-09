/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateHandlers } from './handlers';
import { TypeDefContext } from '../../helpers/open-api/TypeDefContext';

export const generate = ({
  logger,
  openApiDocument,
  nonRequiredType,
  readonlyDTOs
}: {
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  serviceName: string;
  nonRequiredType: 'optional' | 'nullable' | 'both';
  readonlyDTOs: boolean;
}): string => {
  const log = logger?.create('Generating');

  const context = new TypeDefContext();

  const controllers = generateHandlers(
    openApiDocument,
    { nonRequiredType, readonlyDTOs },
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
