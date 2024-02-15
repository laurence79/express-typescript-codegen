/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generate } from './methods';
import { TypeDefContext } from '../../helpers/open-api/TypeDefContext';

export const generateTypes = ({
  logger,
  openApiDocument,
  nonRequiredType,
  readonlyDTOs
}: {
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  nonRequiredType: 'optional' | 'nullable' | 'both';
  readonlyDTOs: boolean;
}): string => {
  const log = logger?.create('Generating types');

  const context = new TypeDefContext();

  generate(openApiDocument, { nonRequiredType, readonlyDTOs }, context, log);

  const code = context.generateCode();

  log?.(success());

  return code;
};
