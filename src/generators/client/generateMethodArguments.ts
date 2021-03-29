import { typeDefForSchema } from '../../helpers/v2';
import * as OpenApiV2 from '../../types/OpenApiV2';

export const generateMethodArguments = (
  parameters: OpenApiV2.Parameter[]
): string | null => {
  if (parameters.none()) {
    return null;
  }

  const properties = parameters.map(v => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { in: iin, name, required, ...rest } = v;

    const typeDef =
      rest.type === 'file'
        ? 'Blob'
        : typeDefForSchema(iin === 'body' ? rest.schema : rest);

    return `${name}${required ? '' : '?'}: ${typeDef}`;
  });

  return `{ ${properties.join('; ')} }`;
};
