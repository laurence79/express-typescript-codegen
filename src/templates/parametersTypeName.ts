import { Parameter } from '../types/OpenApiV2';
import { initUpper } from '../helpers/initUpper';

export const parametersTypeNameTemplate = (
  operationId: string,
  iin: Parameter['in']
): string =>
  `${initUpper(operationId)}Request${initUpper(
    iin === 'formData' ? 'body' : iin
  )}`;
