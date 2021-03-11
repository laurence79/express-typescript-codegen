import * as OpenAPIV2 from '../../types/OpenAPIV2';

export type MappedOperation = {
  path: string;
  method: string;
  operationId: string;
  operation: OpenAPIV2.OperationObject;
};

export const mapOperations = (
  document: OpenAPIV2.Document
): MappedOperation[] => {
  return Object.keys(document.paths).flatMap(path => {
    if (typeof path !== 'string') return [];

    const pathObject = document.paths[path];

    return Object.keys(pathObject).compactMap(method => {
      const operationObject = pathObject[method];

      if (typeof operationObject !== 'object') {
        return undefined;
      }
      if (!('operationId' in operationObject) || !operationObject.operationId) {
        throw new Error(`OperationId required for ${method} ${path}`);
      }

      const { operationId } = operationObject;

      return {
        path,
        method,
        operationId,
        operation: operationObject
      };
    });
  });
};
