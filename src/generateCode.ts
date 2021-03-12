import { createJsonSchemaFromOpenApiDocument } from './helpers/createJsonSchemaFromOpenAPIDocument';
import {
  generateRequestHandlersTypes,
  generatePathParameterTypes,
  generateURLQueryTypes,
  generateRouter,
  generateTypesFromJsonSchema,
  generateJSONSchemaValidators
} from './generators';
import { loadOpenApiDocument } from './helpers/loadOpenApiDocument';
import { writeFiles } from './helpers/writeFiles';
import { GenerateCodeOptions } from './types/GenerateCodeOptions';

const defaultOptions = {
  jsonSchemaFilename: 'schema.json',
  jsonSchemaTypesModuleName: 'types',
  jsonSchemaValidatorsModuleName: 'validators',
  outputDirectory: 'generated',
  pathParameterTypesModuleName: 'parameterTypes',
  requestHandlersModuleName: 'handlers',
  queryTypesModuleName: 'queryTypes',
  routerModuleName: 'router'
};

export const generateCode = (inputOptions: GenerateCodeOptions): void => {
  const options = {
    ...defaultOptions,
    ...inputOptions
  };

  const openAPIDocument = loadOpenApiDocument(options);

  const jsonSchema = createJsonSchemaFromOpenApiDocument({
    ...options,
    openAPIDocument
  });

  const renderDeps = {
    ...options,
    openAPIDocument,
    jsonSchema
  };

  const files: { filename: string; content: string }[] = [
    {
      filename: options.jsonSchemaFilename,
      content: JSON.stringify(jsonSchema)
    },
    {
      filename: `${options.jsonSchemaTypesModuleName}.ts`,
      content: generateTypesFromJsonSchema(renderDeps)
    },
    {
      filename: `${options.jsonSchemaValidatorsModuleName}.ts`,
      content: generateJSONSchemaValidators(renderDeps)
    },
    {
      filename: `${options.queryTypesModuleName}.ts`,
      content: generateURLQueryTypes(renderDeps)
    },
    {
      filename: `${options.pathParameterTypesModuleName}.ts`,
      content: generatePathParameterTypes(renderDeps)
    },
    {
      filename: `${options.requestHandlersModuleName}.ts`,
      content: generateRequestHandlersTypes(renderDeps)
    },
    {
      filename: `${options.routerModuleName}.ts`,
      content: generateRouter(renderDeps)
    }
  ];

  writeFiles({ ...options, files });
};
