import * as OpenApiV3 from '../../../types/OpenApiV3';
import { dereference } from './dereference';

export const dereferenceSchemaObject = (
  reference: OpenApiV3.ReferenceObject,
  doc: OpenApiV3.Document
): OpenApiV3.SchemaObject => {
  const { $ref } = reference;

  return dereference(doc.components?.schemas, $ref, '#/components/schemas/');
};
