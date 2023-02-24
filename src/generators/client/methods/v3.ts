import * as HelpersV3 from '../../../helpers/open-api/v3';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import { LogFn, progress } from '../../../lib/cli-logging';
import {
  clientMethodTemplate,
  ClientMethodTemplateArgs
} from '../../../templates';
import { TypeDefContext } from '../../../helpers/open-api/TypeDefContext';

export const fromV3 = (
  document: OpenApiV3.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  },
  context: TypeDefContext,
  log?: LogFn
): string[] => {
  return HelpersV3.mapOperations(document).map(
    ({ method, parameters, path, operationId, responses, requestBody }) => {
      log?.(progress(`Adding ${method} ${path}`));

      const body = ((): ClientMethodTemplateArgs['body'] => {
        if (!requestBody) return null;

        if ('application/json' in requestBody.content) {
          const { schema } = requestBody.content['application/json'];

          return {
            type: 'json' as const,
            required: requestBody.required ?? false,
            jsonType: schema
              ? HelpersV3.typeDefForSchema(schema, document, options, context)
              : 'unknown'
          } as ClientMethodTemplateArgs['body'];
        }

        if ('multipart/form-data' in requestBody.content) {
          const { schema } = requestBody.content['multipart/form-data'];

          if (!schema) return null;

          const inlinedSchema = HelpersV3.isReferenceObject(schema)
            ? HelpersV3.dereferenceSchemaObject(schema, document)
            : schema;

          const fields = inlinedSchema.properties
            ? Object.keys(inlinedSchema.properties).map(k => {
                const property = inlinedSchema.properties?.[k];

                const inlinedProperty = HelpersV3.isReferenceObject(property)
                  ? HelpersV3.dereferenceSchemaObject(property, document)
                  : property;

                return {
                  name: k.toString(),
                  required:
                    inlinedSchema.required?.includes(k.toString()) ?? false,
                  binary: inlinedProperty?.format === 'binary'
                };
              })
            : [];

          return {
            type: 'form' as const,
            required: requestBody.required,
            fields
          } as ClientMethodTemplateArgs['body'];
        }

        return null;
      })();

      return clientMethodTemplate(
        {
          httpMethod: method,
          methodName: operationId,
          openApiPath: path,
          pathParams: parameters
            .filter(p => p.in === 'path')
            .map(p => ({
              name: p.name,
              type: p.schema
                ? HelpersV3.typeDefForSchema(
                    p.schema,
                    document,
                    options,
                    context
                  )
                : 'string'
            })),
          queryArrayFormat: parameters
            .filter(p => p.in === 'query')
            .some(p => p.explode === false)
            ? 'comma'
            : 'repeat',
          queryParams: parameters
            .filter(p => p.in === 'query')
            .map(p => ({
              name: p.name,
              required: p.required ?? false,
              type: p.schema
                ? HelpersV3.typeDefForSchema(
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
                ? HelpersV3.typeDefForSchema(
                    p.schema,
                    document,
                    options,
                    context
                  )
                : 'string'
            })),
          body,
          responses: responses.map(({ statusCode, response }) => {
            if (
              !response.content ||
              Object.keys(response.content).length === 0
            ) {
              return {
                statusCode,
                type: 'none'
              };
            }

            if (response.content) {
              if ('application/json' in response.content) {
                const { schema } = response.content['application/json'];

                return {
                  statusCode,
                  type: 'json',
                  jsonType: schema
                    ? HelpersV3.typeDefForSchema(
                        schema,
                        document,
                        options,
                        context
                      )
                    : 'unknown'
                };
              }

              if ('text/html' in response.content) {
                return {
                  statusCode,
                  type: 'text'
                };
              }
            }

            return {
              statusCode,
              type: 'binary'
            };
          })
        },
        options
      );
    }
  );
};
