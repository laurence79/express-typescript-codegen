import Ajv, { ValidateFunction } from 'ajv';
import { RequestHandler } from 'express';
import schema from './schema.json';

const ajv = new Ajv({ strict: false });
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

const addPetValidator = ajv.getSchema('#/definitions/AddPetRequestBody')!;
export const addPet = bodyValidator(addPetValidator);

const updatePetValidator = ajv.getSchema('#/definitions/UpdatePetRequestBody')!;
export const updatePet = bodyValidator(updatePetValidator);

const placeOrderValidator = ajv.getSchema(
  '#/definitions/PlaceOrderRequestBody'
)!;
export const placeOrder = bodyValidator(placeOrderValidator);

const createUsersWithArrayInputValidator = ajv.getSchema(
  '#/definitions/CreateUsersWithArrayInputRequestBody'
)!;
export const createUsersWithArrayInput = bodyValidator(
  createUsersWithArrayInputValidator
);

const createUsersWithListInputValidator = ajv.getSchema(
  '#/definitions/CreateUsersWithListInputRequestBody'
)!;
export const createUsersWithListInput = bodyValidator(
  createUsersWithListInputValidator
);

const updateUserValidator = ajv.getSchema(
  '#/definitions/UpdateUserRequestBody'
)!;
export const updateUser = bodyValidator(updateUserValidator);

const createUserValidator = ajv.getSchema(
  '#/definitions/CreateUserRequestBody'
)!;
export const createUser = bodyValidator(createUserValidator);
