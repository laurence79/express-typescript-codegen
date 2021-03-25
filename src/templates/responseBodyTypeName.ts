import { initUpper } from '../helpers/initUpper';

export const responseBodyTypeNameTemplate = (
  operationId: string,
  statusCode: string
): string => `${initUpper(operationId)}${statusCode}ResponseBody`;
