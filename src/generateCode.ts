import { generateJsonSchema } from './generators/jsonSchema';
import {
  generateRequestHandlersTypes,
  generateRouter,
  generateTypesFromJsonSchema,
  generateRequestValidators,
  generateClientResponseTypes,
  generateClient,
  generateServerStub,
  generateIndex
} from './generators';
import { loadOpenApiDocument } from './helpers/loadOpenApiDocument';
import { writeFiles } from './helpers/writeFiles';
import { GenerateCodeOptions } from './types/GenerateCodeOptions';

const defaultOptions = {
  clientModuleName: 'client',
  clientResponseTypesModuleName: 'clientResponseTypes',
  jsonSchemaFilename: 'schema.json',
  output: ['CLIENT', 'SERVER', 'STUBS'],
  outputDirectory: 'generated',
  requestHandlersModuleName: 'handlers',
  requestSchemaValidatorsModuleName: 'requestValidators',
  routerModuleName: 'router',
  schemaTypesModuleName: 'schemaTypes',
  serverStubsModuleName: 'serverStubs'
};

export const generateCode = (inputOptions: GenerateCodeOptions): void => {
  const options = {
    ...defaultOptions,
    ...inputOptions
  };

  const openApiDocument = loadOpenApiDocument(options);

  const jsonSchema = generateJsonSchema({
    ...options,
    openApiDocument
  });

  const renderDeps = {
    ...options,
    openApiDocument,
    jsonSchema
  };

  const when = (
    targets: GenerateCodeOptions['output'],
    generator: () => { filename: string; content: string }
  ): { filename: string; content: string } | null => {
    if (targets.union(options.output).any()) {
      return generator();
    }

    return null;
  };

  const files: { filename: string; content: string }[] = [
    when(['SERVER'], () => ({
      filename: options.jsonSchemaFilename,
      content: JSON.stringify(jsonSchema)
    })),
    {
      filename: `${options.schemaTypesModuleName}.ts`,
      content: generateTypesFromJsonSchema(renderDeps)
    },
    when(['SERVER'], () => ({
      filename: `${options.requestSchemaValidatorsModuleName}.ts`,
      content: generateRequestValidators(renderDeps)
    })),
    when(['SERVER'], () => ({
      filename: `${options.requestHandlersModuleName}.ts`,
      content: generateRequestHandlersTypes(renderDeps)
    })),
    when(['SERVER'], () => ({
      filename: `${options.routerModuleName}.ts`,
      content: generateRouter(renderDeps)
    })),
    when(['CLIENT'], () => ({
      filename: `${options.clientResponseTypesModuleName}.ts`,
      content: generateClientResponseTypes(renderDeps)
    })),
    when(['CLIENT'], () => ({
      filename: `${options.clientModuleName}.ts`,
      content: generateClient(renderDeps)
    })),
    when(['STUBS'], () => ({
      filename: `${options.serverStubsModuleName}.ts`,
      content: generateServerStub(renderDeps)
    })),
    {
      filename: 'index.ts',
      content: generateIndex(renderDeps)
    }
  ].compact();

  writeFiles({ ...options, files });
};
