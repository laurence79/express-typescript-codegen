import { fieldTemplate } from '../../../templates';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import { TypeDefContext } from '../TypeDefContext';

export const typeDefForObject = (
  objectSchema: OpenApiV3.SchemaObject,
  document: OpenApiV3.Document,
  recursiveLookup: (
    schema: OpenApiV3.SchemaObject | OpenApiV3.ReferenceObject,
    document: OpenApiV3.Document,
    options: {
      nonRequiredType: 'optional' | 'nullable' | 'both';
      readonlyDTOs: boolean;
    },
    context: TypeDefContext
  ) => string,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    readonlyDTOs: boolean;
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
