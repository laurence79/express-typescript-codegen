import * as OpenApiV2 from '../../types/OpenApisV2';
import { dereference } from './dereference';

export const dereferenceResponseObject = (
  reference: OpenApiV2.ReferenceObject,
  doc: OpenApiV2.Document
): OpenApiV2.ResponseObject => {
  const { $ref } = reference;

  return dereference(doc.responses, $ref, '#/responses/');
};
