import * as HelpersV2 from '../../../helpers/open-api/v2';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import 'ts-array-extensions';
import { LogFn, progress } from '../../../lib/cli-logging';
import {
  responseBodyTypeNameTemplate,
  parametersTypeNameTemplate
} from '../../../templates';
import { initLower } from '../../../helpers/initLower';
import { TypeDefContext } from '../../../helpers/open-api/TypeDefContext';
import { makeIdentifier } from '../../../templates/makeIdentifier';
import { handlersTemplate } from '../templates/handlersTemplate';

export const fromV2 = (
  document: OpenApiV2.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    readonlyDTOs: boolean;
    emptyType: 'never' | 'unknown' | '{}';
  },
  context: TypeDefContext,
  log?: LogFn
): string => {
  const handlers = HelpersV2.mapOperations(document).map(
    ({ operationId, parameters, responses, path, method }) => {
      log?.(progress(`Adding ${method} ${path}`));

      const responseBodyType =
        responses
          .compactMap(({ statusCode, response }) => {
            const { schema } = response;
            if (!schema) {
              return undefined;
            }

            const name = responseBodyTypeNameTemplate(operationId, statusCode);

            context.emitType(
              name,
              HelpersV2.typeDefForSchema(
                schema,
                document,
                { ...options, nonRequiredType: 'optional' },
                context
              )
            );

            return name;
          })
          .join(' | ') || undefined;

      const statusCodeType = responses
        .map(({ statusCode }) =>
          statusCode === 'default' ? 'number' : statusCode
        )
        .join(' | ');

      const nameForParams = (
        type: 'path' | 'body' | 'query' | 'header' | 'formData'
      ) => {
        const params: OpenApiV2.Parameter[] = parameters.filter(
          p => p.in === type
        );

        if (params.none()) {
          return undefined;
        }

        if (type === 'body') {
          const schemas = params.map(p => p.schema as OpenApiV2.Schema);

          const typeName = parametersTypeNameTemplate(operationId, 'body');

          log?.(progress(`adding ${typeName}`));

          context.emitType(
            typeName,
            HelpersV2.typeDefForSchema(schemas, document, options, context)
          );

          return typeName;
        }

        const typeName = parametersTypeNameTemplate(operationId, type);

        const schema: {
          type: 'object';
          properties: NonNullable<OpenApiV2.SchemaObject['properties']>;
          required: string[];
        } = {
          type: 'object',
          properties: {},
          required: []
        };

        params.forEach(v => {
          const { in: _, name, required, ...rest } = v;

          if (rest.type === 'file') {
            return;
          }

          const propertyType = (() => {
            if (rest.type === 'array') {
              return { anyOf: [rest, rest.items] };
            }

            return rest;
          })();

          schema.properties[name] = propertyType;

          if (required) {
            schema.required = [...schema.required, name];
          }
        });

        context.emitType(
          typeName,
          HelpersV2.typeDefForSchema(schema, document, options, context)
        );

        return typeName;
      };

      const bodyParamType = nameForParams('body');
      const queryParamsType = nameForParams('query');
      const pathParamsType = nameForParams('path');

      const operationIdAsIdentifier = makeIdentifier(operationId);

      const handlerTypeName = `${operationIdAsIdentifier}Handler`;
      const handlerInstanceName = initLower(operationIdAsIdentifier);

      const expressPath = path.replace(
        /\{(?:.*?)\}/g,
        x => `:${x.substring(1, x.length - 1)}`
      );

      log?.(progress(operationId));

      return {
        httpMethod: method,
        expressPath,
        handlerTypeName,
        handlerInstanceName,
        pathParamsType,
        responseBodyType: responseBodyType ?? options.emptyType,
        bodyParamType: bodyParamType ?? options.emptyType,
        queryParamsType,
        statusCodeType
      };
    }
  );

  return handlersTemplate(handlers);
};
