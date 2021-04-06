export const fieldTemplate = (name: string, required: boolean, type: string) =>
  `${name}${required ? '' : '?'}: ${type}`;
