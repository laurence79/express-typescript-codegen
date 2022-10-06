import { JSONSchema7 } from 'json-schema';

export const requestValidationSchemaClassTemplate = ({
  jsonSchema,
  operations
}: {
  jsonSchema: JSONSchema7;
  operations: {
    name: string;
    parameterTypes: {
      typeName: string;
      requestProperty: string;
    }[];
  }[];
}): string => {
  return `
    export interface RequestValidators {
      readonly headers?: AnyValidateFunction;
      readonly params?: AnyValidateFunction;
      readonly body?: AnyValidateFunction;
      readonly query?: AnyValidateFunction;
    }

    @injectable()
    export class RequestValidationSchema {
      private readonly ajv = new Ajv({ strict: false, coerceTypes: true });
      
      constructor() {
        this.ajv.addSchema(${JSON.stringify(jsonSchema)});
      }

      ${operations
        .map(
          o => `
      public readonly ${o.name} = (): RequestValidators => ({
        ${o.parameterTypes
          .map(
            p => `
        ${p.requestProperty}: this.ajv.getSchema(
          '#/definitions/${p.typeName}'
        )!
        `
          )
          .join(',\n')}
      });
      `
        )
        .join('\n')}
    }
  `;
};
