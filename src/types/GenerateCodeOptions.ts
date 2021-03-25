import { Logger } from '../lib/cli-logging';

export type GenerateCodeOptions = {
  clientModuleName?: string;
  clientResponseTypesModuleName?: string;
  jsonSchemaFilename?: string;
  logger?: Logger;
  openApiDocumentFilename: string;
  output: ('SERVER' | 'CLIENT' | 'STUBS')[];
  outputDirectory?: string;
  requestHandlersModuleName?: string;
  requestSchemaValidatorsModuleName?: string;
  routerModuleName?: string;
  schemaTypesModuleName?: string;
  serverStubsModuleName?: string;
};
