import { Logger } from '../lib/cli-logging';

export type GenerateCodeOptions = {
  logger?: Logger;
  openApiDocumentFilenameOrUrl: string;
  output: 'SERVER' | 'CLIENT' | 'TYPES';
  outputFilename?: string;
  serviceName?: string;
  nonRequiredType: 'nullable' | 'optional' | 'both';
  readonlyDTOs: boolean;
};
