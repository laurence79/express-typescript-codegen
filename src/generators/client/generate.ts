import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateMethods } from './methods';
import { TypeDefContext } from '../../helpers/open-api/TypeDefContext';

export const generate = ({
  logger,
  openApiDocument,
  serviceName,
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
  const log = logger?.create('Generating client');

  const context = new TypeDefContext();

  const methods = generateMethods(
    openApiDocument,
    { nonRequiredType, readonlyDTOs, emptyType },
    context,
    log
  );

  const code = `
    import qs from 'qs';

    ${context.generateCode()}

    type ResponseWithData<TStatus, TData> = {
      status: TStatus;
      body: TData;
    };
    
    type LegacyLogFn = (message: string, data: Record<string, unknown>) => void;

    type Logger = Pick<typeof console, 'info' | 'error'>;

    export interface ${serviceName}ClientOptions {
      fetch: typeof fetch;
      logger: Logger | null;
      requestOptions: RequestInit;
    } 

    export class ${serviceName}Client {
      public constructor(
        public readonly baseUrl: string,
        options?: Partial<${serviceName}ClientOptions> | LegacyLogFn
      ) {
        if (typeof options === 'function') {
          this.options = {
            fetch,
            logger: {
              info: options,
              error: options
            },
            requestOptions: {}
          }
        } else {
          this.options = {
            fetch,
            logger: console,
            requestOptions: {},
            ...options
          }
        };
      }

      private readonly options: ${serviceName}ClientOptions;
      
      ${methods.join('\n\n')}
    }
  `;

  log?.(success());

  return code;
};
