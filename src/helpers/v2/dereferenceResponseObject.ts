import * as OpenAPIV2 from '../../types/OpenAPIV2';
import { dereference } from './dereference';

export const dereferenceResponseObject = (
  reference: OpenAPIV2.ReferenceObject,
  doc: OpenAPIV2.Document
): OpenAPIV2.ResponseObject => {
  const { $ref } = reference;
  return dereference(doc.responses, $ref, '#/responses/');
};
