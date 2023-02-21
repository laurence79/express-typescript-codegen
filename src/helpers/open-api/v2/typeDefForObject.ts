import { fieldTemplate } from '../../../templates';
import * as OpenApiV2 from '../../../types/OpenApiV2';

export const typeDefForObject = (
  objectSchema: OpenApiV2.SchemaObject,
  recursiveLookup: (
    schema: OpenApiV2.SchemaObject,
    options: {
      nonRequiredType: 'optional' | 'nullable' | 'both';
    },
    emitType: (name: string, definition: string) => void
  ) => string,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  },
  emitType: (name: string, definition: string) => void
): string => {
  const { required, properties } = objectSchema;

  if (!properties) return 'unknown';

  const requiredProperties = Array.isArray(required) ? required : [];

  const propertyList = Object.keys(properties).compactMap(propertyName => {
    if (typeof propertyName !== 'string') {
      return undefined;
    }

    const propertyObject = properties[propertyName];
    const isRequired = requiredProperties.includes(propertyName);
    const propertyType = recursiveLookup(propertyObject, options, emitType);

    return fieldTemplate(propertyName, isRequired, propertyType, options);
  });

  return `{ ${propertyList.join('; ')} }`;
};
