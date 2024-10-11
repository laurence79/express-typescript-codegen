import JsonPointer from 'json-pointer';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import { TypeDefContext } from '../TypeDefContext';

export const typeDefForReference = (
  schema: OpenApiV3.ReferenceObject,
  document: OpenApiV3.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    binaryType?: 'Buffer' | 'Blob';
    readonlyDTOs: boolean;
    emptyType: 'never' | 'unknown' | '{}';
  },
  context: TypeDefContext,
  recursiveLookup: (
    schema: OpenApiV3.SchemaObject,
    document: OpenApiV3.Document,
    options: {
      nonRequiredType: 'optional' | 'nullable' | 'both';
      readonlyDTOs: boolean;
      emptyType: 'never' | 'unknown' | '{}';
    },
    context: TypeDefContext
  ) => string
): string => {
  const pointer = schema.$ref.split('#')[1];

  const node = JsonPointer.get(document, pointer) as OpenApiV3.SchemaObject;

  return recursiveLookup(node, document, options, context);
};
