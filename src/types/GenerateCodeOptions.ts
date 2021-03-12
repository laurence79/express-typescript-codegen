import { Logger } from '../lib/cli-logging';

export type GenerateCodeOptions = {
  jsonSchemaFilename?: string;
  jsonSchemaTypesModuleName?: string;
  jsonSchemaValidatorsModuleName?: string;
  logger?: Logger;
  openApiDocumentFilename: string;
  outputDirectory?: string;
  pathParameterTypesModuleName?: string;
  requestHandlersModuleName?: string;
  queryTypesModuleName?: string;
  routerModuleName?: string;
};
