import { OperationObject, PathItemObject } from '../../../types/OpenApiV3';

export type Methods = Omit<
  PathItemObject,
  '$ref' | 'parameters' | 'summary' | 'description' | 'servers'
>;

export const methodsOfPathItemObject = (
  pathItemObject: PathItemObject
): [keyof Methods, OperationObject][] => {
  return Object.keys(pathItemObject).compactMap(method => {
    if (
      method === '$ref' ||
      method === 'parameters' ||
      method === 'summary' ||
      method === 'description' ||
      method === 'servers'
    ) {
      return undefined;
    }

    const op = pathItemObject[method];

    if (!op) {
      return undefined;
    }

    return [method, op];
  });
};
