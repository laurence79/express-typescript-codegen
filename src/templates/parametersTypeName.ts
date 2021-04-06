import { Parameter } from '../types/OpenApiV2';
import { initUpper } from '../helpers/initUpper';
import { ParameterObject } from '../types/OpenApiV3';

export const parametersTypeNameTemplate = (
  operationId: string,
  iin: Parameter['in'] | ParameterObject['in']
): string =>
  `${initUpper(operationId)}Request${initUpper(
    iin === 'formData' ? 'body' : iin
  )}`;
