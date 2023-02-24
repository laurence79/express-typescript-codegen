import { initUpper } from '../helpers/initUpper';
import { makeIdentifier } from './makeIdentifier';

export const responseBodyTypeNameTemplate = (
  operationId: string,
  statusCode: string
): string =>
  `${makeIdentifier(operationId)}${initUpper(statusCode)}ResponseBody`;
