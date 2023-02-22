import {
  Request,
  Response,
  Express,
  NextFunction,
  ParamsDictionary,
  ErrorRequestHandler
} from 'express-serve-static-core';
import { Router } from 'express';
import { asyncRequestHandler } from '@laurence79/express-async-request-handler';
import { ParsedQs } from 'qs';
import { injectable } from 'tsyringe';
import { Validator, ValidationError } from 'express-json-validator-middleware';

export type Category = { id?: number; name?: string };

export type Tag = { id?: number; name?: string };

export type Pet = {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: Array<string>;
  tags?: Array<Tag>;
  status?: 'available' | 'pending' | 'sold';
};

export type AddPetRequestBody = Pet;

export type UpdatePetRequestBody = Pet;

export type FindPetsByStatus200ResponseBody = Array<Pet>;

export type FindPetsByStatusRequestQuery = { status: unknown };

export type FindPetsByTags200ResponseBody = Array<Pet>;

export type FindPetsByTagsRequestQuery = { tags: unknown };

export type GetPetById200ResponseBody = Pet;

export type GetPetByIdRequestPath = { petId: number };

export type UpdatePetWithFormRequestPath = { petId: number };

export type DeletePetRequestPath = { petId: number };

export type Order = {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  status?: 'placed' | 'approved' | 'delivered';
  complete?: boolean;
};

export type PlaceOrder200ResponseBody = Order;

export type PlaceOrderRequestBody = Order;

export type GetOrderById200ResponseBody = Order;

export type GetOrderByIdRequestPath = { orderId: number };

export type DeleteOrderRequestPath = { orderId: number };

export type GetInventory200ResponseBody = unknown;

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

export type CreateUsersWithArrayInputRequestBody = Array<User>;

export type CreateUsersWithListInputRequestBody = Array<User>;

export type GetUserByName200ResponseBody = User;

export type GetUserByNameRequestPath = { username: string };

export type UpdateUserRequestBody = User;

export type UpdateUserRequestPath = { username: string };

export type DeleteUserRequestPath = { username: string };

export type LoginUser200ResponseBody = string;

export type LoginUserRequestQuery = { username: string; password: string };

export type CreateUserRequestBody = User;

export type AddPetRequest = Request<
  ParamsDictionary,
  unknown,
  AddPetRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type AddPetResponse = Response<unknown, Record<string, any>, 405>;

export interface AddPetController {
  addPet(
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

export interface UpdatePetController {
  updatePet(
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

export interface FindPetsByStatusController {
  findPetsByStatus(
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

export interface FindPetsByTagsController {
  findPetsByTags(
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

export interface GetPetByIdController {
  getPetById(
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

export interface UpdatePetWithFormController {
  updatePetWithForm(
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

export interface DeletePetController {
  deletePet(
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

export interface PlaceOrderController {
  placeOrder(
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

export interface GetOrderByIdController {
  getOrderById(
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

export interface DeleteOrderController {
  deleteOrder(
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

export interface GetInventoryController {
  getInventory(
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

export interface CreateUsersWithArrayInputController {
  createUsersWithArrayInput(
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

export interface CreateUsersWithListInputController {
  createUsersWithListInput(
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

export interface GetUserByNameController {
  getUserByName(
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

export interface UpdateUserController {
  updateUser(
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

export interface DeleteUserController {
  deleteUser(
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

export interface LoginUserController {
  loginUser(
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

export interface LogoutUserController {
  logoutUser(
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

export interface CreateUserController {
  createUser(
    req: CreateUserRequest,
    res: CreateUserResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

export interface RequestResolver {
  resolve<T>(token: { new (...args: any[]): T } | string | symbol): T;
}

@injectable()
export class RequestResolverFactory {
  constructor(public readonly forRequest: (req: Request) => RequestResolver) {}
}

@injectable()
export class ControllerMiddleware {
  constructor(private readonly resolver: RequestResolverFactory) {}

  private static validate = new Validator({ strict: false, coerceTypes: true })
    .validate;

  private addAddPetController(router: Router): void {
    router.post(
      '/pet',

      ControllerMiddleware.validate({
        body: {
          anyOf: [
            {
              type: 'object',
              required: ['name', 'photoUrls'],
              xml: { name: 'Pet' },
              title: 'Pet',
              properties: {
                id: { type: 'integer', format: 'int64' },
                category: {
                  type: 'object',
                  xml: { name: 'Category' },
                  title: 'Category',
                  properties: {
                    id: { type: 'integer', format: 'int64' },
                    name: { type: 'string' }
                  }
                },
                name: { type: 'string', example: 'doggie' },
                photoUrls: {
                  type: 'array',
                  xml: { wrapped: true },
                  items: { type: 'string', xml: { name: 'photoUrl' } }
                },
                tags: {
                  type: 'array',
                  xml: { wrapped: true },
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer', format: 'int64' },
                      name: { type: 'string' }
                    },
                    xml: { name: 'Tag' },
                    title: 'Tag'
                  }
                },
                status: {
                  type: 'string',
                  description: 'pet status in the store',
                  enum: ['available', 'pending', 'sold']
                }
              }
            }
          ]
        }
      }),

      asyncRequestHandler<AddPetRequest, AddPetResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<AddPetController>(nameof<AddPetController>());

          await controller.addPet(req, res, next);
        }
      )
    );
  }

  private addUpdatePetController(router: Router): void {
    router.put(
      '/pet',

      ControllerMiddleware.validate({
        body: {
          anyOf: [
            {
              type: 'object',
              required: ['name', 'photoUrls'],
              xml: { name: 'Pet' },
              title: 'Pet',
              properties: {
                id: { type: 'integer', format: 'int64' },
                category: {
                  type: 'object',
                  xml: { name: 'Category' },
                  title: 'Category',
                  properties: {
                    id: { type: 'integer', format: 'int64' },
                    name: { type: 'string' }
                  }
                },
                name: { type: 'string', example: 'doggie' },
                photoUrls: {
                  type: 'array',
                  xml: { wrapped: true },
                  items: { type: 'string', xml: { name: 'photoUrl' } }
                },
                tags: {
                  type: 'array',
                  xml: { wrapped: true },
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer', format: 'int64' },
                      name: { type: 'string' }
                    },
                    xml: { name: 'Tag' },
                    title: 'Tag'
                  }
                },
                status: {
                  type: 'string',
                  description: 'pet status in the store',
                  enum: ['available', 'pending', 'sold']
                }
              }
            }
          ]
        }
      }),

      asyncRequestHandler<UpdatePetRequest, UpdatePetResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<UpdatePetController>(nameof<UpdatePetController>());

          await controller.updatePet(req, res, next);
        }
      )
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

      asyncRequestHandler<FindPetsByStatusRequest, FindPetsByStatusResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<FindPetsByStatusController>(
              nameof<FindPetsByStatusController>()
            );

          await controller.findPetsByStatus(req, res, next);
        }
      )
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

      asyncRequestHandler<FindPetsByTagsRequest, FindPetsByTagsResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<FindPetsByTagsController>(
              nameof<FindPetsByTagsController>()
            );

          await controller.findPetsByTags(req, res, next);
        }
      )
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

      asyncRequestHandler<GetPetByIdRequest, GetPetByIdResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<GetPetByIdController>(nameof<GetPetByIdController>());

          await controller.getPetById(req, res, next);
        }
      )
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

      asyncRequestHandler<UpdatePetWithFormRequest, UpdatePetWithFormResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<UpdatePetWithFormController>(
              nameof<UpdatePetWithFormController>()
            );

          await controller.updatePetWithForm(req, res, next);
        }
      )
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

      asyncRequestHandler<DeletePetRequest, DeletePetResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<DeletePetController>(nameof<DeletePetController>());

          await controller.deletePet(req, res, next);
        }
      )
    );
  }

  private addPlaceOrderController(router: Router): void {
    router.post(
      '/store/order',

      ControllerMiddleware.validate({
        body: {
          anyOf: [
            {
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
          ]
        }
      }),

      asyncRequestHandler<PlaceOrderRequest, PlaceOrderResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<PlaceOrderController>(nameof<PlaceOrderController>());

          await controller.placeOrder(req, res, next);
        }
      )
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

      asyncRequestHandler<GetOrderByIdRequest, GetOrderByIdResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<GetOrderByIdController>(nameof<GetOrderByIdController>());

          await controller.getOrderById(req, res, next);
        }
      )
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

      asyncRequestHandler<DeleteOrderRequest, DeleteOrderResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<DeleteOrderController>(nameof<DeleteOrderController>());

          await controller.deleteOrder(req, res, next);
        }
      )
    );
  }

  private addGetInventoryController(router: Router): void {
    router.get(
      '/store/inventory',

      asyncRequestHandler<GetInventoryRequest, GetInventoryResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<GetInventoryController>(nameof<GetInventoryController>());

          await controller.getInventory(req, res, next);
        }
      )
    );
  }

  private addCreateUsersWithArrayInputController(router: Router): void {
    router.post(
      '/user/createWithArray',

      ControllerMiddleware.validate({
        body: {
          anyOf: [
            {
              type: 'array',
              items: {
                type: 'object',
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
                },
                xml: { name: 'User' },
                title: 'user'
              }
            }
          ]
        }
      }),

      asyncRequestHandler<
        CreateUsersWithArrayInputRequest,
        CreateUsersWithArrayInputResponse
      >(async (req, res, next) => {
        const controller = this.resolver
          .forRequest(req)
          .resolve<CreateUsersWithArrayInputController>(
            nameof<CreateUsersWithArrayInputController>()
          );

        await controller.createUsersWithArrayInput(req, res, next);
      })
    );
  }

  private addCreateUsersWithListInputController(router: Router): void {
    router.post(
      '/user/createWithList',

      ControllerMiddleware.validate({
        body: {
          anyOf: [
            {
              type: 'array',
              items: {
                type: 'object',
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
                },
                xml: { name: 'User' },
                title: 'user'
              }
            }
          ]
        }
      }),

      asyncRequestHandler<
        CreateUsersWithListInputRequest,
        CreateUsersWithListInputResponse
      >(async (req, res, next) => {
        const controller = this.resolver
          .forRequest(req)
          .resolve<CreateUsersWithListInputController>(
            nameof<CreateUsersWithListInputController>()
          );

        await controller.createUsersWithListInput(req, res, next);
      })
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

      asyncRequestHandler<GetUserByNameRequest, GetUserByNameResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<GetUserByNameController>(
              nameof<GetUserByNameController>()
            );

          await controller.getUserByName(req, res, next);
        }
      )
    );
  }

  private addUpdateUserController(router: Router): void {
    router.put(
      '/user/:username',

      ControllerMiddleware.validate({
        body: {
          anyOf: [
            {
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
          ]
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

      asyncRequestHandler<UpdateUserRequest, UpdateUserResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<UpdateUserController>(nameof<UpdateUserController>());

          await controller.updateUser(req, res, next);
        }
      )
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

      asyncRequestHandler<DeleteUserRequest, DeleteUserResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<DeleteUserController>(nameof<DeleteUserController>());

          await controller.deleteUser(req, res, next);
        }
      )
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

      asyncRequestHandler<LoginUserRequest, LoginUserResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<LoginUserController>(nameof<LoginUserController>());

          await controller.loginUser(req, res, next);
        }
      )
    );
  }

  private addLogoutUserController(router: Router): void {
    router.get(
      '/user/logout',

      asyncRequestHandler<LogoutUserRequest, LogoutUserResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<LogoutUserController>(nameof<LogoutUserController>());

          await controller.logoutUser(req, res, next);
        }
      )
    );
  }

  private addCreateUserController(router: Router): void {
    router.post(
      '/user',

      ControllerMiddleware.validate({
        body: {
          anyOf: [
            {
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
          ]
        }
      }),

      asyncRequestHandler<CreateUserRequest, CreateUserResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<CreateUserController>(nameof<CreateUserController>());

          await controller.createUser(req, res, next);
        }
      )
    );
  }

  private static validationErrorMiddleware: ErrorRequestHandler = (
    error,
    _,
    response,
    next
  ) => {
    if (error instanceof ValidationError) {
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
