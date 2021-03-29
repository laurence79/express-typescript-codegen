import { typeDefForSchema } from '../../helpers/v2/typeDefForSchema';
import * as OpenApiV2 from '../../types/OpenApiV2';
import { LogFn, progress } from '../../lib/cli-logging';

export const generateTypes = (
  document: OpenApiV2.Document,
  log?: LogFn
): string[] => {
  return Object.keys(document.definitions ?? {}).compactMap(key => {
    const value = document.definitions?.[key];

    if (!value) {
      return undefined;
    }

    log?.(progress(`adding ${key}`));

    const typeDef = typeDefForSchema(value);

    return `export type ${key} = ${typeDef};`;
  });
};
