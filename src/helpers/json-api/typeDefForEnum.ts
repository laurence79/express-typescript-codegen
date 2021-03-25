import { JSONSchema7Definition, JSONSchema7Type } from 'json-schema';

export const typeDefForEnum = (
  members: JSONSchema7Type[],
  onwardLookup: (schema: JSONSchema7Definition) => string
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
        if (Array.isArray(e)) {
          throw new Error(
            "Don't know what to do with an array-like enum member"
          );
        }
        return onwardLookup(e);
      }
      return e.toString();
    })
    .join(' | ');
};
