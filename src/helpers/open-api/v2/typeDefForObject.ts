import * as OpenApiV2 from '../../../types/OpenApiV2';

export const typeDefForObject = (
  objectSchema: OpenApiV2.SchemaObject,
  recursiveLookup: (
    schema: OpenApiV2.SchemaObject,
    options: {
      nonRequiredType: 'optional' | 'nullable' | 'both';
    }
  ) => string,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  }
): string => {
  const { required, properties } = objectSchema;

  const { nonRequiredType = 'undefined' } = options;

  if (!properties) return 'unknown';

  const requiredProperties = Array.isArray(required) ? required : [];

  const propertyList = Object.keys(properties).compactMap(propertyName => {
    if (typeof propertyName !== 'string') {
      return undefined;
    }

    const propertyObject = properties[propertyName];
    const isRequired = requiredProperties.includes(propertyName);
    const propertyType = recursiveLookup(propertyObject, options);

    if (nonRequiredType === 'undefined') {
      return `"${propertyName}"${isRequired ? '' : '?'}: ${propertyType}`;
    }

    return `"${propertyName}": ${propertyType}${!isRequired ? ' | null' : ''}`;
  });

  return `{ ${propertyList.join('; ')} }`;
};
