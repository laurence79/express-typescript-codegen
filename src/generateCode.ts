import path from 'path';
import { generateClient } from './generators/client/client';
import { generateServerClasses } from './generators/server/server';
import { generateStubs } from './generators/stubs';
import { assertNever } from './helpers/assertNever';
import { initUpper } from './helpers/initUpper';
import { load } from './helpers/load';
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
        return generateClient;
      case 'SERVER':
        return generateServerClasses;
      case 'STUBS':
        return generateStubs;
      default:
        return assertNever(options.output);
    }
  })();

  writeFile({
    ...renderDeps,
    content: method(renderDeps)
  });
};
