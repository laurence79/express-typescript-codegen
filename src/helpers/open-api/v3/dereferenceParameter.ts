import * as OpenApiV3 from '../../../types/OpenApiV3';
import { dereference } from './dereference';

export const dereferenceParameter = (
  reference: OpenApiV3.ReferenceObject,
  doc: OpenApiV3.Document
): OpenApiV3.ParameterObject => {
  const { $ref } = reference;

  return dereference(
    doc.components?.parameters,
    $ref,
    '#/components/parameters/'
  );
};
