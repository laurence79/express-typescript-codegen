/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import * as OpenApi from '../../types/OpenApi';
import 'ts-array-extensions';
import { Logger, success } from '../../lib/cli-logging';
import { generateMethods } from './methods';
import { TypeDefContext } from '../../helpers/open-api/TypeDefContext';

export const generate = ({
  logger,
  openApiDocument,
  nonRequiredType,
  readonlyDTOs,
  emptyType
}: {
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  nonRequiredType: 'optional' | 'nullable' | 'both';
  readonlyDTOs: boolean;
  emptyType: 'never' | 'unknown' | '{}';
}): string => {
  const log = logger?.create('Generating types');

  const context = new TypeDefContext();

  const handlers = generateMethods(
    openApiDocument,
    { nonRequiredType, readonlyDTOs, emptyType },
    context,
    log
  );

  const code = `
    import * as msw from 'msw';

    ${context.generateCode()}

    ${handlers.join('\n')}
  `;

  log?.(success());

  return code;
};
