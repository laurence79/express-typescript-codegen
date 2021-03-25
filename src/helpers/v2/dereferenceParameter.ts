import * as OpenApiV2 from '../../types/OpenApiV2';
import { dereference } from './dereference';

export const dereferenceParameter = (
  reference: OpenApiV2.ReferenceObject,
  doc: OpenApiV2.Document
): OpenApiV2.Parameter => {
  const { $ref } = reference;

  return dereference(doc.parameters, $ref, '#/parameters/');
};
