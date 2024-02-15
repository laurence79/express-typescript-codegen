export const fieldTemplate = (
  name: string,
  required: boolean,
  type: string,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    readonlyDTOs: boolean;
  }
): string => {
  const fieldName = `"${name}"`;

  const { nonRequiredType, readonlyDTOs } = options;

  const accessModifier = readonlyDTOs ? 'readonly ' : '';

  if (required) {
    return `${accessModifier}${fieldName}: ${type}`;
  }

  const fieldNameWithOptional = ['optional', 'both'].includes(nonRequiredType)
    ? `${fieldName}?`
    : fieldName;

  const typeWithNull = ['nullable', 'both'].includes(nonRequiredType)
    ? `${type} | null`
    : type;

  return `${accessModifier}${fieldNameWithOptional}: ${typeWithNull}`;
};
