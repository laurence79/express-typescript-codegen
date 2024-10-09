import path from 'path';
import * as Client from './generators/client/generate';
import * as Express from './generators/express/generate';
import * as ExpressWithDi from './generators/express-with-di/generate';
import * as Types from './generators/types/generate';
import { assertNever } from './helpers/assertNever';
import { initUpper } from './helpers/initUpper';
import { load } from './helpers/document-loader/load';
import { writeFile } from './helpers/writeFile';
import { makeIdentifier } from './templates/makeIdentifier';
import { GenerateCodeOptions } from './types/GenerateCodeOptions';
import * as OpenApi from './types/OpenApi';

const defaultOptions = {
  output: 'CLIENT'
};

export const generateCode = async (
  inputOptions: GenerateCodeOptions
): Promise<void> => {
  const options = {
    ...defaultOptions,
    ...inputOptions
  };

  const openApiDocument = ((await load(
    options.openApiDocumentFilenameOrUrl,
    options.logger
  )) as unknown) as OpenApi.Document;

  const serviceName =
    inputOptions.serviceName ?? makeIdentifier(openApiDocument.info.title);

  const filename = (() => {
    const outputTypeName = initUpper(
      options.output.toLowerCase().replace('-', ' ')
    ).replace(' ', '');

    const file = `${serviceName}${outputTypeName}.generated.ts`;

    if (!options.outputFilename) {
      return file;
    }

    if (path.extname(options.outputFilename)) {
      return options.outputFilename;
    }

    return path.join(options.outputFilename, file);
  })();

  const renderDeps = {
    ...options,
    openApiDocument,
    serviceName,
    filename
  };

  const method = (() => {
    switch (options.output) {
      case 'CLIENT':
      case 'client':
        return Client.generate;
      case 'SERVER':
      case 'express-di':
        return ExpressWithDi.generate;
      case 'express':
        return Express.generate;
      case 'TYPES':
      case 'types':
        return Types.generate;
      default:
        return assertNever(options.output);
    }
  })();

  writeFile({
    ...renderDeps,
    content: method(renderDeps)
  });
};
