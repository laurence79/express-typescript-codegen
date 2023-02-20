import $RefParser from '@apidevtools/json-schema-ref-parser';
import * as OpenApi from '../types/OpenApi';

export const loadOpenApiDocument = async ({
  openApiDocumentFilenameOrUrl: source
}: {
  openApiDocumentFilenameOrUrl: string;
}): Promise<OpenApi.Document> => {
  const schema = await $RefParser.dereference(source, {
    dereference: {
      excludedPathMatcher: (path: string) => path.startsWith('#')
    }
  });

  return schema as OpenApi.Document;
};
