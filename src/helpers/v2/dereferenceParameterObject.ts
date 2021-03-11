import * as OpenAPIV2 from '../../types/OpenAPIV2';
import { dereference } from './dereference';

export const dereferenceParameterObject = (
  reference: OpenAPIV2.ReferenceObject,
  doc: OpenAPIV2.Document
): OpenAPIV2.ParameterObject => {
  const { $ref } = reference;
  return dereference(doc.parameters, $ref, '#/parameters/');
};
