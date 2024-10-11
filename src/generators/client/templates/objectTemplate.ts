import { fieldTemplate } from '../../../templates/fieldTemplate';

export const objectTemplate = (
  fields: { name: string; required: boolean; type: string }[],
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    readonlyDTOs: boolean;
  }
): string => {
  return fields.none()
    ? 'unknown'
    : `{${fields
        .map(f => fieldTemplate(f.name, f.required, f.type, options))
        .join(';')}}`;
};
