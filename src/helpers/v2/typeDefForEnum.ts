import { JSONSchema4Type } from 'json-schema';
import * as OpenApiV2 from '../../types/OpenApiV2';

export const typeDefForEnum = (
  members: JSONSchema4Type[],
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
