import Ajv, { ValidateFunction } from 'ajv';
import { RequestHandler } from 'express';
import schema from './schema.json';

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
};

const postAnonymousValidator = ajv.getSchema(
  '#/definitions/PostAnonymousRequestBody'
)!;
export const postAnonymous = bodyValidator(postAnonymousValidator);

const postCreateValidator = ajv.getSchema(
  '#/definitions/PostCreateRequestBody'
)!;
export const postCreate = bodyValidator(postCreateValidator);

const postLoginValidator = ajv.getSchema('#/definitions/PostLoginRequestBody')!;
export const postLogin = bodyValidator(postLoginValidator);

const postGrantsValidator = ajv.getSchema(
  '#/definitions/PostGrantsRequestBody'
)!;
export const postGrants = bodyValidator(postGrantsValidator);
