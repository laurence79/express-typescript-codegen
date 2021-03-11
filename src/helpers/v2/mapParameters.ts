import * as OpenAPIV2 from '../../types/OpenAPIV2';
import { dereferenceParameterObject } from './dereferenceParameterObject';
import { isReferenceObject } from './isReferenceObject';
import { mapOperations, MappedOperation } from './mapOperations';

type MappedParameters = MappedOperation & {
  path: string;
  method: string;
  operationId: string;
  parameters: OpenAPIV2.ParameterObject[];
};

export const mapParameters = (
  document: OpenAPIV2.Document
): MappedParameters[] => {
  return mapOperations(document).compactMap(v => {
    const { parameters } = v.operation;
    const inlined = parameters?.map(p =>
      isReferenceObject(p) ? dereferenceParameterObject(p, document) : p
    );
    return {
      ...v,
      parameters: inlined ?? []
    };
  });
};
