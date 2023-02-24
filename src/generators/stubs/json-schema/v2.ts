import { JSONSchema7 } from 'json-schema';
import {
  mapOperations,
  exportAsJsonSchema
} from '../../../helpers/open-api/v2';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import { LogFn, progress } from '../../../lib/cli-logging';
import { responseBodyTypeNameTemplate } from '../../../templates';
import { parametersTypeNameTemplate } from '../../../templates/parametersTypeName';

export const PERMITTED_TYPES = ['body', 'path', 'query', 'header', 'formData'];

export const fromV2 = (
  document: OpenApiV2.Document,
  log?: LogFn
): JSONSchema7 => {
  const definitions: Record<string, JSONSchema7> = {};

  mapOperations(document).forEach(({ operationId, parameters, responses }) => {
    const groups = parameters.groupBy(p => p.in);

    const keys = groups.map(g => g.key);

    if (keys.includes('body') && keys.includes('formData')) {
      throw new Error(`Can not have both formData and body parameters`);
    }

    groups.forEach(({ key, values }) => {
      if (!PERMITTED_TYPES.includes(key)) {
        throw new Error(`Unsupported parameter in ${key}`);
      }

      if (key === 'body') {
        if (values.length > 1) {
          throw new Error(
            'Only a single body parameter per operation is supported'
          );
        }

        const { schema } = values[0] as OpenApiV2.InBodyParameterObject;

        const typeName = parametersTypeNameTemplate(operationId, 'body');

        log?.(progress(`adding ${typeName}`));

        definitions[typeName] = exportAsJsonSchema(schema, document);

        return;
      }

      const typeName = parametersTypeNameTemplate(operationId, key);

      const schema: {
        type: 'object';
        properties: NonNullable<OpenApiV2.SchemaObject['properties']>;
        required: string[];
      } = {
        type: 'object',
        properties: {},
        required: []
      };

      values.forEach(v => {
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

      log?.(progress(`adding ${typeName}`));

      definitions[typeName] = exportAsJsonSchema(schema, document);
    });

    responses.forEach(({ statusCode, response }) => {
      const { schema } = response;

      if (!schema) {
        return;
      }

      if (schema.type === 'file') {
        return;
      }

      const key = responseBodyTypeNameTemplate(operationId, statusCode);

      log?.(progress(`adding ${key}`));

      definitions[key] = exportAsJsonSchema(schema, document);
    });
  });

  Object.keys(document.definitions ?? {}).forEach(key => {
    const value = document.definitions?.[key];

    if (value) {
      log?.(progress(`adding ${key}`));

      definitions[key] = exportAsJsonSchema(value, document);
    }
  });

  const out = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    definitions
  };

  return out as JSONSchema7;
};
