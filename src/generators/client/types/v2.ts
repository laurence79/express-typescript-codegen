import * as HelpersV2 from '../../../helpers/open-api/v2';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import { LogFn, progress } from '../../../lib/cli-logging';
import { typeName } from '../../../helpers/open-api/typeName';

export const fromV2 = (
  document: OpenApiV2.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    binaryType?: 'Buffer' | 'Blob';
  },
  log?: LogFn
): string[] => {
  return Object.keys(document.definitions ?? {}).compactMap(key => {
    const value = document.definitions?.[key];

    if (!value) {
      return undefined;
    }

    const name = typeName(String(key));

    log?.(progress(`adding ${name}`));

    const typeDef = HelpersV2.typeDefForSchema(value, options);

    return `export type ${name} = ${typeDef};`;
  });
};
