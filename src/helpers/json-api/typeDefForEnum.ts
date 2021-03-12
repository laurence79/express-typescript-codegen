import { JSONSchema7Type } from 'json-schema';

export const typeDefForEnum = (members: JSONSchema7Type[]): string => {
  return members
    .map(e => {
      if (typeof e === 'string') {
        return `"${e}"`;
      }
      if (e === null) {
        return 'null';
      }
      return e.toString();
    })
    .join(' | ');
};
