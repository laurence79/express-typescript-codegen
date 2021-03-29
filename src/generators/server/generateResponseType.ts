import { typeDefForSchema } from '../../helpers/v2';
import * as OpenApiV2 from '../../types/OpenApiV2';

export const generateResponseType = (
  responses: {
    statusCode: string;
    response: OpenApiV2.ResponseObject;
  }[]
): string => {
  return responses
    .map(r => {
      const statusType = r.statusCode === 'default' ? 'number' : r.statusCode;

      const dataType = (() => {
        if (!r.response.schema) {
          return 'unknown';
        }

        if (r.response.schema.type === 'file') {
          return 'Buffer';
        }

        return typeDefForSchema(r.response.schema);
      })();

      return `ResponseWithData<${statusType}, ${dataType}>`;
    })
    .join(' | ');
};
