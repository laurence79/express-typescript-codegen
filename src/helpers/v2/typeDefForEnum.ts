import * as OpenApiV2 from '../../types/OpenApiV2';

export const typeDefForEnum = (
  members: NonNullable<OpenApiV2.SchemaObject['enum']>,
  onwardLookup: (schema: OpenApiV2.SchemaObject) => string
): string => {
  return members
    .map(e => {
      if (typeof e === 'string') {
        return `"${e}"`;
      }
      if (e === null) {
        return 'null';
      }
      if (typeof e === 'object') {
        return onwardLookup(e);
      }
      throw new Error(`Unexpected enum member`);
    })
    .join(' | ');
};
