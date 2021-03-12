import * as OpenApiV2 from '../../types/OpenApisV2';
import { dereferenceParameterObject } from './dereferenceParameterObject';
import { isReferenceObject } from './isReferenceObject';

type MappedOperation = {
  path: string;
  method: string;
  operationId: string;
  operation: OpenApiV2.OperationObject;
  parameters: OpenApiV2.ParameterObject[];
};

export const mapParameters = (
  document: OpenApiV2.Document
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
      const { parameters } = operationObject;
      const inlined = parameters?.map(p =>
        isReferenceObject(p) ? dereferenceParameterObject(p, document) : p
      );

      return {
        path,
        method,
        operationId,
        operation: operationObject,
        parameters: inlined ?? []
      };
    });
  });
};
