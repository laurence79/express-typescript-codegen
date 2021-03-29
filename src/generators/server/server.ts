/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateServerTypes } from '../generateServerTypes';
import { generateRequestHandlersTypes } from './generateRequestHandlersTypes';
import { generateRouter } from './generateRouter';
import { generateJsonSchema } from '../generateJsonSchema';
import { generateRequestValidators } from './generateRequestValidators';

const fromV3 = () => {
  throw new Error('OpenApi 3 not supported');
};

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

  const jsonSchema =
    'swagger' in openApiDocument
      ? generateJsonSchema(openApiDocument, log)
      : fromV3();

  const types =
    'swagger' in openApiDocument
      ? generateServerTypes(openApiDocument, jsonSchema, log)
      : fromV3();

  const handlers =
    'swagger' in openApiDocument
      ? generateRequestHandlersTypes(openApiDocument, log)
      : fromV3();

  const validators =
    'swagger' in openApiDocument
      ? generateRequestValidators(openApiDocument, log)
      : fromV3();

  const router =
    'swagger' in openApiDocument
      ? generateRouter(openApiDocument, serviceName, log)
      : fromV3();

  const code = `
    import Ajv from 'ajv';
    import { Request, Router } from 'express';
    import { RequestHandler } from '@laurence79/express-async-request-handler';

    export type ValidationOptions = {
      logger?: (req: Request) => (message: string, data: Record<string, unknown>) => void;
    };

    ${types.join('\n\n')}

    ${handlers.join('\n\n')}

    const ajv = new Ajv({ strict: false });
    ajv.addSchema(${JSON.stringify(jsonSchema)});

    ${validators.join('\n\n')}

    ${router}
  `;

  log?.(success());

  return code;
};
