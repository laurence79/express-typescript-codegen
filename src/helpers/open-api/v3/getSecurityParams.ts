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
    Object.keys(s).map(key => {
      const scheme = dereferenceSecurityScheme(
        { $ref: `#/components/securitySchemes/${key}` },
        document
      );

      if (scheme.type !== 'http') {
        throw new Error(`Security scheme type ${scheme.type} not implemented`);
      }

      if (scheme.scheme !== 'bearer') {
        throw new Error(`Security scheme ${scheme.scheme} not implemented`);
      }

      return {
        name: 'authorization',
        in: 'header'
      };
    })
  );
};
