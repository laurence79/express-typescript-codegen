import { initLower } from '../helpers/initLower';
import { initUpper } from '../helpers/initUpper';

export const validatorTemplate = (
  operationIds: string[],
  jsonSchemaFilename: string
): string => `
import Ajv, { ValidateFunction } from 'ajv';
import { RequestHandler } from 'express';
import schema from './${jsonSchemaFilename}';

const ajv = new Ajv();
ajv.addSchema(schema);

const bodyValidator = (validator: ValidateFunction): RequestHandler => {
  return (req, res, next) => {
    if (validator(req.body)) {
      return next();
    }
  
    res.status(400).send({
      errors: validator.errors?.map(e => e.message ?? '') ?? [
        'Unknown validation error'
      ]
    });
  };
}

${operationIds
  .map(id => {
    const typeName = initUpper(id);
    const validatorName = initLower(id);
    return `
const ${id}Validator = ajv.getSchema('#/definitions/${typeName}RequestBody')!;
export const ${validatorName} = bodyValidator(${id}Validator);

`;
  })
  .join('')}
`;
