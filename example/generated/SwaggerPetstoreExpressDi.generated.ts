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

export abstract class AddPetController {
  abstract addPet(
    req: AddPetRequest,
    res: AddPetResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class UpdatePetController {
  abstract updatePet(
    req: UpdatePetRequest,
    res: UpdatePetResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class FindPetsByStatusController {
  abstract findPetsByStatus(
    req: FindPetsByStatusRequest,
    res: FindPetsByStatusResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class FindPetsByTagsController {
  abstract findPetsByTags(
    req: FindPetsByTagsRequest,
    res: FindPetsByTagsResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class GetPetByIdController {
  abstract getPetById(
    req: GetPetByIdRequest,
    res: GetPetByIdResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class UpdatePetWithFormController {
  abstract updatePetWithForm(
    req: UpdatePetWithFormRequest,
    res: UpdatePetWithFormResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class DeletePetController {
  abstract deletePet(
    req: DeletePetRequest,
    res: DeletePetResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class PlaceOrderController {
  abstract placeOrder(
    req: PlaceOrderRequest,
    res: PlaceOrderResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class GetOrderByIdController {
  abstract getOrderById(
    req: GetOrderByIdRequest,
    res: GetOrderByIdResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class DeleteOrderController {
  abstract deleteOrder(
    req: DeleteOrderRequest,
    res: DeleteOrderResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class GetInventoryController {
  abstract getInventory(
    req: GetInventoryRequest,
    res: GetInventoryResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class CreateUsersWithArrayInputController {
  abstract createUsersWithArrayInput(
    req: CreateUsersWithArrayInputRequest,
    res: CreateUsersWithArrayInputResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class CreateUsersWithListInputController {
  abstract createUsersWithListInput(
    req: CreateUsersWithListInputRequest,
    res: CreateUsersWithListInputResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class GetUserByNameController {
  abstract getUserByName(
    req: GetUserByNameRequest,
    res: GetUserByNameResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class UpdateUserController {
  abstract updateUser(
    req: UpdateUserRequest,
    res: UpdateUserResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class DeleteUserController {
  abstract deleteUser(
    req: DeleteUserRequest,
    res: DeleteUserResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

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

export abstract class LoginUserController {
  abstract loginUser(
    req: LoginUserRequest,
    res: LoginUserResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

export type LogoutUserRequest = Request<
  ParamsDictionary,
  unknown,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type LogoutUserResponse = Response<unknown, Record<string, any>, number>;

export abstract class LogoutUserController {
  abstract logoutUser(
    req: LogoutUserRequest,
    res: LogoutUserResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

export type CreateUserRequest = Request<
  ParamsDictionary,
  unknown,
  CreateUserRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type CreateUserResponse = Response<unknown, Record<string, any>, number>;

export abstract class CreateUserController {
  abstract createUser(
    req: CreateUserRequest,
    res: CreateUserResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

type Token<T> = { new (...args: any[]): T } | object;

export abstract class ControllerMiddleware {
  abstract resolver<T>(req: Request, token: Token<T>): T;

  private static validate = new ExpressJonValidator.Validator({
    strict: false,
    coerceTypes: true
  }).validate;

  private addAddPetController(router: Router): void {
    router.post(
      '/pet',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, AddPetController);

          await controller.addPet(
            (req as unknown) as AddPetRequest,
            res as AddPetResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addUpdatePetController(router: Router): void {
    router.put(
      '/pet',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, UpdatePetController);

          await controller.updatePet(
            (req as unknown) as UpdatePetRequest,
            res as UpdatePetResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addFindPetsByStatusController(router: Router): void {
    router.get(
      '/pet/findByStatus',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, FindPetsByStatusController);

          await controller.findPetsByStatus(
            (req as unknown) as FindPetsByStatusRequest,
            res as FindPetsByStatusResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addFindPetsByTagsController(router: Router): void {
    router.get(
      '/pet/findByTags',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, FindPetsByTagsController);

          await controller.findPetsByTags(
            (req as unknown) as FindPetsByTagsRequest,
            res as FindPetsByTagsResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addGetPetByIdController(router: Router): void {
    router.get(
      '/pet/:petId',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, GetPetByIdController);

          await controller.getPetById(
            (req as unknown) as GetPetByIdRequest,
            res as GetPetByIdResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addUpdatePetWithFormController(router: Router): void {
    router.post(
      '/pet/:petId',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, UpdatePetWithFormController);

          await controller.updatePetWithForm(
            (req as unknown) as UpdatePetWithFormRequest,
            res as UpdatePetWithFormResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addDeletePetController(router: Router): void {
    router.delete(
      '/pet/:petId',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, DeletePetController);

          await controller.deletePet(
            (req as unknown) as DeletePetRequest,
            res as DeletePetResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addPlaceOrderController(router: Router): void {
    router.post(
      '/store/order',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, PlaceOrderController);

          await controller.placeOrder(
            (req as unknown) as PlaceOrderRequest,
            res as PlaceOrderResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addGetOrderByIdController(router: Router): void {
    router.get(
      '/store/order/:orderId',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, GetOrderByIdController);

          await controller.getOrderById(
            (req as unknown) as GetOrderByIdRequest,
            res as GetOrderByIdResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addDeleteOrderController(router: Router): void {
    router.delete(
      '/store/order/:orderId',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, DeleteOrderController);

          await controller.deleteOrder(
            (req as unknown) as DeleteOrderRequest,
            res as DeleteOrderResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addGetInventoryController(router: Router): void {
    router.get(
      '/store/inventory',

      async (req, res, next) => {
        try {
          const controller = this.resolver(req, GetInventoryController);

          await controller.getInventory(
            (req as unknown) as GetInventoryRequest,
            res as GetInventoryResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addCreateUsersWithArrayInputController(router: Router): void {
    router.post(
      '/user/createWithArray',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(
            req,
            CreateUsersWithArrayInputController
          );

          await controller.createUsersWithArrayInput(
            (req as unknown) as CreateUsersWithArrayInputRequest,
            res as CreateUsersWithArrayInputResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addCreateUsersWithListInputController(router: Router): void {
    router.post(
      '/user/createWithList',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(
            req,
            CreateUsersWithListInputController
          );

          await controller.createUsersWithListInput(
            (req as unknown) as CreateUsersWithListInputRequest,
            res as CreateUsersWithListInputResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addGetUserByNameController(router: Router): void {
    router.get(
      '/user/:username',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, GetUserByNameController);

          await controller.getUserByName(
            (req as unknown) as GetUserByNameRequest,
            res as GetUserByNameResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addUpdateUserController(router: Router): void {
    router.put(
      '/user/:username',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, UpdateUserController);

          await controller.updateUser(
            (req as unknown) as UpdateUserRequest,
            res as UpdateUserResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addDeleteUserController(router: Router): void {
    router.delete(
      '/user/:username',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, DeleteUserController);

          await controller.deleteUser(
            (req as unknown) as DeleteUserRequest,
            res as DeleteUserResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addLoginUserController(router: Router): void {
    router.get(
      '/user/login',

      ControllerMiddleware.validate({
        query: {
          type: 'object',
          required: ['username', 'password'],
          properties: {
            username: {
              description: 'The user name for login',
              type: 'string'
            },
            password: {
              description: 'The password for login in clear text',
              type: 'string'
            }
          }
        }
      }),

      async (req, res, next) => {
        try {
          const controller = this.resolver(req, LoginUserController);

          await controller.loginUser(
            (req as unknown) as LoginUserRequest,
            res as LoginUserResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addLogoutUserController(router: Router): void {
    router.get(
      '/user/logout',

      async (req, res, next) => {
        try {
          const controller = this.resolver(req, LogoutUserController);

          await controller.logoutUser(
            (req as unknown) as LogoutUserRequest,
            res as LogoutUserResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private addCreateUserController(router: Router): void {
    router.post(
      '/user',

      ControllerMiddleware.validate({
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
        try {
          const controller = this.resolver(req, CreateUserController);

          await controller.createUser(
            (req as unknown) as CreateUserRequest,
            res as CreateUserResponse,
            next
          );
        } catch (e: unknown) {
          next(e);
        }
      }
    );
  }

  private static validationErrorMiddleware: ErrorRequestHandler = (
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

  public apply(expressApp: Express): void {
    const router = Router();

    this.addAddPetController(router);
    this.addUpdatePetController(router);
    this.addFindPetsByStatusController(router);
    this.addFindPetsByTagsController(router);
    this.addGetPetByIdController(router);
    this.addUpdatePetWithFormController(router);
    this.addDeletePetController(router);
    this.addPlaceOrderController(router);
    this.addGetOrderByIdController(router);
    this.addDeleteOrderController(router);
    this.addGetInventoryController(router);
    this.addCreateUsersWithArrayInputController(router);
    this.addCreateUsersWithListInputController(router);
    this.addGetUserByNameController(router);
    this.addUpdateUserController(router);
    this.addDeleteUserController(router);
    this.addLoginUserController(router);
    this.addLogoutUserController(router);
    this.addCreateUserController(router);

    expressApp.use(router);

    expressApp.use(ControllerMiddleware.validationErrorMiddleware);
  }
}
