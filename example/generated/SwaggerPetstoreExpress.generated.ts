import type {
  Request,
  Response,
  Express,
  NextFunction,
  ParamsDictionary,
  ErrorRequestHandler
} from 'express-serve-static-core';
import { Router } from 'express';
import { ParsedQs } from 'qs';
import * as ExpressJonValidator from 'express-json-validator-middleware';

export type Category = { readonly id?: number; readonly name?: string };

export type Tag = { readonly id?: number; readonly name?: string };

export type Pet = {
  readonly id?: number;
  readonly category?: Category;
  readonly name: string;
  readonly photoUrls: ReadonlyArray<string>;
  readonly tags?: ReadonlyArray<Tag>;
  readonly status?: 'available' | 'pending' | 'sold';
};

export type AddPetRequestBody = Pet;

export type UpdatePetRequestBody = Pet;

export type FindPetsByStatus200ResponseBody = ReadonlyArray<Pet>;

export type FindPetsByStatusRequestQuery = { readonly status: unknown };

export type FindPetsByTags200ResponseBody = ReadonlyArray<Pet>;

export type FindPetsByTagsRequestQuery = { readonly tags: unknown };

export type GetPetById200ResponseBody = Pet;

export type GetPetByIdRequestPath = { readonly petId: number };

export type UpdatePetWithFormRequestPath = { readonly petId: number };

export type DeletePetRequestPath = { readonly petId: number };

export type Order = {
  readonly id?: number;
  readonly petId?: number;
  readonly quantity?: number;
  readonly shipDate?: string;
  readonly status?: 'placed' | 'approved' | 'delivered';
  readonly complete?: boolean;
};

export type PlaceOrder200ResponseBody = Order;

export type PlaceOrderRequestBody = Order;

export type GetOrderById200ResponseBody = Order;

export type GetOrderByIdRequestPath = { readonly orderId: number };

export type DeleteOrderRequestPath = { readonly orderId: number };

export type GetInventory200ResponseBody = unknown;

export type User = {
  readonly id?: number;
  readonly username?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly password?: string;
  readonly phone?: string;
  readonly userStatus?: number;
};

export type CreateUsersWithArrayInputRequestBody = ReadonlyArray<User>;

export type CreateUsersWithListInputRequestBody = ReadonlyArray<User>;

export type GetUserByName200ResponseBody = User;

export type GetUserByNameRequestPath = { readonly username: string };

export type UpdateUserRequestBody = User;

export type UpdateUserRequestPath = { readonly username: string };

export type DeleteUserRequestPath = { readonly username: string };

export type LoginUser200ResponseBody = string;

export type LoginUserRequestQuery = {
  readonly username: string;
  readonly password: string;
};

export type CreateUserRequestBody = User;

export type AddPetRequest = Request<
  ParamsDictionary,
  unknown,
  AddPetRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type AddPetResponse = Response<unknown, Record<string, any>, 405>;

export type AddPetController = (
  req: AddPetRequest,
  res: AddPetResponse,
  next: NextFunction
) => Promise<void> | void;

export type UpdatePetRequest = Request<
  ParamsDictionary,
  unknown,
  UpdatePetRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type UpdatePetResponse = Response<
  unknown,
  Record<string, any>,
  400 | 404 | 405
>;

export type UpdatePetController = (
  req: UpdatePetRequest,
  res: UpdatePetResponse,
  next: NextFunction
) => Promise<void> | void;

export type FindPetsByStatusRequest = Request<
  ParamsDictionary,
  FindPetsByStatus200ResponseBody,
  unknown,
  FindPetsByStatusRequestQuery,
  Record<string, any>
>;

export type FindPetsByStatusResponse = Response<
  FindPetsByStatus200ResponseBody,
  Record<string, any>,
  200 | 400
>;

export type FindPetsByStatusController = (
  req: FindPetsByStatusRequest,
  res: FindPetsByStatusResponse,
  next: NextFunction
) => Promise<void> | void;

export type FindPetsByTagsRequest = Request<
  ParamsDictionary,
  FindPetsByTags200ResponseBody,
  unknown,
  FindPetsByTagsRequestQuery,
  Record<string, any>
>;

export type FindPetsByTagsResponse = Response<
  FindPetsByTags200ResponseBody,
  Record<string, any>,
  200 | 400
>;

export type FindPetsByTagsController = (
  req: FindPetsByTagsRequest,
  res: FindPetsByTagsResponse,
  next: NextFunction
) => Promise<void> | void;

export type GetPetByIdRequest = Request<
  GetPetByIdRequestPath,
  GetPetById200ResponseBody,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type GetPetByIdResponse = Response<
  GetPetById200ResponseBody,
  Record<string, any>,
  200 | 400 | 404
>;

export type GetPetByIdController = (
  req: GetPetByIdRequest,
  res: GetPetByIdResponse,
  next: NextFunction
) => Promise<void> | void;

export type UpdatePetWithFormRequest = Request<
  UpdatePetWithFormRequestPath,
  unknown,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type UpdatePetWithFormResponse = Response<
  unknown,
  Record<string, any>,
  405
>;

export type UpdatePetWithFormController = (
  req: UpdatePetWithFormRequest,
  res: UpdatePetWithFormResponse,
  next: NextFunction
) => Promise<void> | void;

export type DeletePetRequest = Request<
  DeletePetRequestPath,
  unknown,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type DeletePetResponse = Response<
  unknown,
  Record<string, any>,
  400 | 404
>;

export type DeletePetController = (
  req: DeletePetRequest,
  res: DeletePetResponse,
  next: NextFunction
) => Promise<void> | void;

export type PlaceOrderRequest = Request<
  ParamsDictionary,
  PlaceOrder200ResponseBody,
  PlaceOrderRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type PlaceOrderResponse = Response<
  PlaceOrder200ResponseBody,
  Record<string, any>,
  200 | 400
>;

export type PlaceOrderController = (
  req: PlaceOrderRequest,
  res: PlaceOrderResponse,
  next: NextFunction
) => Promise<void> | void;

export type GetOrderByIdRequest = Request<
  GetOrderByIdRequestPath,
  GetOrderById200ResponseBody,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type GetOrderByIdResponse = Response<
  GetOrderById200ResponseBody,
  Record<string, any>,
  200 | 400 | 404
>;

export type GetOrderByIdController = (
  req: GetOrderByIdRequest,
  res: GetOrderByIdResponse,
  next: NextFunction
) => Promise<void> | void;

export type DeleteOrderRequest = Request<
  DeleteOrderRequestPath,
  unknown,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type DeleteOrderResponse = Response<
  unknown,
  Record<string, any>,
  400 | 404
>;

export type DeleteOrderController = (
  req: DeleteOrderRequest,
  res: DeleteOrderResponse,
  next: NextFunction
) => Promise<void> | void;

export type GetInventoryRequest = Request<
  ParamsDictionary,
  GetInventory200ResponseBody,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type GetInventoryResponse = Response<
  GetInventory200ResponseBody,
  Record<string, any>,
  200
>;

export type GetInventoryController = (
  req: GetInventoryRequest,
  res: GetInventoryResponse,
  next: NextFunction
) => Promise<void> | void;

export type CreateUsersWithArrayInputRequest = Request<
  ParamsDictionary,
  unknown,
  CreateUsersWithArrayInputRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type CreateUsersWithArrayInputResponse = Response<
  unknown,
  Record<string, any>,
  number
>;

export type CreateUsersWithArrayInputController = (
  req: CreateUsersWithArrayInputRequest,
  res: CreateUsersWithArrayInputResponse,
  next: NextFunction
) => Promise<void> | void;

export type CreateUsersWithListInputRequest = Request<
  ParamsDictionary,
  unknown,
  CreateUsersWithListInputRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type CreateUsersWithListInputResponse = Response<
  unknown,
  Record<string, any>,
  number
>;

export type CreateUsersWithListInputController = (
  req: CreateUsersWithListInputRequest,
  res: CreateUsersWithListInputResponse,
  next: NextFunction
) => Promise<void> | void;

export type GetUserByNameRequest = Request<
  GetUserByNameRequestPath,
  GetUserByName200ResponseBody,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type GetUserByNameResponse = Response<
  GetUserByName200ResponseBody,
  Record<string, any>,
  200 | 400 | 404
>;

export type GetUserByNameController = (
  req: GetUserByNameRequest,
  res: GetUserByNameResponse,
  next: NextFunction
) => Promise<void> | void;

export type UpdateUserRequest = Request<
  UpdateUserRequestPath,
  unknown,
  UpdateUserRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type UpdateUserResponse = Response<
  unknown,
  Record<string, any>,
  400 | 404
>;

export type UpdateUserController = (
  req: UpdateUserRequest,
  res: UpdateUserResponse,
  next: NextFunction
) => Promise<void> | void;

export type DeleteUserRequest = Request<
  DeleteUserRequestPath,
  unknown,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type DeleteUserResponse = Response<
  unknown,
  Record<string, any>,
  400 | 404
>;

export type DeleteUserController = (
  req: DeleteUserRequest,
  res: DeleteUserResponse,
  next: NextFunction
) => Promise<void> | void;

export type LoginUserRequest = Request<
  ParamsDictionary,
  LoginUser200ResponseBody,
  unknown,
  LoginUserRequestQuery,
  Record<string, any>
>;

export type LoginUserResponse = Response<
  LoginUser200ResponseBody,
  Record<string, any>,
  200 | 400
>;

export type LoginUserController = (
  req: LoginUserRequest,
  res: LoginUserResponse,
  next: NextFunction
) => Promise<void> | void;

export type LogoutUserRequest = Request<
  ParamsDictionary,
  unknown,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type LogoutUserResponse = Response<unknown, Record<string, any>, number>;

export type LogoutUserController = (
  req: LogoutUserRequest,
  res: LogoutUserResponse,
  next: NextFunction
) => Promise<void> | void;

export type CreateUserRequest = Request<
  ParamsDictionary,
  unknown,
  CreateUserRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type CreateUserResponse = Response<unknown, Record<string, any>, number>;

export type CreateUserController = (
  req: CreateUserRequest,
  res: CreateUserResponse,
  next: NextFunction
) => Promise<void> | void;

export type Handlers = {
  addPet: AddPetController;
  updatePet: UpdatePetController;
  findPetsByStatus: FindPetsByStatusController;
  findPetsByTags: FindPetsByTagsController;
  getPetById: GetPetByIdController;
  updatePetWithForm: UpdatePetWithFormController;
  deletePet: DeletePetController;
  placeOrder: PlaceOrderController;
  getOrderById: GetOrderByIdController;
  deleteOrder: DeleteOrderController;
  getInventory: GetInventoryController;
  createUsersWithArrayInput: CreateUsersWithArrayInputController;
  createUsersWithListInput: CreateUsersWithListInputController;
  getUserByName: GetUserByNameController;
  updateUser: UpdateUserController;
  deleteUser: DeleteUserController;
  loginUser: LoginUserController;
  logoutUser: LogoutUserController;
  createUser: CreateUserController;
};

const { validate } = new ExpressJonValidator.Validator({
  strict: false,
  coerceTypes: true
});

export const addHandlers = (app: Express, handlers: Partial<Handlers>) => {
  const router = Router();

  router.post(
    '/pet',

    validate({
      body: {
        $ref: '#/definitions/Pet',
        definitions: {
          Pet: {
            type: 'object',
            required: ['name', 'photoUrls'],
            xml: { name: 'Pet' },
            title: 'Pet',
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
          Category: {
            type: 'object',
            xml: { name: 'Category' },
            title: 'Category',
            properties: {
              id: { type: 'integer', format: 'int64' },
              name: { type: 'string' }
            }
          },
          Tag: {
            type: 'object',
            xml: { name: 'Tag' },
            title: 'Tag',
            properties: {
              id: { type: 'integer', format: 'int64' },
              name: { type: 'string' }
            }
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['addPet'];

      if (!handler) {
        return next(new Error('/pet not handled'));
      }

      try {
        await handler(
          req as unknown as AddPetRequest,
          res as AddPetResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.put(
    '/pet',

    validate({
      body: {
        $ref: '#/definitions/Pet',
        definitions: {
          Pet: {
            type: 'object',
            required: ['name', 'photoUrls'],
            xml: { name: 'Pet' },
            title: 'Pet',
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
          Category: {
            type: 'object',
            xml: { name: 'Category' },
            title: 'Category',
            properties: {
              id: { type: 'integer', format: 'int64' },
              name: { type: 'string' }
            }
          },
          Tag: {
            type: 'object',
            xml: { name: 'Tag' },
            title: 'Tag',
            properties: {
              id: { type: 'integer', format: 'int64' },
              name: { type: 'string' }
            }
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['updatePet'];

      if (!handler) {
        return next(new Error('/pet not handled'));
      }

      try {
        await handler(
          req as unknown as UpdatePetRequest,
          res as UpdatePetResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.get(
    '/pet/findByStatus',

    validate({
      query: {
        type: 'object',
        required: ['status'],
        properties: {
          status: {
            anyOf: [
              {
                description:
                  'Status values that need to be considered for filter',
                type: 'array',
                items: {
                  type: 'string',
                  enum: ['available', 'pending', 'sold'],
                  default: 'available'
                },
                collectionFormat: 'multi'
              },
              {
                type: 'string',
                enum: ['available', 'pending', 'sold'],
                default: 'available'
              }
            ]
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['findPetsByStatus'];

      if (!handler) {
        return next(new Error('/pet/findByStatus not handled'));
      }

      try {
        await handler(
          req as unknown as FindPetsByStatusRequest,
          res as FindPetsByStatusResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.get(
    '/pet/findByTags',

    validate({
      query: {
        type: 'object',
        required: ['tags'],
        properties: {
          tags: {
            anyOf: [
              {
                description: 'Tags to filter by',
                type: 'array',
                items: { type: 'string' },
                collectionFormat: 'multi'
              },
              { type: 'string' }
            ]
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['findPetsByTags'];

      if (!handler) {
        return next(new Error('/pet/findByTags not handled'));
      }

      try {
        await handler(
          req as unknown as FindPetsByTagsRequest,
          res as FindPetsByTagsResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.get(
    '/pet/:petId',

    validate({
      params: {
        type: 'object',
        required: ['petId'],
        properties: {
          petId: {
            description: 'ID of pet to return',
            type: 'integer',
            format: 'int64'
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['getPetById'];

      if (!handler) {
        return next(new Error('/pet/:petId not handled'));
      }

      try {
        await handler(
          req as unknown as GetPetByIdRequest,
          res as GetPetByIdResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.post(
    '/pet/:petId',

    validate({
      params: {
        type: 'object',
        required: ['petId'],
        properties: {
          petId: {
            description: 'ID of pet that needs to be updated',
            type: 'integer',
            format: 'int64'
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['updatePetWithForm'];

      if (!handler) {
        return next(new Error('/pet/:petId not handled'));
      }

      try {
        await handler(
          req as unknown as UpdatePetWithFormRequest,
          res as UpdatePetWithFormResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.delete(
    '/pet/:petId',

    validate({
      params: {
        type: 'object',
        required: ['petId'],
        properties: {
          petId: {
            description: 'Pet id to delete',
            type: 'integer',
            format: 'int64'
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['deletePet'];

      if (!handler) {
        return next(new Error('/pet/:petId not handled'));
      }

      try {
        await handler(
          req as unknown as DeletePetRequest,
          res as DeletePetResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.post(
    '/store/order',

    validate({
      body: {
        $ref: '#/definitions/Order',
        definitions: {
          Order: {
            type: 'object',
            xml: { name: 'Order' },
            title: 'Order',
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
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['placeOrder'];

      if (!handler) {
        return next(new Error('/store/order not handled'));
      }

      try {
        await handler(
          req as unknown as PlaceOrderRequest,
          res as PlaceOrderResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.get(
    '/store/order/:orderId',

    validate({
      params: {
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
      }
    }),

    async (req, res, next) => {
      const handler = handlers['getOrderById'];

      if (!handler) {
        return next(new Error('/store/order/:orderId not handled'));
      }

      try {
        await handler(
          req as unknown as GetOrderByIdRequest,
          res as GetOrderByIdResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.delete(
    '/store/order/:orderId',

    validate({
      params: {
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
      }
    }),

    async (req, res, next) => {
      const handler = handlers['deleteOrder'];

      if (!handler) {
        return next(new Error('/store/order/:orderId not handled'));
      }

      try {
        await handler(
          req as unknown as DeleteOrderRequest,
          res as DeleteOrderResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.get(
    '/store/inventory',

    async (req, res, next) => {
      const handler = handlers['getInventory'];

      if (!handler) {
        return next(new Error('/store/inventory not handled'));
      }

      try {
        await handler(
          req as unknown as GetInventoryRequest,
          res as GetInventoryResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.post(
    '/user/createWithArray',

    validate({
      body: {
        type: 'array',
        items: { $ref: '#/definitions/user' },
        definitions: {
          user: {
            type: 'object',
            xml: { name: 'User' },
            title: 'user',
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
      }
    }),

    async (req, res, next) => {
      const handler = handlers['createUsersWithArrayInput'];

      if (!handler) {
        return next(new Error('/user/createWithArray not handled'));
      }

      try {
        await handler(
          req as unknown as CreateUsersWithArrayInputRequest,
          res as CreateUsersWithArrayInputResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.post(
    '/user/createWithList',

    validate({
      body: {
        type: 'array',
        items: { $ref: '#/definitions/user' },
        definitions: {
          user: {
            type: 'object',
            xml: { name: 'User' },
            title: 'user',
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
      }
    }),

    async (req, res, next) => {
      const handler = handlers['createUsersWithListInput'];

      if (!handler) {
        return next(new Error('/user/createWithList not handled'));
      }

      try {
        await handler(
          req as unknown as CreateUsersWithListInputRequest,
          res as CreateUsersWithListInputResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.get(
    '/user/:username',

    validate({
      params: {
        type: 'object',
        required: ['username'],
        properties: {
          username: {
            description:
              'The name that needs to be fetched. Use user1 for testing. ',
            type: 'string'
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['getUserByName'];

      if (!handler) {
        return next(new Error('/user/:username not handled'));
      }

      try {
        await handler(
          req as unknown as GetUserByNameRequest,
          res as GetUserByNameResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.put(
    '/user/:username',

    validate({
      body: {
        $ref: '#/definitions/user',
        definitions: {
          user: {
            type: 'object',
            xml: { name: 'User' },
            title: 'user',
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
      },

      params: {
        type: 'object',
        required: ['username'],
        properties: {
          username: {
            description: 'name that need to be updated',
            type: 'string'
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['updateUser'];

      if (!handler) {
        return next(new Error('/user/:username not handled'));
      }

      try {
        await handler(
          req as unknown as UpdateUserRequest,
          res as UpdateUserResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.delete(
    '/user/:username',

    validate({
      params: {
        type: 'object',
        required: ['username'],
        properties: {
          username: {
            description: 'The name that needs to be deleted',
            type: 'string'
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['deleteUser'];

      if (!handler) {
        return next(new Error('/user/:username not handled'));
      }

      try {
        await handler(
          req as unknown as DeleteUserRequest,
          res as DeleteUserResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.get(
    '/user/login',

    validate({
      query: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
          username: { description: 'The user name for login', type: 'string' },
          password: {
            description: 'The password for login in clear text',
            type: 'string'
          }
        }
      }
    }),

    async (req, res, next) => {
      const handler = handlers['loginUser'];

      if (!handler) {
        return next(new Error('/user/login not handled'));
      }

      try {
        await handler(
          req as unknown as LoginUserRequest,
          res as LoginUserResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.get(
    '/user/logout',

    async (req, res, next) => {
      const handler = handlers['logoutUser'];

      if (!handler) {
        return next(new Error('/user/logout not handled'));
      }

      try {
        await handler(
          req as unknown as LogoutUserRequest,
          res as LogoutUserResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  router.post(
    '/user',

    validate({
      body: {
        $ref: '#/definitions/user',
        definitions: {
          user: {
            type: 'object',
            xml: { name: 'User' },
            title: 'user',
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
      }
    }),

    async (req, res, next) => {
      const handler = handlers['createUser'];

      if (!handler) {
        return next(new Error('/user not handled'));
      }

      try {
        await handler(
          req as unknown as CreateUserRequest,
          res as CreateUserResponse,
          next
        );
      } catch (e: unknown) {
        next(e);
      }
    }
  );

  app.use(router);

  const validationErrorHandler: ErrorRequestHandler = (
    error,
    _,
    response,
    next
  ) => {
    if (error instanceof ExpressJonValidator.ValidationError) {
      response.status(400).send({
        type: 'REQUEST_VALIDATION_FAILED',
        fields: error.validationErrors
      });
      next();
    } else {
      next(error);
    }
  };

  app.use(validationErrorHandler);
};
