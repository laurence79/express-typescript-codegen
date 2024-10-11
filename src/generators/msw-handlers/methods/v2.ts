import * as HelpersV2 from '../../../helpers/open-api/v2';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import { LogFn, progress } from '../../../lib/cli-logging';
import { TypeDefContext } from '../../../helpers/open-api/TypeDefContext';
import { makeIdentifier } from '../../../templates/makeIdentifier';

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
    ({ method, parameters, operationId, path, responses }) => {
      log?.(progress(`Adding from ${method} ${path}`));

      const operationTypePrefix = makeIdentifier(operationId);

      const parameterTypes: OpenApiV2.Parameter['in'][] = [
        'header',
        'path',
        'query',
        'body'
      ];

      const [headerType, pathType, queryType, requestBodyType] =
        parameterTypes.map(paramType => {
          const paramsOfType = parameters.filter(p => p.in === paramType);

          return HelpersV2.typeDefForSchema(
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
        });

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

      const responseBodyType =
        responses
          .compactMap(({ response }) => {
            if (response.schema?.type !== 'file') {
              const { schema } = response;

              if (schema) {
                return HelpersV2.typeDefForSchema(
                  schema,
                  document,
                  options,
                  context
                );
              }
            }

            return undefined;
          })
          .distinct()
          .join(' | ') || options.emptyType;

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
