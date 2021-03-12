/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { JSONSchema7 } from 'json-schema';
import * as OpenApiV2 from '../../types/OpenApiV2';

const mapProperties = (properties: {
  [name: string]: OpenApiV2.SchemaObject;
}): {
  [key: string]: JSONSchema7;
} => {
  const r: { [key: string]: JSONSchema7 } = {};
  Object.keys(properties).forEach(key => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    r[key] = convertSchemaToJsonSchema(properties[key]);
  });
  return r;
};

export const convertSchemaToJsonSchema = (
  schema: OpenApiV2.SchemaObject
): JSONSchema7 => {
  /**
   * This currently does nothing, but is a placeholder for removing
   * unsupported features from Open Api
   */

  const { properties, ...rest } = schema;

  return {
    ...rest,
    ...(properties ? { properties: mapProperties(properties) } : undefined)
  } as JSONSchema7;
};
