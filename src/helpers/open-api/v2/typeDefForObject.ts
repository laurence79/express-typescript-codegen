import { fieldTemplate } from '../../../templates';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import { TypeDefContext } from '../TypeDefContext';

export const typeDefForObject = (
  objectSchema: OpenApiV2.SchemaObject,
  document: OpenApiV2.Document,
  recursiveLookup: (
    schema: OpenApiV2.SchemaObject,
    document: OpenApiV2.Document,
    options: {
      nonRequiredType: 'optional' | 'nullable' | 'both';
    },
    context: TypeDefContext
  ) => string,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  },
  context: TypeDefContext
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
    const propertyType = recursiveLookup(
      propertyObject,
      document,
      options,
      context
    );

    return fieldTemplate(propertyName, isRequired, propertyType, options);
  });

  return `{ ${propertyList.join('; ')} }`;
};
