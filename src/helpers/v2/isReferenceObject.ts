import * as OpenAPIV2 from '../../types/OpenAPIV2';

export function isReferenceObject(
  object: unknown
): object is OpenAPIV2.ReferenceObject {
  if (typeof object !== 'object') {
    return false;
  }
  if (object === null) {
    return false;
  }
  return '$ref' in object;
}
