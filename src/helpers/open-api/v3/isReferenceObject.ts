import * as OpenApiV3 from '../../../types/OpenApiV3';

export function isReferenceObject(
  object: unknown
): object is OpenApiV3.ReferenceObject {
  if (typeof object !== 'object') {
    return false;
  }

  if (object === null) {
    return false;
  }

  return '$ref' in object;
}
