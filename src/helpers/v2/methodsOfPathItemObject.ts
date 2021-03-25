import { OperationObject, PathItemObject } from '../../types/OpenApiV2';

export type Methods = Omit<PathItemObject, '$ref' | 'parameters'>;

export const methodsOfPathItemObject = (
  pathItemObject: PathItemObject
): [keyof Methods, OperationObject][] => {
  return Object.keys(pathItemObject).compactMap(method => {
    if (method === '$ref' || method === 'parameters') {
      return undefined;
    }

    const op = pathItemObject[method];

    if (!op) {
      return undefined;
    }

    return [method, op];
  });
};
