import { initUpper } from '../helpers/initUpper';

export const pathParameterTypeName = (operationId: string): string =>
  `${initUpper(operationId)}Params`;
