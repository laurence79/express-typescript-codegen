import * as HelpersV2 from '../../../helpers/open-api/v2';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import { LogFn, progress } from '../../../lib/cli-logging';
import {
  clientMethodTemplate,
  ClientMethodTemplateArgs
} from '../../../templates';

export const fromV2 = (document: OpenApiV2.Document, log?: LogFn): string[] => {
  return HelpersV2.mapOperations(document).map(
    ({ method, parameters, path, operationId, responses }) => {
      log?.(progress(`Adding ${method} ${path}`));

      const jsonBody = (): ClientMethodTemplateArgs['body'] => {
        const bodyArg = parameters.filter(p => p.in === 'body').first();

        if (!bodyArg) return null;

        return {
          type: 'json',
          jsonType: HelpersV2.typeDefForSchema(bodyArg.schema),
          required: bodyArg.required ?? false
        };
      };

      const formDataBody = (): ClientMethodTemplateArgs['body'] => {
        const bodyArg = parameters.filter(p => p.in === 'formData');

        if (bodyArg.length === 0) return null;

        return {
          type: 'form',
          fields: bodyArg.map(p => ({
            name: p.name,
            required: p.required ?? false,
            binary: p.type === 'file'
          })),
          required: true
        };
      };

      return clientMethodTemplate({
        httpMethod: method,
        methodName: operationId,
        openApiPath: path,
        pathParams: parameters.filter(p => p.in === 'path').map(p => p.name),
        queryParams: parameters
          .filter(p => p.in === 'query')
          .map(p => ({
            name: p.name,
            required: p.required ?? false
          })),
        headerParams: parameters
          .filter(p => p.in === 'header')
          .map(p => ({
            name: p.name,
            required: p.required ?? false
          })),
        body: jsonBody() ?? formDataBody(),
        responses: responses.map(({ statusCode, response }) => {
          if (response.schema?.type === 'file') {
            return {
              statusCode,
              type: 'binary'
            };
          }

          const { schema } = response;

          return {
            statusCode,
            type: 'json',
            jsonType: schema ? HelpersV2.typeDefForSchema(schema) : 'unknown'
          };
        })
      });
    }
  );
};
