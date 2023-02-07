import { Logger } from '../lib/cli-logging';

export type GenerateCodeOptions = {
  logger?: Logger;
  openApiDocumentFilenameOrUrl: string;
  output:
    | 'SERVER'
    | 'SERVER-FUNCTIONAL'
    | 'SERVER-CLASSES'
    | 'CLIENT'
    | 'STUBS';
  outputFilename?: string;
  serviceName?: string;
  nonRequiredType: 'nullable' | 'optional' | 'both';
};
