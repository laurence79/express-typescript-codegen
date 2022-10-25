import { initUpper } from '../helpers/initUpper';
import { safeName } from './safeName';

export const responseBodyTypeNameTemplate = (
  operationId: string,
  statusCode: string
): string =>
  `${initUpper(safeName(operationId))}${initUpper(statusCode)}ResponseBody`;
