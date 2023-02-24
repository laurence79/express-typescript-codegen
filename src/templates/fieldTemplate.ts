import { IdentifierFormat, makeIdentifier } from './makeIdentifier';

export const fieldTemplate = (
  name: string,
  required: boolean,
  type: string,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  }
): string => {
  const fieldName = makeIdentifier(name, IdentifierFormat.camelCase);

  if (required) {
    return `${fieldName}: ${type}`;
  }

  const { nonRequiredType } = options;

  const fieldNameWithOptional = ['optional', 'both'].includes(nonRequiredType)
    ? `"${fieldName}"?`
    : `"${fieldName}"`;

  const typeWithNull = ['nullable', 'both'].includes(nonRequiredType)
    ? `${type} | null`
    : type;

  return `${fieldNameWithOptional}: ${typeWithNull}`;
};
