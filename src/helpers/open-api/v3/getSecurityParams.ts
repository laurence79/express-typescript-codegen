import * as OpenApiV3 from '../../../types/OpenApiV3';
import { dereferenceSecurityScheme } from './dereferenceSecurityScheme';

export const getSecurityParams = (
  document: OpenApiV3.Document,
  location: OpenApiV3.Document | OpenApiV3.OperationObject
): OpenApiV3.ParameterObject[] => {
  if (!location.security) {
    return [];
  }

  return location.security.flatMap(s =>
    Object.keys(s).compactMap(key => {
      const scheme = dereferenceSecurityScheme(
        { $ref: `#/components/securitySchemes/${key}` },
        document
      );

      if (scheme.type === 'http') {
        return {
          name: 'authorization',
          in: 'header'
        };
      }

      if (scheme.type === 'apiKey') {
        if (scheme.in === 'cookie') {
          return {
            name: scheme.name,
            in: scheme.in
          };
        }
      }

      return undefined;
    })
  );
};
