import JsonPointer from 'json-pointer';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import { TypeDefContext } from '../TypeDefContext';

export const typeDefForReference = (
  schema: OpenApiV2.ReferenceObject,
  document: OpenApiV2.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    binaryType?: 'Buffer' | 'Blob';
    readonlyDTOs: boolean;
  },
  context: TypeDefContext,
  recursiveLookup: (
    schema: OpenApiV2.SchemaObject,
    document: OpenApiV2.Document,
    options: {
      nonRequiredType: 'optional' | 'nullable' | 'both';
      readonlyDTOs: boolean;
    },
    context: TypeDefContext
  ) => string
): string => {
  const pointer = schema.$ref.split('#')[1];

  const node = JsonPointer.get(document, pointer) as OpenApiV2.SchemaObject;

  return recursiveLookup(node, document, options, context);
};
