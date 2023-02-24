import * as OpenApiV3 from '../../../types/OpenApiV3';
import { dereference } from './dereference';

export const dereferenceResponseObject = (
  reference: OpenApiV3.ReferenceObject,
  doc: OpenApiV3.Document
): OpenApiV3.ResponseObject => {
  const { $ref } = reference;

  return dereference(doc, $ref);
};
