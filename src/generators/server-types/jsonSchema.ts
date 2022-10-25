import { JSONSchema7 } from 'json-schema';
import { LogFn, progress } from '../../lib/cli-logging';
import { typeDefForSchema } from '../../helpers/json-schema';
import { initUpper } from '../../helpers/initUpper';
import { safeName } from '../../templates/safeName';

export const fromJsonSchema = (
  jsonSchema: JSONSchema7,
  log?: LogFn
): string[] => {
  const { definitions } = jsonSchema;

  if (!definitions) return [];

  return Object.keys(definitions).compactMap(typeName => {
    if (typeof typeName !== 'string') return undefined;

    const definition = definitions[typeName];

    log?.(progress(typeName));

    return `export type ${initUpper(safeName(typeName))} = ${typeDefForSchema(
      definition
    )};`;
  });
};
