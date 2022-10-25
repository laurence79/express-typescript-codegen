import { Parameter } from '../types/OpenApiV2';
import { initUpper } from '../helpers/initUpper';
import { ParameterObject } from '../types/OpenApiV3';
import { safeName } from './safeName';

export const parametersTypeNameTemplate = (
  operationId: string,
  iin: Parameter['in'] | ParameterObject['in']
): string =>
  `${initUpper(safeName(operationId))}Request${initUpper(
    iin === 'formData' ? 'body' : iin
  )}`;
