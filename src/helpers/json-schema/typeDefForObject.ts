import { JSONSchema7, JSONSchema7Definition } from 'json-schema';
import { fieldTemplate } from '../../templates';

export const typeDefForObject = (
  objectSchema: JSONSchema7,
  recursiveLookup: (
    schema: JSONSchema7Definition,
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
