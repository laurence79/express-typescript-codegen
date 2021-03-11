import * as OpenAPIV2 from '../../types/OpenAPIV2';
import { dereference } from './dereference';

export const dereferenceSchemaObject = (
  reference: OpenAPIV2.ReferenceObject,
  doc: OpenAPIV2.Document
): OpenAPIV2.SchemaObject => {
  const { $ref } = reference;
  return dereference(doc.definitions, $ref, '#/definitions/');
};
