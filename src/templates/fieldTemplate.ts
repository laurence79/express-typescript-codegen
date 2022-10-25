import { safeName } from './safeName';

export const fieldTemplate = (
  name: string,
  required: boolean,
  type: string
): string => `${safeName(name)}${required ? '' : '?'}: ${type}`;
