import * as HelpersV3 from '../../../helpers/open-api/v3';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import { LogFn, progress } from '../../../lib/cli-logging';
import { TypeDefContext } from '../../../helpers/open-api/TypeDefContext';
import { makeIdentifier } from '../../../templates/makeIdentifier';

export const fromV3 = (
  document: OpenApiV3.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    readonlyDTOs: boolean;
    emptyType: 'never' | 'unknown' | '{}';
  },
  context: TypeDefContext,
  log?: LogFn
): string[] => {
  return HelpersV3.mapOperations(document).map(
    ({ method, operationId, parameters, path, responses, requestBody }) => {
      log?.(progress(`Adding from ${method} ${path}`));

      const operationTypePrefix = makeIdentifier(operationId);

      const requestBodyType = (() => {
        if (!requestBody) return options.emptyType;

        if (
          'application/json' in requestBody.content &&
          requestBody.content['application/json'] &&
          'schema' in requestBody.content['application/json']
        ) {
          const { schema } = requestBody.content['application/json'];

          if (schema) {
            return [
              HelpersV3.typeDefForSchema(schema, document, options, context),
              !requestBody.required ? 'undefined' : null
            ]
              .compact()
              .distinct()
              .join('|');
          }
        }

        if (
          'multipart/form-data' in requestBody.content &&
          requestBody.content['multipart/form-data'] &&
          'schema' in requestBody.content['multipart/form-data']
        ) {
          const { schema } = requestBody.content['multipart/form-data'];

          if (schema) {
            return [
              HelpersV3.typeDefForSchema(schema, document, options, context),
              !requestBody.required ? 'undefined' : null
            ]
              .compact()
              .distinct()
              .join('|');
          }
        }

        return options.emptyType;
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
                paramsOfType.map(p => {
                  // for msw, params can only be string or string[]
                  const inSchema =
                    p.schema && '$ref' in p.schema
                      ? HelpersV3.dereferenceSchemaObject(p.schema, document)
                      : p.schema;

                  const schema: OpenApiV3.SchemaObject =
                    inSchema?.type === 'array'
                      ? { type: 'array', items: { type: 'string' } }
                      : { type: 'string' };

                  return [p.name, schema];
                })
              ),
              required: paramsOfType.filter(p => p.required).map(p => p.name)
            },
            document,
            options,
            context
          );
        }
      );

      context.emitType(`${operationTypePrefix}RequestQuery`, queryType);

      context.emitType(`${operationTypePrefix}RequestHeaders`, headerType);

      const requestParamsTypeName = `${operationTypePrefix}RequestParams`;
      context.emitType(requestParamsTypeName, pathType);

      const requestBodyTypeName = `${operationTypePrefix}RequestBody`;
      context.emitType(requestBodyTypeName, requestBodyType);

      const statusCodeType = responses
        .map(({ statusCode }) =>
          statusCode === 'default' ? 'number' : statusCode
        )
        .distinct()
        .join(' | ');

      context.emitType(`${operationTypePrefix}ResponseStatus`, statusCodeType);

      const responseBodyType = responses
        .map(({ response }) => {
          if (!response.content || Object.keys(response.content).length === 0) {
            return options.emptyType;
          }

          if ('application/json' in response.content) {
            const { schema } = response.content['application/json'];

            return schema
              ? HelpersV3.typeDefForSchema(schema, document, options, context)
              : options.emptyType;
          }

          if ('text/html' in response.content) {
            return 'string';
          }

          return 'Buffer';
        })
        .distinct()
        .join(' | ');

      const responseBodyTypeName = `${operationTypePrefix}ResponseBody`;
      context.emitType(responseBodyTypeName, responseBodyType);

      const resolverTypeName = `${operationTypePrefix}Resolver`;
      context.emitType(
        resolverTypeName,
        `msw.HttpResponseResolver<${requestParamsTypeName}, ${requestBodyTypeName}, ${responseBodyTypeName}>`
      );

      const expressPath = path.replace(
        /\{(?:.*?)\}/g,
        x => `:${x.substring(1, x.length - 1)}`
      );

      return `
        export function handle${operationTypePrefix}(
          resolver: ${resolverTypeName}
        ) {
          return msw.http.${method}('${expressPath}', resolver);
        }
      `;
    }
  );
};
