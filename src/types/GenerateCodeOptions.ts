import { Logger } from '../lib/cli-logging';

export interface GenerateCodeOptions {
  logger?: Logger;
  openApiDocumentFilenameOrUrl: string;
  output:
    | 'SERVER'
    | 'CLIENT'
    | 'TYPES'
    | 'client'
    | 'express'
    | 'express-di'
    | 'types'
    | 'msw-handlers';
  outputFilename?: string;
  serviceName?: string;
  nonRequiredType: 'nullable' | 'optional' | 'both';
  readonlyDTOs: boolean;
  emptyType: 'never' | 'unknown' | '{}';
}
