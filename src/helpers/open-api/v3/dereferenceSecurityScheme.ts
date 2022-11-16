import * as OpenApiV3 from '../../../types/OpenApiV3';
import { dereference } from './dereference';

export const dereferenceSecurityScheme = (
  reference: OpenApiV3.ReferenceObject,
  doc: OpenApiV3.Document
): OpenApiV3.SecuritySchemeObject => {
  const { $ref } = reference;

  return dereference(
    doc.components?.securitySchemes,
    $ref,
    '#/components/securitySchemes/'
  );
};
