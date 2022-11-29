import { fieldTemplate } from '../../../templates';
import * as OpenApiV3 from '../../../types/OpenApiV3';

export const typeDefForObject = (
  objectSchema: OpenApiV3.SchemaObject,
  recursiveLookup: (
    schema: OpenApiV3.SchemaObject | OpenApiV3.ReferenceObject,
    options: {
      nonRequiredType: 'optional' | 'nullable' | 'both';
    }
  ) => string,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  }
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
    const propertyType = recursiveLookup(propertyObject, options);

    return fieldTemplate(propertyName, isRequired, propertyType, options);
  });

  return `{ ${propertyList.join('; ')} }`;
};
