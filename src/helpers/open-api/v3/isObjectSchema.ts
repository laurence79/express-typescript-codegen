import * as OpenApiV3 from '../../../types/OpenApiV3';

export const isObjectSchema = (o: OpenApiV3.SchemaObject): boolean => {
  return o.type === 'object' || 'properties' in o;
};
