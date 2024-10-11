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
): void => {
  HelpersV2.mapOperations(document).forEach(
    ({ method, parameters, operationId, path, responses }) => {
      log?.(progress(`Adding from ${method} ${path}`));

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

      context.emitType(
        `${makeIdentifier(operationId)}Request`,
        `{ body: ${requestBodyType}; path: ${pathType}; query: ${queryType}; header: ${headerType} }`
      );

      const responseTypes = responses.map(({ statusCode, response }) => {
        const bodyType = (() => {
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

          return options.emptyType;
        })();

        const statusCodeType = statusCode === 'default' ? 'number' : statusCode;

        return `{ status: ${statusCodeType}; body: ${bodyType}}`;
      });

      context.emitType(
        `${makeIdentifier(operationId)}Response`,
        responseTypes.join('|')
      );
    }
  );
};
