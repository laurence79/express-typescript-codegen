import { initLower } from '../helpers/initLower';

export const requestValidatorFunctionNameTemplate = (
  operationId: string
): string => {
  return `${initLower(operationId)}Validator`;
};
