import path from 'path';
import { generateClient } from './generators/client/client';
import { generateServerClasses } from './generators/server-classes/server';
import { generateServerFunctional } from './generators/server-functional/server';
import { generateStubs } from './generators/stubs';
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
      case 'SERVER-FUNCTIONAL':
        return generateServerFunctional;
      case 'SERVER-CLASSES':
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
