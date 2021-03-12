import * as OpenApiV2 from '../../types/OpenApisV2';

export function isReferenceObject(
  object: unknown
): object is OpenApiV2.ReferenceObject {
  if (typeof object !== 'object') {
    return false;
  }

  if (object === null) {
    return false;
  }

  return '$ref' in object;
}
