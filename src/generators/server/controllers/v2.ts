import * as HelpersV2 from '../../../helpers/open-api/v2';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import 'ts-array-extensions';
import { LogFn, progress } from '../../../lib/cli-logging';
import {
  responseBodyTypeNameTemplate,
  parametersTypeNameTemplate
} from '../../../templates';
import { controllersTemplate } from '../../../templates/controllersTemplate';
import { initUpper } from '../../../helpers/initUpper';
import { initLower } from '../../../helpers/initLower';

export const fromV2 = (
  document: OpenApiV2.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
  },
  emitType: (name: string, code: string) => void,
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

            emitType(
              name,
              HelpersV2.typeDefForSchema(
                schema,
                { nonRequiredType: 'optional' },
                emitType
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

      const nameAndSchemaForParams = (
        type: 'path' | 'body' | 'query' | 'header' | 'formData'
      ) => {
        const params: OpenApiV2.Parameter[] = parameters.filter(
          p => p.in === type
        );

        if (params.none()) {
          return [undefined, undefined];
        }

        if (type === 'body') {
          const schemas = params.map(p => p.schema as OpenApiV2.Schema);

          const typeName = parametersTypeNameTemplate(operationId, 'body');

          log?.(progress(`adding ${typeName}`));

          emitType(
            typeName,
            HelpersV2.typeDefForSchema(schemas, options, emitType)
          );

          return [
            typeName,
            HelpersV2.convertSchemaToJsonSchema(schemas)
          ] as const;
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
          // eslint-disable-next-line @typescript-eslint/naming-convention
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

        emitType(
          typeName,
          HelpersV2.typeDefForSchema(schema, options, emitType)
        );

        return [typeName, HelpersV2.convertSchemaToJsonSchema(schema)] as const;
      };

      const [bodyParamType, bodySchema] = nameAndSchemaForParams('body');
      const [queryParamsType, querySchema] = nameAndSchemaForParams('query');
      const [pathParamsType, pathSchema] = nameAndSchemaForParams('path');

      const requestTypeName = `${initUpper(operationId)}Request`;
      const responseTypeName = `${initUpper(operationId)}Response`;
      const controllerTypeName = `${initUpper(operationId)}Controller`;
      const controllerMethodName = initLower(operationId);

      const expressPath = path.replace(
        /\{(?:.*?)\}/g,
        x => `:${x.substr(1, x.length - 2)}`
      );

      log?.(progress(operationId));

      return {
        httpMethod: method,
        expressPath,
        requestTypeName,
        responseTypeName,
        controllerTypeName,
        controllerMethodName,
        pathParamsType,
        responseBodyType,
        bodyParamType,
        queryParamsType,
        statusCodeType,
        bodySchema,
        querySchema,
        pathSchema
      };
    }
  );

  return controllersTemplate(handlers);
};
