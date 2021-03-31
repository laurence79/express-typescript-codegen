/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateMethods } from './generateMethods';
import { generateTypes } from './generateTypes';

const fromV3 = () => {
  throw new Error('OpenApi 3 not supported');
};

export const generateClient = ({
  logger,
  openApiDocument,
  serviceName
}: {
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  serviceName: string;
}): string => {
  const log = logger?.create('Generating client');

  const types =
    'swagger' in openApiDocument
      ? generateTypes(openApiDocument, log)
      : fromV3();

  const methods =
    'swagger' in openApiDocument
      ? generateMethods(openApiDocument, log)
      : fromV3();

  const code = `
    import qs from 'qs';
    import { fetch } from 'cross-fetch';

    ${types.join('\n\n')}

    type ResponseWithData<TStatus, TData> = {
      status: TStatus;
      body: TData;
    };
      
    type LogFn = (message: string, data: Record<string, unknown>) => void;

    export class ${serviceName}Client {
      public constructor(
        public readonly baseUrl: string,
        private readonly logger?: LogFn
      ) {}
      
      ${methods.join('\n\n')}
    }
  `;

  log?.(success());

  return code;
};
