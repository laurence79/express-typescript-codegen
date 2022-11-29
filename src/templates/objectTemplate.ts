import { fieldTemplate } from './fieldTemplate';

export const objectTemplate = (
  fields: { name: string; required: boolean; type: string }[],
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  }
): string => {
  return fields.none()
    ? 'unknown'
    : `{${fields
        .map(f => fieldTemplate(f.name, f.required, f.type, options))
        .join(';')}}`;
};
