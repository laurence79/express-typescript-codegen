import * as HelpersV3 from '../../../helpers/open-api/v3';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import { LogFn, progress } from '../../../lib/cli-logging';
import { typeName } from '../../../helpers/open-api/typeName';

export const fromV3 = (
  document: OpenApiV3.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    binaryType?: 'Buffer' | 'Blob';
  },
  log?: LogFn
): string[] => {
  return Object.keys(document.components?.schemas ?? {}).compactMap(key => {
    const value = document.components?.schemas?.[key];

    if (!value) {
      return undefined;
    }

    const name = typeName(String(key));

    log?.(progress(`adding ${name}`));

    const typeDef = HelpersV3.typeDefForSchema(value, options);

    return `export type ${name} = ${typeDef};`;
  });
};
