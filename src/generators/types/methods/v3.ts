import * as HelpersV3 from '../../../helpers/open-api/v3';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import { LogFn, progress } from '../../../lib/cli-logging';
import { TypeDefContext } from '../../../helpers/open-api/TypeDefContext';
import { makeIdentifier } from '../../../templates/makeIdentifier';

export const fromV3 = (
  document: OpenApiV3.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  },
  context: TypeDefContext,
  log?: LogFn
): void => {
  HelpersV3.mapOperations(document).forEach(
    ({ method, operationId, parameters, path, responses, requestBody }) => {
      log?.(progress(`Adding from ${method} ${path}`));

      const requestBodyType = (() => {
        if (!requestBody) return 'unknown';

        if ('application/json' in requestBody.content) {
          const { schema } = requestBody.content['application/json'];

          if (schema) {
            return [
              HelpersV3.typeDefForSchema(schema, document, options, context),
              !requestBody.required ? 'undefined' : null
            ]
              .compact()
              .join('|');
          }
        }

        if ('multipart/form-data' in requestBody.content) {
          const { schema } = requestBody.content['multipart/form-data'];

          if (schema) {
            return [
              HelpersV3.typeDefForSchema(schema, document, options, context),
              !requestBody.required ? 'undefined' : null
            ]
              .compact()
              .join('|');
          }
        }

        return 'unknown';
      })();

      const parameterTypes: OpenApiV3.ParameterObject['in'][] = [
        'header',
        'path',
        'query'
      ];

      const [headerType, pathType, queryType] = parameterTypes.map(
        paramType => {
          const paramsOfType = parameters.filter(p => p.in === paramType);

          return HelpersV3.typeDefForSchema(
            {
              type: 'object',
              properties: Object.fromEntries(
                paramsOfType.map(p => [p.name, p.schema ?? { type: 'string' }])
              ),
              required: paramsOfType.filter(p => p.required).map(p => p.name)
            },
            document,
            options,
            context
          );
        }
      );

      context.emitType(
        `${makeIdentifier(operationId)}Request`,
        `{ body: ${requestBodyType}; path: ${pathType}; query: ${queryType}; header: ${headerType} }`
      );

      const responseTypes = responses.map(({ statusCode, response }) => {
        const bodyType = (() => {
          if (!response.content || Object.keys(response.content).length === 0) {
            return 'unknown';
          }

          if (response.content) {
            if ('application/json' in response.content) {
              const { schema } = response.content['application/json'];

              return schema
                ? HelpersV3.typeDefForSchema(schema, document, options, context)
                : 'unknown';
            }

            if ('text/html' in response.content) {
              return 'string';
            }
          }

          return 'Buffer';
        })();

        return `{ status: ${statusCode}; body: ${bodyType}}`;
      });

      context.emitType(
        `${makeIdentifier(operationId)}Response`,
        responseTypes.join('|')
      );
    }
  );
};
