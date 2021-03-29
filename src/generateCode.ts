import path from 'path';
import { generateClient } from './generators/client/client';
import { generateServer } from './generators/server/server';
import { generateStubs } from './generators/stubs/stubs';
import { assertNever } from './helpers/assertNever';
import { initUpper } from './helpers/initUpper';
import { loadOpenApiDocument } from './helpers/loadOpenApiDocument';
import { writeFile } from './helpers/writeFile';
import { serviceNameTemplate } from './templates';
import { GenerateCodeOptions } from './types/GenerateCodeOptions';

const defaultOptions = {
  output: 'CLIENT'
};

export const generateCode = (inputOptions: GenerateCodeOptions): void => {
  const options = {
    ...defaultOptions,
    ...inputOptions
  };

  const openApiDocument = loadOpenApiDocument(options);

  const serviceName =
    inputOptions.serviceName ?? serviceNameTemplate(openApiDocument.info.title);

  const filename = (() => {
    const file = `${serviceName}${initUpper(
      options.output.toLowerCase()
    )}.generated.ts`;

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
        return generateServer;
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
