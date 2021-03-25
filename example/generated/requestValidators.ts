import Ajv, { ValidateFunction } from 'ajv';
import { RequestHandler, Request } from 'express';
import schema from './schema.json';

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

export const addPet = validator([
  [ajv.getSchema('#/definitions/AddPetRequestBody')!, p => p.body]
]);

export const updatePet = validator([
  [ajv.getSchema('#/definitions/UpdatePetRequestBody')!, p => p.body]
]);

export const findPetsByStatus = validator([
  [ajv.getSchema('#/definitions/FindPetsByStatusRequestQuery')!, p => p.query]
]);

export const findPetsByTags = validator([
  [ajv.getSchema('#/definitions/FindPetsByTagsRequestQuery')!, p => p.query]
]);

export const getPetById = validator([
  [ajv.getSchema('#/definitions/GetPetByIdRequestPath')!, p => p.path]
]);

export const updatePetWithForm = validator([
  [ajv.getSchema('#/definitions/UpdatePetWithFormRequestPath')!, p => p.path],
  [
    ajv.getSchema('#/definitions/UpdatePetWithFormRequestFormData')!,
    p => p.formData
  ]
]);

export const deletePet = validator([
  [ajv.getSchema('#/definitions/DeletePetRequestHeader')!, p => p.headers],
  [ajv.getSchema('#/definitions/DeletePetRequestPath')!, p => p.path]
]);

export const placeOrder = validator([
  [ajv.getSchema('#/definitions/PlaceOrderRequestBody')!, p => p.body]
]);

export const getOrderById = validator([
  [ajv.getSchema('#/definitions/GetOrderByIdRequestPath')!, p => p.path]
]);

export const deleteOrder = validator([
  [ajv.getSchema('#/definitions/DeleteOrderRequestPath')!, p => p.path]
]);

export const getInventory = validator([]);

export const createUsersWithArrayInput = validator([
  [
    ajv.getSchema('#/definitions/CreateUsersWithArrayInputRequestBody')!,
    p => p.body
  ]
]);

export const createUsersWithListInput = validator([
  [
    ajv.getSchema('#/definitions/CreateUsersWithListInputRequestBody')!,
    p => p.body
  ]
]);

export const getUserByName = validator([
  [ajv.getSchema('#/definitions/GetUserByNameRequestPath')!, p => p.path]
]);

export const updateUser = validator([
  [ajv.getSchema('#/definitions/UpdateUserRequestPath')!, p => p.path],
  [ajv.getSchema('#/definitions/UpdateUserRequestBody')!, p => p.body]
]);

export const deleteUser = validator([
  [ajv.getSchema('#/definitions/DeleteUserRequestPath')!, p => p.path]
]);

export const loginUser = validator([
  [ajv.getSchema('#/definitions/LoginUserRequestQuery')!, p => p.query]
]);

export const logoutUser = validator([]);

export const createUser = validator([
  [ajv.getSchema('#/definitions/CreateUserRequestBody')!, p => p.body]
]);
