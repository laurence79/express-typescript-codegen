import * as HelpersV3 from '../../../helpers/open-api/v3';
import * as OpenApiV3 from '../../../types/OpenApiV3';
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

const convertFormDataToSchemaObject = (
  formData?: OpenApiV3.MediaTypeObject
): OpenApiV3.ReferenceObject | OpenApiV3.SchemaObject | undefined => {
  if (!formData?.schema) return undefined;

  return {
    type: 'object',
    ...formData.schema
  };
};

export const fromV3 = (
  document: OpenApiV3.Document,
  options: {
    nonRequiredType: 'optional' | 'nullable' | 'both';
    readonlyDTOs: boolean;
    emptyType: 'never' | 'unknown' | '{}';
  },
  context: TypeDefContext,
  log?: LogFn
): string => {
  const handlers = HelpersV3.mapOperations(document).map(
    ({ path, operationId, parameters, responses, requestBody, method }) => {
      const responseBodyType =
        responses
          .compactMap(({ statusCode, response }) => {
            if (
              !response.content ||
              !('application/json' in response.content)
            ) {
              return undefined;
            }
            const { schema } = response.content['application/json'];

            const name = responseBodyTypeNameTemplate(operationId, statusCode);

            if (schema) {
              context.emitType(
                name,
                HelpersV3.typeDefForSchema(schema, document, options, context)
              );
            }

            return name;
          })
          .join(' | ') || undefined;

      const statusCodeType = responses
        .map(({ statusCode }) =>
          statusCode === 'default' ? 'number' : statusCode
        )
        .join(' | ');

      const bodyParamType = (() => {
        if (!requestBody) {
          return undefined;
        }

        const structuredContent = [
          requestBody.content['application/json']?.schema,
          convertFormDataToSchemaObject(
            requestBody.content['multipart/form-data']
          )
        ].compact();

        if (structuredContent.length === 0) {
          return undefined;
        }

        const schema =
          structuredContent.length > 1
            ? {
                anyOf: structuredContent
              }
            : structuredContent[0];

        const typeName = parametersTypeNameTemplate(operationId, 'body');

        context.emitType(
          typeName,
          HelpersV3.typeDefForSchema(schema, document, options, context)
        );

        return typeName;
      })();

      const nameForParams = (type: 'path' | 'query') => {
        const params = parameters.filter(p => p.in === type);

        if (params.none()) {
          return undefined;
        }

        const typeName = parametersTypeNameTemplate(operationId, type);

        const schema: {
          type: 'object';
          properties: NonNullable<OpenApiV3.SchemaObject['properties']>;
          required: string[];
        } = {
          type: 'object',
          properties: {},
          required: []
        };

        params.forEach(v => {
          const { in: _, name, required, ...rest } = v;

          const propertyType = (() => {
            if (!rest.schema) {
              return { type: 'string' } as OpenApiV3.NonArraySchemaObject;
            }

            if ('$ref' in rest.schema) {
              return rest.schema;
            }

            if (rest.schema.type === 'array') {
              return {
                anyOf: [rest.schema, rest.schema.items]
              };
            }

            return rest.schema;
          })();

          schema.properties[name] = propertyType;

          if (required) {
            schema.required = [...schema.required, name];
          }
        });

        context.emitType(
          typeName,
          HelpersV3.typeDefForSchema(schema, document, options, context)
        );

        return typeName;
      };

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
