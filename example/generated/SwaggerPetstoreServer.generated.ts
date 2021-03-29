import Ajv from 'ajv';
import { Request, Router } from 'express';
import { RequestHandler } from '@laurence79/express-async-request-handler';

export type ValidationOptions = {
  logger?: (
    req: Request
  ) => (message: string, data: Record<string, unknown>) => void;
};

export type AddPetRequestBody = Pet;

export type UpdatePetRequestBody = Pet;

export type FindPetsByStatusRequestQuery = {
  status: Array<'available' | 'pending' | 'sold'>;
};

export type FindPetsByStatus200ResponseBody = Array<Pet>;

export type FindPetsByTagsRequestQuery = { tags: Array<string> };

export type FindPetsByTags200ResponseBody = Array<Pet>;

export type GetPetByIdRequestPath = { petId: number };

export type GetPetById200ResponseBody = Pet;

export type UpdatePetWithFormRequestPath = { petId: number };

export type UpdatePetWithFormRequestBody = { name?: string; status?: string };

export type DeletePetRequestHeader = { api_key?: string };

export type DeletePetRequestPath = { petId: number };

export type PlaceOrderRequestBody = Order;

export type PlaceOrder200ResponseBody = Order;

export type GetOrderByIdRequestPath = { orderId: number };

export type GetOrderById200ResponseBody = Order;

export type DeleteOrderRequestPath = { orderId: number };

export type GetInventory200ResponseBody = unknown;

export type CreateUsersWithArrayInputRequestBody = Array<User>;

export type CreateUsersWithListInputRequestBody = Array<User>;

export type GetUserByNameRequestPath = { username: string };

export type GetUserByName200ResponseBody = User;

export type UpdateUserRequestPath = { username: string };

export type UpdateUserRequestBody = User;

export type DeleteUserRequestPath = { username: string };

export type LoginUserRequestQuery = { username: string; password: string };

export type LoginUser200ResponseBody = string;

export type CreateUserRequestBody = User;

export type ApiResponse = { code?: number; type?: string; message?: string };

export type Category = { id?: number; name?: string };

export type Pet = {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: Array<string>;
  tags?: Array<Tag>;
  status?: 'available' | 'pending' | 'sold';
};

export type Tag = { id?: number; name?: string };

export type Order = {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  status?: 'placed' | 'approved' | 'delivered';
  complete?: boolean;
};

export type User = {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  userStatus?: number;
};

export type AddPetRequestHandler = RequestHandler<
  unknown,
  unknown,
  AddPetRequestBody,
  unknown,
  Record<string, any>,
  405
>;

export type UpdatePetRequestHandler = RequestHandler<
  unknown,
  unknown,
  UpdatePetRequestBody,
  unknown,
  Record<string, any>,
  400 | 404 | 405
>;

export type FindPetsByStatusRequestHandler = RequestHandler<
  unknown,
  FindPetsByStatus200ResponseBody,
  unknown,
  FindPetsByStatusRequestQuery,
  Record<string, any>,
  200 | 400
>;

export type FindPetsByTagsRequestHandler = RequestHandler<
  unknown,
  FindPetsByTags200ResponseBody,
  unknown,
  FindPetsByTagsRequestQuery,
  Record<string, any>,
  200 | 400
>;

export type GetPetByIdRequestHandler = RequestHandler<
  GetPetByIdRequestPath,
  GetPetById200ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200 | 400 | 404
>;

export type UpdatePetWithFormRequestHandler = RequestHandler<
  UpdatePetWithFormRequestPath,
  unknown,
  UpdatePetWithFormRequestBody,
  unknown,
  Record<string, any>,
  405
>;

export type DeletePetRequestHandler = RequestHandler<
  DeletePetRequestPath,
  unknown,
  unknown,
  unknown,
  Record<string, any>,
  400 | 404
>;

export type PlaceOrderRequestHandler = RequestHandler<
  unknown,
  PlaceOrder200ResponseBody,
  PlaceOrderRequestBody,
  unknown,
  Record<string, any>,
  200 | 400
>;

export type GetOrderByIdRequestHandler = RequestHandler<
  GetOrderByIdRequestPath,
  GetOrderById200ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200 | 400 | 404
>;

export type DeleteOrderRequestHandler = RequestHandler<
  DeleteOrderRequestPath,
  unknown,
  unknown,
  unknown,
  Record<string, any>,
  400 | 404
>;

export type GetInventoryRequestHandler = RequestHandler<
  unknown,
  GetInventory200ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200
>;

export type CreateUsersWithArrayInputRequestHandler = RequestHandler<
  unknown,
  unknown,
  CreateUsersWithArrayInputRequestBody,
  unknown,
  Record<string, any>,
  number
>;

export type CreateUsersWithListInputRequestHandler = RequestHandler<
  unknown,
  unknown,
  CreateUsersWithListInputRequestBody,
  unknown,
  Record<string, any>,
  number
>;

export type GetUserByNameRequestHandler = RequestHandler<
  GetUserByNameRequestPath,
  GetUserByName200ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200 | 400 | 404
>;

export type UpdateUserRequestHandler = RequestHandler<
  UpdateUserRequestPath,
  unknown,
  UpdateUserRequestBody,
  unknown,
  Record<string, any>,
  400 | 404
>;

export type DeleteUserRequestHandler = RequestHandler<
  DeleteUserRequestPath,
  unknown,
  unknown,
  unknown,
  Record<string, any>,
  400 | 404
>;

export type LoginUserRequestHandler = RequestHandler<
  unknown,
  LoginUser200ResponseBody,
  unknown,
  LoginUserRequestQuery,
  Record<string, any>,
  200 | 400
>;

export type LogoutUserRequestHandler = RequestHandler<
  unknown,
  unknown,
  unknown,
  unknown,
  Record<string, any>,
  number
>;

export type CreateUserRequestHandler = RequestHandler<
  unknown,
  unknown,
  CreateUserRequestBody,
  unknown,
  Record<string, any>,
  number
>;

export type RequestHandlers = {
  addPet: AddPetRequestHandler;
  updatePet: UpdatePetRequestHandler;
  findPetsByStatus: FindPetsByStatusRequestHandler;
  findPetsByTags: FindPetsByTagsRequestHandler;
  getPetById: GetPetByIdRequestHandler;
  updatePetWithForm: UpdatePetWithFormRequestHandler;
  deletePet: DeletePetRequestHandler;
  placeOrder: PlaceOrderRequestHandler;
  getOrderById: GetOrderByIdRequestHandler;
  deleteOrder: DeleteOrderRequestHandler;
  getInventory: GetInventoryRequestHandler;
  createUsersWithArrayInput: CreateUsersWithArrayInputRequestHandler;
  createUsersWithListInput: CreateUsersWithListInputRequestHandler;
  getUserByName: GetUserByNameRequestHandler;
  updateUser: UpdateUserRequestHandler;
  deleteUser: DeleteUserRequestHandler;
  loginUser: LoginUserRequestHandler;
  logoutUser: LogoutUserRequestHandler;
  createUser: CreateUserRequestHandler;
};

const ajv = new Ajv({ strict: false });
ajv.addSchema({
  $schema: 'http://json-schema.org/draft-07/schema#',
  definitions: {
    AddPetRequestBody: { $ref: '#/definitions/Pet' },
    UpdatePetRequestBody: { $ref: '#/definitions/Pet' },
    FindPetsByStatusRequestQuery: {
      type: 'object',
      required: ['status'],
      properties: {
        status: {
          description: 'Status values that need to be considered for filter',
          type: 'array',
          items: {
            type: 'string',
            enum: ['available', 'pending', 'sold'],
            default: 'available'
          },
          collectionFormat: 'multi'
        }
      }
    },
    FindPetsByStatus200ResponseBody: {
      type: 'array',
      items: { $ref: '#/definitions/Pet' }
    },
    FindPetsByTagsRequestQuery: {
      type: 'object',
      required: ['tags'],
      properties: {
        tags: {
          description: 'Tags to filter by',
          type: 'array',
          items: { type: 'string' },
          collectionFormat: 'multi'
        }
      }
    },
    FindPetsByTags200ResponseBody: {
      type: 'array',
      items: { $ref: '#/definitions/Pet' }
    },
    GetPetByIdRequestPath: {
      type: 'object',
      required: ['petId'],
      properties: {
        petId: {
          description: 'ID of pet to return',
          type: 'integer',
          format: 'int64'
        }
      }
    },
    GetPetById200ResponseBody: { $ref: '#/definitions/Pet' },
    UpdatePetWithFormRequestPath: {
      type: 'object',
      required: ['petId'],
      properties: {
        petId: {
          description: 'ID of pet that needs to be updated',
          type: 'integer',
          format: 'int64'
        }
      }
    },
    UpdatePetWithFormRequestBody: {
      type: 'object',
      required: [],
      properties: {
        name: { description: 'Updated name of the pet', type: 'string' },
        status: { description: 'Updated status of the pet', type: 'string' }
      }
    },
    DeletePetRequestHeader: {
      type: 'object',
      required: [],
      properties: { api_key: { type: 'string' } }
    },
    DeletePetRequestPath: {
      type: 'object',
      required: ['petId'],
      properties: {
        petId: {
          description: 'Pet id to delete',
          type: 'integer',
          format: 'int64'
        }
      }
    },
    PlaceOrderRequestBody: { $ref: '#/definitions/Order' },
    PlaceOrder200ResponseBody: { $ref: '#/definitions/Order' },
    GetOrderByIdRequestPath: {
      type: 'object',
      required: ['orderId'],
      properties: {
        orderId: {
          description: 'ID of pet that needs to be fetched',
          type: 'integer',
          maximum: 10,
          minimum: 1,
          format: 'int64'
        }
      }
    },
    GetOrderById200ResponseBody: { $ref: '#/definitions/Order' },
    DeleteOrderRequestPath: {
      type: 'object',
      required: ['orderId'],
      properties: {
        orderId: {
          description: 'ID of the order that needs to be deleted',
          type: 'integer',
          minimum: 1,
          format: 'int64'
        }
      }
    },
    GetInventory200ResponseBody: {
      type: 'object',
      additionalProperties: { type: 'integer', format: 'int32' }
    },
    CreateUsersWithArrayInputRequestBody: {
      type: 'array',
      items: { $ref: '#/definitions/User' }
    },
    CreateUsersWithListInputRequestBody: {
      type: 'array',
      items: { $ref: '#/definitions/User' }
    },
    GetUserByNameRequestPath: {
      type: 'object',
      required: ['username'],
      properties: {
        username: {
          description:
            'The name that needs to be fetched. Use user1 for testing. ',
          type: 'string'
        }
      }
    },
    GetUserByName200ResponseBody: { $ref: '#/definitions/User' },
    UpdateUserRequestPath: {
      type: 'object',
      required: ['username'],
      properties: {
        username: {
          description: 'name that need to be updated',
          type: 'string'
        }
      }
    },
    UpdateUserRequestBody: { $ref: '#/definitions/User' },
    DeleteUserRequestPath: {
      type: 'object',
      required: ['username'],
      properties: {
        username: {
          description: 'The name that needs to be deleted',
          type: 'string'
        }
      }
    },
    LoginUserRequestQuery: {
      type: 'object',
      required: ['username', 'password'],
      properties: {
        username: { description: 'The user name for login', type: 'string' },
        password: {
          description: 'The password for login in clear text',
          type: 'string'
        }
      }
    },
    LoginUser200ResponseBody: { type: 'string' },
    CreateUserRequestBody: { $ref: '#/definitions/User' },
    ApiResponse: {
      type: 'object',
      properties: {
        code: { type: 'integer', format: 'int32' },
        type: { type: 'string' },
        message: { type: 'string' }
      }
    },
    Category: {
      type: 'object',
      xml: { name: 'Category' },
      properties: {
        id: { type: 'integer', format: 'int64' },
        name: { type: 'string' }
      }
    },
    Pet: {
      type: 'object',
      required: ['name', 'photoUrls'],
      xml: { name: 'Pet' },
      properties: {
        id: { type: 'integer', format: 'int64' },
        category: { $ref: '#/definitions/Category' },
        name: { type: 'string', example: 'doggie' },
        photoUrls: {
          type: 'array',
          xml: { wrapped: true },
          items: { type: 'string', xml: { name: 'photoUrl' } }
        },
        tags: {
          type: 'array',
          xml: { wrapped: true },
          items: { xml: { name: 'tag' }, $ref: '#/definitions/Tag' }
        },
        status: {
          type: 'string',
          description: 'pet status in the store',
          enum: ['available', 'pending', 'sold']
        }
      }
    },
    Tag: {
      type: 'object',
      xml: { name: 'Tag' },
      properties: {
        id: { type: 'integer', format: 'int64' },
        name: { type: 'string' }
      }
    },
    Order: {
      type: 'object',
      xml: { name: 'Order' },
      properties: {
        id: { type: 'integer', format: 'int64' },
        petId: { type: 'integer', format: 'int64' },
        quantity: { type: 'integer', format: 'int32' },
        shipDate: { type: 'string', format: 'date-time' },
        status: {
          type: 'string',
          description: 'Order Status',
          enum: ['placed', 'approved', 'delivered']
        },
        complete: { type: 'boolean' }
      }
    },
    User: {
      type: 'object',
      xml: { name: 'User' },
      properties: {
        id: { type: 'integer', format: 'int64' },
        username: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
        phone: { type: 'string' },
        userStatus: {
          type: 'integer',
          format: 'int32',
          description: 'User Status'
        }
      }
    }
  }
});

const addPetValidator = (options: ValidationOptions): RequestHandler => {
  const validateBody = ajv.getSchema('#/definitions/AddPetRequestBody')!;

  return (req, res, next) => {
    if ([validateBody(req.body)].every(r => r)) {
      return next();
    }

    const errors = [[validateBody, 'body']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const updatePetValidator = (options: ValidationOptions): RequestHandler => {
  const validateBody = ajv.getSchema('#/definitions/UpdatePetRequestBody')!;

  return (req, res, next) => {
    if ([validateBody(req.body)].every(r => r)) {
      return next();
    }

    const errors = [[validateBody, 'body']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const findPetsByStatusValidator = (
  options: ValidationOptions
): RequestHandler => {
  const validateQuery = ajv.getSchema(
    '#/definitions/FindPetsByStatusRequestQuery'
  )!;

  return (req, res, next) => {
    if ([validateQuery(req.query)].every(r => r)) {
      return next();
    }

    const errors = [[validateQuery, 'query']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const findPetsByTagsValidator = (
  options: ValidationOptions
): RequestHandler => {
  const validateQuery = ajv.getSchema(
    '#/definitions/FindPetsByTagsRequestQuery'
  )!;

  return (req, res, next) => {
    if ([validateQuery(req.query)].every(r => r)) {
      return next();
    }

    const errors = [[validateQuery, 'query']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const getPetByIdValidator = (options: ValidationOptions): RequestHandler => {
  const validatePath = ajv.getSchema('#/definitions/GetPetByIdRequestPath')!;

  return (req, res, next) => {
    if ([validatePath(req.params)].every(r => r)) {
      return next();
    }

    const errors = [[validatePath, 'params']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const updatePetWithFormValidator = (
  options: ValidationOptions
): RequestHandler => {
  const validatePath = ajv.getSchema(
    '#/definitions/UpdatePetWithFormRequestPath'
  )!;

  const validateFormData = ajv.getSchema(
    '#/definitions/UpdatePetWithFormRequestBody'
  )!;

  return (req, res, next) => {
    if ([validatePath(req.params), validateFormData(req.body)].every(r => r)) {
      return next();
    }

    const errors = [
      [validatePath, 'params'],
      [validateFormData, 'body']
    ]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const deletePetValidator = (options: ValidationOptions): RequestHandler => {
  const validateHeader = ajv.getSchema('#/definitions/DeletePetRequestHeader')!;

  const validatePath = ajv.getSchema('#/definitions/DeletePetRequestPath')!;

  return (req, res, next) => {
    if ([validateHeader(req.headers), validatePath(req.params)].every(r => r)) {
      return next();
    }

    const errors = [
      [validateHeader, 'headers'],
      [validatePath, 'params']
    ]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const placeOrderValidator = (options: ValidationOptions): RequestHandler => {
  const validateBody = ajv.getSchema('#/definitions/PlaceOrderRequestBody')!;

  return (req, res, next) => {
    if ([validateBody(req.body)].every(r => r)) {
      return next();
    }

    const errors = [[validateBody, 'body']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const getOrderByIdValidator = (options: ValidationOptions): RequestHandler => {
  const validatePath = ajv.getSchema('#/definitions/GetOrderByIdRequestPath')!;

  return (req, res, next) => {
    if ([validatePath(req.params)].every(r => r)) {
      return next();
    }

    const errors = [[validatePath, 'params']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const deleteOrderValidator = (options: ValidationOptions): RequestHandler => {
  const validatePath = ajv.getSchema('#/definitions/DeleteOrderRequestPath')!;

  return (req, res, next) => {
    if ([validatePath(req.params)].every(r => r)) {
      return next();
    }

    const errors = [[validatePath, 'params']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const createUsersWithArrayInputValidator = (
  options: ValidationOptions
): RequestHandler => {
  const validateBody = ajv.getSchema(
    '#/definitions/CreateUsersWithArrayInputRequestBody'
  )!;

  return (req, res, next) => {
    if ([validateBody(req.body)].every(r => r)) {
      return next();
    }

    const errors = [[validateBody, 'body']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const createUsersWithListInputValidator = (
  options: ValidationOptions
): RequestHandler => {
  const validateBody = ajv.getSchema(
    '#/definitions/CreateUsersWithListInputRequestBody'
  )!;

  return (req, res, next) => {
    if ([validateBody(req.body)].every(r => r)) {
      return next();
    }

    const errors = [[validateBody, 'body']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const getUserByNameValidator = (options: ValidationOptions): RequestHandler => {
  const validatePath = ajv.getSchema('#/definitions/GetUserByNameRequestPath')!;

  return (req, res, next) => {
    if ([validatePath(req.params)].every(r => r)) {
      return next();
    }

    const errors = [[validatePath, 'params']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const updateUserValidator = (options: ValidationOptions): RequestHandler => {
  const validatePath = ajv.getSchema('#/definitions/UpdateUserRequestPath')!;

  const validateBody = ajv.getSchema('#/definitions/UpdateUserRequestBody')!;

  return (req, res, next) => {
    if ([validatePath(req.params), validateBody(req.body)].every(r => r)) {
      return next();
    }

    const errors = [
      [validatePath, 'params'],
      [validateBody, 'body']
    ]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const deleteUserValidator = (options: ValidationOptions): RequestHandler => {
  const validatePath = ajv.getSchema('#/definitions/DeleteUserRequestPath')!;

  return (req, res, next) => {
    if ([validatePath(req.params)].every(r => r)) {
      return next();
    }

    const errors = [[validatePath, 'params']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const loginUserValidator = (options: ValidationOptions): RequestHandler => {
  const validateQuery = ajv.getSchema('#/definitions/LoginUserRequestQuery')!;

  return (req, res, next) => {
    if ([validateQuery(req.query)].every(r => r)) {
      return next();
    }

    const errors = [[validateQuery, 'query']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const createUserValidator = (options: ValidationOptions): RequestHandler => {
  const validateBody = ajv.getSchema('#/definitions/CreateUserRequestBody')!;

  return (req, res, next) => {
    if ([validateBody(req.body)].every(r => r)) {
      return next();
    }

    const errors = [[validateBody, 'body']]
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

export const swaggerPetstoreRouter = (
  {
    addPet,
    updatePet,
    findPetsByStatus,
    findPetsByTags,
    getPetById,
    updatePetWithForm,
    deletePet,
    placeOrder,
    getOrderById,
    deleteOrder,
    getInventory,
    createUsersWithArrayInput,
    createUsersWithListInput,
    getUserByName,
    updateUser,
    deleteUser,
    loginUser,
    logoutUser,
    createUser
  }: RequestHandlers,
  options?: ValidationOptions
): Router => {
  return Router()
    .post('/pet', addPetValidator(options), addPet)
    .put('/pet', updatePetValidator(options), updatePet)
    .get(
      '/pet/findByStatus',
      findPetsByStatusValidator(options),
      findPetsByStatus
    )
    .get('/pet/findByTags', findPetsByTagsValidator(options), findPetsByTags)
    .get('/pet/:petId', getPetByIdValidator(options), getPetById)
    .post('/pet/:petId', updatePetWithFormValidator(options), updatePetWithForm)
    .delete('/pet/:petId', deletePetValidator(options), deletePet)
    .post('/store/order', placeOrderValidator(options), placeOrder)
    .get('/store/order/:orderId', getOrderByIdValidator(options), getOrderById)
    .delete('/store/order/:orderId', deleteOrderValidator(options), deleteOrder)
    .get('/store/inventory', getInventory)
    .post(
      '/user/createWithArray',
      createUsersWithArrayInputValidator(options),
      createUsersWithArrayInput
    )
    .post(
      '/user/createWithList',
      createUsersWithListInputValidator(options),
      createUsersWithListInput
    )
    .get('/user/:username', getUserByNameValidator(options), getUserByName)
    .put('/user/:username', updateUserValidator(options), updateUser)
    .delete('/user/:username', deleteUserValidator(options), deleteUser)
    .get('/user/login', loginUserValidator(options), loginUser)
    .get('/user/logout', logoutUser)
    .post('/user', createUserValidator(options), createUser);
};
