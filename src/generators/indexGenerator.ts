/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import { mapOperations } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import { LogFn, Logger, progress, success } from '../lib/cli-logging';
import { responseTypeNameTemplate } from '../templates';
import { parametersTypeNameTemplate } from '../templates/parametersTypeName';
import { GenerateCodeOptions } from '../types/GenerateCodeOptions';

export const generateIndex = ({
  logger,
  clientModuleName,
  output,
  routerModuleName,
  schemaTypesModuleName,
  serverStubsModuleName
}: {
  logger?: Logger;
  clientModuleName: string;
  output: GenerateCodeOptions['output'];
  routerModuleName: string;
  schemaTypesModuleName: string;
  serverStubsModuleName: string;
}): string => {
  const log = logger?.create('Generating index');

  const code = `
export * from './${schemaTypesModuleName}';
${output.includes('CLIENT') ? `export * from './${clientModuleName}';` : ''}
${output.includes('STUBS') ? `export * from './${serverStubsModuleName}';` : ''}
${output.includes('SERVER') ? `export * from './${routerModuleName}';` : ''}
`;

  log?.(success());

  return code;
};
