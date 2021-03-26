import Ajv, { ValidateFunction } from 'ajv';
import { RequestHandler, Request } from 'express';
import schema from './schema.json';

const ajv = new Ajv({ strict: false });
ajv.addSchema(schema);

type Validating = 'body' | 'headers' | 'query' | 'params';

type V = [ValidateFunction, (req: Request) => unknown, Validating];

export type ValidationOptions = {
  logger?: (
    req: Request
  ) => (message: string, data: Record<string, unknown>) => void;
};

const validator = (
  validations: V[],
  options?: ValidationOptions
): RequestHandler => {
  return (req, res, next) => {
    if (validations.every(([fn, sel]) => fn(sel(req)))) {
      return next();
    }

    const errors = validations
      .flatMap(([v, _, validating]) =>
        v.errors?.map(e => `${validating}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

export const addPet = (options?: ValidationOptions) =>
  validator(
    [[ajv.getSchema('#/definitions/AddPetRequestBody')!, p => p.body, 'body']],
    options
  );

export const updatePet = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/UpdatePetRequestBody')!,
        p => p.body,
        'body'
      ]
    ],
    options
  );

export const findPetsByStatus = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/FindPetsByStatusRequestQuery')!,
        p => p.query,
        'query'
      ]
    ],
    options
  );

export const findPetsByTags = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/FindPetsByTagsRequestQuery')!,
        p => p.query,
        'query'
      ]
    ],
    options
  );

export const getPetById = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/GetPetByIdRequestPath')!,
        p => p.params,
        'params'
      ]
    ],
    options
  );

export const updatePetWithForm = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/UpdatePetWithFormRequestPath')!,
        p => p.params,
        'params'
      ],
      [
        ajv.getSchema('#/definitions/UpdatePetWithFormRequestFormData')!,
        p => p.formData,
        'formData'
      ]
    ],
    options
  );

export const deletePet = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/DeletePetRequestHeader')!,
        p => p.headers,
        'headers'
      ],
      [
        ajv.getSchema('#/definitions/DeletePetRequestPath')!,
        p => p.params,
        'params'
      ]
    ],
    options
  );

export const placeOrder = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/PlaceOrderRequestBody')!,
        p => p.body,
        'body'
      ]
    ],
    options
  );

export const getOrderById = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/GetOrderByIdRequestPath')!,
        p => p.params,
        'params'
      ]
    ],
    options
  );

export const deleteOrder = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/DeleteOrderRequestPath')!,
        p => p.params,
        'params'
      ]
    ],
    options
  );

export const getInventory = (options?: ValidationOptions) =>
  validator([], options);

export const createUsersWithArrayInput = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/CreateUsersWithArrayInputRequestBody')!,
        p => p.body,
        'body'
      ]
    ],
    options
  );

export const createUsersWithListInput = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/CreateUsersWithListInputRequestBody')!,
        p => p.body,
        'body'
      ]
    ],
    options
  );

export const getUserByName = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/GetUserByNameRequestPath')!,
        p => p.params,
        'params'
      ]
    ],
    options
  );

export const updateUser = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/UpdateUserRequestPath')!,
        p => p.params,
        'params'
      ],
      [
        ajv.getSchema('#/definitions/UpdateUserRequestBody')!,
        p => p.body,
        'body'
      ]
    ],
    options
  );

export const deleteUser = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/DeleteUserRequestPath')!,
        p => p.params,
        'params'
      ]
    ],
    options
  );

export const loginUser = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/LoginUserRequestQuery')!,
        p => p.query,
        'query'
      ]
    ],
    options
  );

export const logoutUser = (options?: ValidationOptions) =>
  validator([], options);

export const createUser = (options?: ValidationOptions) =>
  validator(
    [
      [
        ajv.getSchema('#/definitions/CreateUserRequestBody')!,
        p => p.body,
        'body'
      ]
    ],
    options
  );
