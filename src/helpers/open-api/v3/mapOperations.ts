import * as OpenApiV3 from '../../../types/OpenApiV3';
import { inferOperationId } from '../../inferOperationId';
import { dereferenceParameter } from './dereferenceParameter';
import { dereferenceRequestBodyObject } from './dereferenceRequestBodyObject';
import { dereferenceResponseObject } from './dereferenceResponseObject';
import { getSecurityParams } from './getSecurityParams';
import { isReferenceObject } from './isReferenceObject';
import { methodsOfPathItemObject } from './methodsOfPathItemObject';

type MappedOperation = {
  path: string;
  method: string;
  operationId: string;
  operation: OpenApiV3.OperationObject;
  parameters: OpenApiV3.ParameterObject[];
  requestBody?: OpenApiV3.RequestBodyObject;
  responses: {
    statusCode: string;
    response: OpenApiV3.ResponseObject;
  }[];
};

export const mapOperations = (
  document: OpenApiV3.Document
): MappedOperation[] => {
  return Object.keys(document.paths).flatMap(path => {
    if (typeof path !== 'string') return [];

    const pathObject = document.paths[path];

    const pathParameters = pathObject.parameters ?? [];

    const globalSecurityParameters = getSecurityParams(document, document);

    return methodsOfPathItemObject(pathObject).map(
      ([method, operationObject]) => {
        const {
          operationId = inferOperationId(method, path),
          parameters = [],
          responses,
          requestBody
        } = operationObject;

        const inlinedParameters = pathParameters
          .concat(parameters)
          .map(p =>
            isReferenceObject(p) ? dereferenceParameter(p, document) : p
          )
          .concat(globalSecurityParameters)
          .concat(getSecurityParams(document, operationObject));

        const inlinedRequestBody =
          requestBody && isReferenceObject(requestBody)
            ? dereferenceRequestBodyObject(requestBody, document)
            : requestBody;

        const inlinedResponses = Object.keys(responses).compactMap(
          statusCode => {
            const response = responses?.[statusCode];

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
          parameters: inlinedParameters ?? [],
          requestBody: inlinedRequestBody,
          responses: inlinedResponses
        };
      }
    );
  });
};
