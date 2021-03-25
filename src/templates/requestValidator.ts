export const requestValidatorTemplate = (
  types: {
    operationId: string;
    properties: {
      requestPropertyName: string;
      typeName: string;
    }[];
  }[],
  jsonSchemaFilename: string
): string => `
import Ajv, { ValidateFunction } from 'ajv';
import { RequestHandler, Request } from 'express';
import schema from './${jsonSchemaFilename}';

const ajv = new Ajv({ strict: false });
ajv.addSchema(schema);

type V = [ValidateFunction, (req: Request) => unknown];

const validator = (validations: V[]): RequestHandler => {
  return (req, res, next) => {
    if (validations.every(([fn, sel]) => fn(sel(req)))) {
      return next();
    }

    res.status(400).send({
      errors: validations
        .flatMap(([v]) => v.errors)
        .map(e => e.message ?? '') ?? ['Unknown validation error']
    });
  };
};

${types
  .map(
    ({ operationId, properties }) => `
export const ${operationId} = validator([
  ${properties
    .map(
      ({ requestPropertyName, typeName }) =>
        `[ajv.getSchema('#/definitions/${typeName}')!, p => p.${requestPropertyName}]`
    )
    .join(',\n')}
]);`
  )
  .join('\n')}
`;
