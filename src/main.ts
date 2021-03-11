import fs from 'fs';
import path from 'path';
import { createRequestHandlersTypes } from './createRequestHandlersTypes';
import { createJsonSchema } from './createJsonSchema';
import { createParameterTypes } from './createParameterTypes';
import { createQueryTypes } from './createQueryTypes';
import { createRouter } from './createRouter';
import { createTypesFromJsonSchema } from './createTypesFromJsonSchema';
import { createValidators } from './createValidators';
import { loadSwagger } from './loadSwagger';

const swagger = loadSwagger(`${__dirname}/example/spec.yaml`);

const outDirectory = `${__dirname}/example/generated`;
fs.mkdirSync(outDirectory, { recursive: true });

const schema = createJsonSchema(
  swagger,
  path.join(outDirectory, 'schema.json')
);

createTypesFromJsonSchema(schema, path.join(outDirectory, 'schemaTypes.ts'));

createValidators(swagger, path.join(outDirectory, 'schemaValidators.ts'));

createQueryTypes(swagger, path.join(outDirectory, 'queryTypes.ts'));

createParameterTypes(swagger, path.join(outDirectory, 'parameterTypes.ts'));

createRequestHandlersTypes(
  swagger,
  path.join(outDirectory, 'requestHandlerTypes.ts')
);

createRouter(swagger, path.join(outDirectory, 'router.ts'));
