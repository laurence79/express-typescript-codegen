import { fieldTemplate } from '../../../templates/fieldTemplate';

export const objectTemplate = (
  fields: { name: string; required: boolean; type: string }[],
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    readonlyDTOs: boolean;
    emptyType: 'never' | 'unknown' | '{}';
  }
): string => {
  return fields.none()
    ? options.emptyType
    : `{${fields
        .map(f => fieldTemplate(f.name, f.required, f.type, options))
        .join(';')}}`;
};
