import $RefParser from '@apidevtools/json-schema-ref-parser';
import { JSONSchemaObject } from '@apidevtools/json-schema-ref-parser/dist/lib/types';
import * as OpenApi from '../types/OpenApi';

export const loadOpenApiDocument = async ({
  openApiDocumentFilenameOrUrl: source
}: {
  openApiDocumentFilenameOrUrl: string;
}): Promise<OpenApi.Document> => {
  const schema = await $RefParser.dereference(source, {
    dereference: {
      // eslint-disable-next-line no-return-assign
      onDereference: (path: string, value: JSONSchemaObject) => {
        if (!value.title && path.startsWith('#/')) {
          // eslint-disable-next-line no-param-reassign
          value.title = path.substring(path.lastIndexOf('/') + 1);
        }
      }
    }
  });

  return schema as OpenApi.Document;
};
