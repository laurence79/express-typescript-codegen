import * as OpenApiV2 from '../../types/OpenApiV2';
import { dereference } from './dereference';

export const dereferenceSchemaObject = (
  reference: OpenApiV2.ReferenceObject,
  doc: OpenApiV2.Document
): OpenApiV2.SchemaObject => {
  const { $ref } = reference;

  return dereference(doc.definitions, $ref, '#/definitions/');
};
