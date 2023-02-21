/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateMethods } from './methods';

export const generateClient = ({
  logger,
  openApiDocument,
  serviceName,
  nonRequiredType
}: {
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  serviceName: string;
  nonRequiredType: 'optional' | 'nullable' | 'both';
}): string => {
  const log = logger?.create('Generating client');

  const types: Record<string, string> = {};

  const methods = generateMethods(
    openApiDocument,
    { nonRequiredType },
    (name, def) => {
      types[name] = def;
    },
    log
  );

  const code = `
    import qs from 'qs';
    import { fetch } from 'cross-fetch';

    ${Object.entries(types)
      .map(([name, def]) => `export type ${name} = ${def};`)
      .join('\n\n')}

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
