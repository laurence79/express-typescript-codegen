import * as OpenApiV2 from '../../../types/OpenApiV2';

export const typeDefForEnum = (
  members: NonNullable<OpenApiV2.SchemaObject['enum']>
): string => {
  return members
    .map(e => {
      if (typeof e === 'string') {
        return `"${e}"`;
      }
      if (e === null) {
        return 'null';
      }
      if (typeof e === 'number') {
        return `${e}`;
      }
      if (typeof e === 'object') {
        return JSON.stringify(e);
      }
      throw new Error(`Unexpected enum member`);
    })
    .join(' | ');
};
