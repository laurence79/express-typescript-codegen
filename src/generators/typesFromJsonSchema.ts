import { JSONSchema7 } from 'json-schema';
import { Logger, progress, success } from '../lib/cli-logging';
import { typeDefForSchema } from '../helpers/json-api';

export const generateTypesFromJsonSchema = ({
  jsonSchema,
  logger
}: {
  jsonSchema: JSONSchema7;
  logger?: Logger;
}): string => {
  const log = logger?.create('Generating typescript types from JSON schema');

  const { definitions } = jsonSchema;

  if (!definitions) return '';

  const types = Object.keys(definitions).compactMap(typeName => {
    if (typeof typeName !== 'string') return undefined;

    const definition = definitions[typeName];

    log?.(progress(typeName));

    return `export type ${typeName} = ${typeDefForSchema(definition)};`;
  });

  const code = types.join('\n\n');

  log?.(success());

  return code;
};
