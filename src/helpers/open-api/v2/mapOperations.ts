import * as OpenApiV2 from '../../../types/OpenApiV2';
import { dereferenceParameter } from './dereferenceParameter';
import { dereferenceResponseObject } from './dereferenceResponseObject';
import { inferOperationId } from '../../inferOperationId';
import { isReferenceObject } from './isReferenceObject';
import { methodsOfPathItemObject } from './methodsOfPathItemObject';

interface MappedOperation {
  path: string;
  method: string;
  operationId: string;
  operation: OpenApiV2.OperationObject;
  parameters: OpenApiV2.Parameter[];
  responses: {
    statusCode: string;
    response: OpenApiV2.ResponseObject;
  }[];
}

export const mapOperations = (
  document: OpenApiV2.Document
): MappedOperation[] => {
  return Object.keys(document.paths).flatMap(path => {
    if (typeof path !== 'string') return [];

    const pathObject = document.paths[path];

    const pathParameters = pathObject.parameters ?? [];

    return methodsOfPathItemObject(pathObject).map(
      ([method, operationObject]) => {
        const {
          operationId = inferOperationId(method, path),
          parameters = [],
          responses
        } = operationObject;

        const inlinedParameters = pathParameters
          .concat(parameters)
          .map(p =>
            isReferenceObject(p) ? dereferenceParameter(p, document) : p
          );

        const inlinedResponses = Object.keys(responses).compactMap(
          statusCode => {
            const response = responses[statusCode];

            if (!response) return undefined;

            return {
              statusCode: statusCode.toString(),
              response: isReferenceObject(response)
                ? dereferenceResponseObject(response, document)
                : response
            };
          }
        );

        return {
          path,
          method,
          operationId,
          operation: operationObject,
          parameters: inlinedParameters,
          responses: inlinedResponses
        };
      }
    );
  });
};
