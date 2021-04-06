import * as OpenApiV3 from '../../../types/OpenApiV3';
import { dereference } from './dereference';

export const dereferenceRequestBodyObject = (
  reference: OpenApiV3.ReferenceObject,
  doc: OpenApiV3.Document
): OpenApiV3.RequestBodyObject => {
  const { $ref } = reference;

  return dereference(
    doc.components?.requestBodies,
    $ref,
    '#/components/requestBodies/'
  );
};
