import { JSONSchema7, JSONSchema7Definition } from 'json-schema';

export const typeDefForObject = (
  objectSchema: JSONSchema7,
  recursiveLookup: (schema: JSONSchema7Definition) => string
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
    const propertyType = recursiveLookup(propertyObject);

    return `${propertyName}: ${propertyType}${isRequired ? '' : ' | null'}`;
  });

  return `{ ${propertyList.join('; ')} }`;
};
