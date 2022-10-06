import { Logger } from '../lib/cli-logging';

export type GenerateCodeOptions = {
  logger?: Logger;
  openApiDocumentFilename: string;
  output:
    | 'SERVER'
    | 'SERVER-FUNCTIONAL'
    | 'SERVER-CLASSES'
    | 'CLIENT'
    | 'STUBS';
  outputFilename?: string;
  serviceName?: string;
};
