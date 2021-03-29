import { Logger } from '../lib/cli-logging';

export type GenerateCodeOptions = {
  logger?: Logger;
  openApiDocumentFilename: string;
  output: 'SERVER' | 'CLIENT' | 'STUBS';
  outputFilename?: string;
  serviceName?: string;
};
