import * as OpenApiV2 from '../../types/OpenApiV2';
import * as OpenApiV3 from '../../types/OpenApiV3';

export const expressRequestPropertyName = (
  type: OpenApiV2.Parameter['in'] | OpenApiV3.ParameterObject['in']
): string => {
  switch (type) {
    case 'header':
      return 'headers';
    case 'path':
      return 'params';
    case 'formData':
      return 'body';
    default:
      return type;
  }
};
