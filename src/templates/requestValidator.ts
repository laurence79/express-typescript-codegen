export const requestValidatorTemplate = (
  types: {
    operationId: string;
    properties: {
      requestPropertyName: string;
      typeName: string;
    }[];
  }[],
  jsonSchemaFilename: string
): string =>
  `
import Ajv, { ValidateFunction } from 'ajv';
import { RequestHandler, Request } from 'express';
import schema from './${jsonSchemaFilename}';

const ajv = new Ajv({ strict: false });
ajv.addSchema(schema);

type Validating = 'body' | 'headers' | 'query' | 'params';

type V = [ValidateFunction, (req: Request) => unknown, Validating];

export type ValidationOptions = {
  logger?: (req: Request) => (message: string, data: Record<string, unknown>) => void;
};

const validator = (validations: V[], options?: ValidationOptions): RequestHandler => {
  return (req, res, next) => {
    if (validations.every(([fn, sel]) => fn(sel(req)))) {
      return next();
    }

    const errors = validations
      .flatMap(([v, _, validating]) => v.errors?.map(e => ` +
  // eslint-disable-next-line no-template-curly-in-string
  '`${validating}${e.dataPath} ${e.message}`' +
  `))
      .compact();

    options?.logger?.(req)('Request validation failed', { errors })

    res.status(400).send({
      errors
    });
  };
};

${types
  .map(
    ({ operationId, properties }) => `
export const ${operationId} = (options?: ValidationOptions) => validator([
  ${properties
    .map(
      ({ requestPropertyName, typeName }) =>
        `[ajv.getSchema('#/definitions/${typeName}')!, p => p.${requestPropertyName}, '${requestPropertyName}']`
    )
    .join(',\n')}
], options);`
  )
  .join('\n')}
`;
