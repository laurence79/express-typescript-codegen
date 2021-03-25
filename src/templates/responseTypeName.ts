import { initUpper } from '../helpers/initUpper';

export const responseTypeNameTemplate = (operationId: string): string =>
  `${initUpper(operationId)}Response`;
