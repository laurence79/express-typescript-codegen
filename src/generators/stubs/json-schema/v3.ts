import { JSONSchema7 } from 'json-schema';
import * as HelpersV3 from '../../../helpers/open-api/v3';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import { LogFn, progress } from '../../../lib/cli-logging';
import { responseBodyTypeNameTemplate } from '../../../templates';
import { parametersTypeNameTemplate } from '../../../templates/parametersTypeName';

export const PERMITTED_TYPES = ['path', 'query', 'header', 'cookie'];

const convertFormDataToSchemaObject = (
  formData?: OpenApiV3.MediaTypeObject
): OpenApiV3.ReferenceObject | OpenApiV3.SchemaObject | undefined => {
  if (!formData || !formData.schema) return undefined;

  return {
    type: 'object',
    ...formData.schema
  };
};

export const fromV3 = (
  document: OpenApiV3.Document,
  log?: LogFn
): JSONSchema7 => {
  const definitions: Record<string, JSONSchema7> = {};

  HelpersV3.mapOperations(document).forEach(
    ({ operationId, parameters, responses, requestBody }) => {
      if (requestBody) {
        const typeName = parametersTypeNameTemplate(operationId, 'body');

        log?.(progress(`adding ${typeName}`));

        const structuredContent = [
          requestBody.content['application/json']?.schema,
          convertFormDataToSchemaObject(
            requestBody.content['multipart/form-data']
          )
        ]
          .compact()
          .map(HelpersV3.convertSchemaToJsonSchema);

        if (structuredContent.length > 0) {
          definitions[typeName] =
            structuredContent.length > 1
              ? {
                  anyOf: structuredContent
                }
              : structuredContent[0];
        }
      }

      const groups = parameters.groupBy(p => p.in);

      groups.forEach(({ key, values }) => {
        if (!PERMITTED_TYPES.includes(key)) {
          throw new Error(`Unsupported parameter in ${key}`);
        }

        const typeName = parametersTypeNameTemplate(operationId, key);

        const schema: {
          type: 'object';
          properties: NonNullable<OpenApiV3.SchemaObject['properties']>;
          required: string[];
        } = {
          type: 'object',
          properties: {},
          required: []
        };

        values.forEach(v => {
          // eslint-disable-next-line @typescript-eslint/naming-convention
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

        log?.(progress(`adding ${typeName}`));

        definitions[typeName] = HelpersV3.convertSchemaToJsonSchema(schema);
      });

      responses.forEach(({ statusCode, response }) => {
        if (!response.content?.['application/json']) {
          return;
        }

        const { schema } = response.content['application/json'];

        if (!schema) {
          return;
        }

        const key = responseBodyTypeNameTemplate(operationId, statusCode);

        log?.(progress(`adding ${key}`));

        definitions[key] = HelpersV3.convertSchemaToJsonSchema(schema);
      });
    }
  );

  Object.keys(document.components?.schemas ?? {}).forEach(key => {
    const value = document.components?.schemas?.[key];

    if (value) {
      log?.(progress(`adding ${key}`));

      definitions[key] = HelpersV3.convertSchemaToJsonSchema(value);
    }
  });

  const out = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    definitions
  };

  return out as JSONSchema7;
};
