import JsonPointer from 'json-pointer';
import * as OpenApiV3 from '../../../types/OpenApiV3';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export const dereference = <T extends object>(
  document: OpenApiV3.Document,
  $ref: string
): T => {
  let current: OpenApiV3.ReferenceObject | T | undefined = {
    $ref
  };

  while (current && '$ref' in current) {
    const pointer = current.$ref.split('#')[1];

    current = JsonPointer.get(document, pointer) as
      | OpenApiV3.ReferenceObject
      | T
      | undefined;
  }

  if (!current) throw new Error(`Failed to deference ${$ref}`);

  return current;
};
