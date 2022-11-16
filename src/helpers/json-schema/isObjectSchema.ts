import { JSONSchema7 } from 'json-schema';

export const isObjectSchema = (o: JSONSchema7): boolean => {
  return o.type === 'object' || 'properties' in o;
};
