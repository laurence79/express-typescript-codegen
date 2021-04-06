import * as OpenApiV3 from '../../../types/OpenApiV3';

export const typeDefForEnum = (
  members: NonNullable<OpenApiV3.SchemaObject['enum']>
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
