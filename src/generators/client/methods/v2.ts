import * as HelpersV2 from '../../../helpers/open-api/v2';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import { LogFn, progress } from '../../../lib/cli-logging';
import {
  clientMethodTemplate,
  ClientMethodTemplateArgs
} from '../../../templates';
import { TypeDefContext } from '../../../helpers/open-api/TypeDefContext';

export const fromV2 = (
  document: OpenApiV2.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    readonlyDTOs: boolean;
    emptyType: 'never' | 'unknown' | '{}';
  },
  context: TypeDefContext,
  log?: LogFn
): string[] => {
  return HelpersV2.mapOperations(document).map(
    ({ method, parameters, path, operationId, responses }) => {
      log?.(progress(`Adding ${method} ${path}`));

      const jsonBody = (): ClientMethodTemplateArgs['body'] => {
        const bodyArg = parameters.filter(p => p.in === 'body').first();

        if (!bodyArg || bodyArg.in !== 'body') return null;

        const { schema, required = false } = bodyArg;

        return {
          type: 'json',
          jsonType: HelpersV2.typeDefForSchema(
            schema,
            document,
            options,
            context
          ),
          required
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

      return clientMethodTemplate(
        {
          httpMethod: method,
          methodName: operationId,
          openApiPath: path,
          pathParams: parameters
            .filter(p => p.in === 'path')
            .map(p => ({
              name: p.name,
              type: HelpersV2.typeDefForSchema(
                { ...p, required: [] },
                document,
                options,
                context
              )
            })),
          queryArrayFormat: parameters
            .filter(p => p.in === 'query')
            .some(p => p.collectionFormat === 'csv')
            ? 'comma'
            : 'repeat',
          queryParams: parameters
            .filter(p => p.in === 'query')
            .map(p => ({
              name: p.name,
              required: p.required ?? false,
              type: p.schema
                ? HelpersV2.typeDefForSchema(
                    p.schema,
                    document,
                    options,
                    context
                  )
                : 'string'
            })),
          headerParams: parameters
            .filter(p => p.in === 'header')
            .map(p => ({
              name: p.name,
              required: p.required ?? false,
              type: p.schema
                ? HelpersV2.typeDefForSchema(
                    p.schema,
                    document,
                    options,
                    context
                  )
                : 'string'
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

            if (schema) {
              return {
                statusCode,
                type: 'json',
                jsonType: schema
                  ? HelpersV2.typeDefForSchema(
                      schema,
                      document,
                      options,
                      context
                    )
                  : options.emptyType
              };
            }

            return {
              statusCode,
              type: 'none'
            };
          })
        },
        options
      );
    }
  );
};
