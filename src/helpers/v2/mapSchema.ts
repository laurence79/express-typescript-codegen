/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { JSONSchema7 } from 'json-schema';
import * as OpenAPIV2 from '../../types/OpenAPIV2';

const mapProperties = (properties: {
  [name: string]: OpenAPIV2.SchemaObject;
}): {
  [key: string]: JSONSchema7;
} => {
  const r: { [key: string]: JSONSchema7 } = {};
  Object.keys(properties).forEach(key => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    r[key] = mapSchema(properties[key]);
  });
  return r;
};

export const mapSchema = (schema: OpenAPIV2.SchemaObject): JSONSchema7 => {
  const { example, properties, ...rest } = schema;

  if (example) {
    console.log(`Throwing away example ${JSON.stringify(example)}`);
  }

  return {
    ...rest,
    ...(properties ? { properties: mapProperties(properties) } : undefined)
  } as JSONSchema7;
};
