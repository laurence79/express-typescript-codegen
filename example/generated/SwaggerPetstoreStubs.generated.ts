import { RequestHandler } from '@laurence79/express-async-request-handler';
import { Router } from 'express';

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

type RequestLog<THeaders, TParams, TQuery, TBody> = {
  headers: THeaders;
  params: TParams;
  query: TQuery;
  body: TBody;
};

type ResponseStub<TStatus extends number, TBody> = {
  statusCode: TStatus;
  body: TBody;
};

type MethodStub<
  THeaders,
  TParams,
  TQuery,
  TRequestBody,
  TStatus extends number,
  TResponseBody
> = {
  requestHandler: RequestHandler<
    TParams,
    TResponseBody,
    TRequestBody,
    TQuery,
    Record<string, unknown>,
    TStatus
  >;
  respondWith(data: ResponseStub<TStatus, TResponseBody>): void;
  callLog(): RequestLog<THeaders, TParams, TQuery, TRequestBody>[];
};

const methodStub = <
  THeaders,
  TParams,
  TQuery,
  TRequestBody,
  TStatus extends number,
  TResponseBody
>(): MethodStub<
  THeaders,
  TParams,
  TQuery,
  TRequestBody,
  TStatus,
  TResponseBody
> => {
  const log: RequestLog<THeaders, TParams, TQuery, TRequestBody>[] = [];

  let responseStub: ResponseStub<TStatus, TResponseBody> | null = null;

  return {
    requestHandler: (req, res) => {
      const { headers, params, query, body } = req;

      log.push({
        headers: (headers as unknown) as THeaders,
        params,
        query,
        body
      });

      if (!responseStub) {
        throw new Error('Method not stubbed');
      }

      res.status(responseStub.statusCode).send(responseStub.body);
    },

    respondWith(data) {
      responseStub = data;
    },

    callLog() {
      return log;
    }
  };
};

type MethodStubs = {
  readonly addPet: MethodStub<
    unknown,
    unknown,
    unknown,
    AddPetRequestBody,
    405,
    unknown
  >;
  readonly updatePet: MethodStub<
    unknown,
    unknown,
    unknown,
    UpdatePetRequestBody,
    400 | 404 | 405,
    unknown
  >;
  readonly findPetsByStatus: MethodStub<
    unknown,
    unknown,
    FindPetsByStatusRequestQuery,
    unknown,
    200 | 400,
    FindPetsByStatus200ResponseBody | unknown
  >;
  readonly findPetsByTags: MethodStub<
    unknown,
    unknown,
    FindPetsByTagsRequestQuery,
    unknown,
    200 | 400,
    FindPetsByTags200ResponseBody | unknown
  >;
  readonly getPetById: MethodStub<
    unknown,
    GetPetByIdRequestPath,
    unknown,
    unknown,
    200 | 400 | 404,
    GetPetById200ResponseBody | unknown
  >;
  readonly updatePetWithForm: MethodStub<
    unknown,
    UpdatePetWithFormRequestPath,
    unknown,
    UpdatePetWithFormRequestBody,
    405,
    unknown
  >;
  readonly deletePet: MethodStub<
    DeletePetRequestHeader,
    DeletePetRequestPath,
    unknown,
    unknown,
    400 | 404,
    unknown
  >;
  readonly placeOrder: MethodStub<
    unknown,
    unknown,
    unknown,
    PlaceOrderRequestBody,
    200 | 400,
    PlaceOrder200ResponseBody | unknown
  >;
  readonly getOrderById: MethodStub<
    unknown,
    GetOrderByIdRequestPath,
    unknown,
    unknown,
    200 | 400 | 404,
    GetOrderById200ResponseBody | unknown
  >;
  readonly deleteOrder: MethodStub<
    unknown,
    DeleteOrderRequestPath,
    unknown,
    unknown,
    400 | 404,
    unknown
  >;
  readonly getInventory: MethodStub<
    unknown,
    unknown,
    unknown,
    unknown,
    200,
    GetInventory200ResponseBody
  >;
  readonly createUsersWithArrayInput: MethodStub<
    unknown,
    unknown,
    unknown,
    CreateUsersWithArrayInputRequestBody,
    number,
    unknown
  >;
  readonly createUsersWithListInput: MethodStub<
    unknown,
    unknown,
    unknown,
    CreateUsersWithListInputRequestBody,
    number,
    unknown
  >;
  readonly getUserByName: MethodStub<
    unknown,
    GetUserByNameRequestPath,
    unknown,
    unknown,
    200 | 400 | 404,
    GetUserByName200ResponseBody | unknown
  >;
  readonly updateUser: MethodStub<
    unknown,
    UpdateUserRequestPath,
    unknown,
    UpdateUserRequestBody,
    400 | 404,
    unknown
  >;
  readonly deleteUser: MethodStub<
    unknown,
    DeleteUserRequestPath,
    unknown,
    unknown,
    400 | 404,
    unknown
  >;
  readonly loginUser: MethodStub<
    unknown,
    unknown,
    LoginUserRequestQuery,
    unknown,
    200 | 400,
    LoginUser200ResponseBody | unknown
  >;
  readonly logoutUser: MethodStub<
    unknown,
    unknown,
    unknown,
    unknown,
    number,
    unknown
  >;
  readonly createUser: MethodStub<
    unknown,
    unknown,
    unknown,
    CreateUserRequestBody,
    number,
    unknown
  >;
};

export type SwaggerPetstoreServiceStub = {
  readonly middleware: RequestHandler;
  readonly reset: () => void;
  readonly stubs: () => MethodStubs;
};

export const swaggerPetstoreServiceStub = (): SwaggerPetstoreServiceStub => {
  let methodStubs: MethodStubs;
  let currentRouter: RequestHandler;

  const reset = () => {
    methodStubs = {
      addPet: methodStub(),
      updatePet: methodStub(),
      findPetsByStatus: methodStub(),
      findPetsByTags: methodStub(),
      getPetById: methodStub(),
      updatePetWithForm: methodStub(),
      deletePet: methodStub(),
      placeOrder: methodStub(),
      getOrderById: methodStub(),
      deleteOrder: methodStub(),
      getInventory: methodStub(),
      createUsersWithArrayInput: methodStub(),
      createUsersWithListInput: methodStub(),
      getUserByName: methodStub(),
      updateUser: methodStub(),
      deleteUser: methodStub(),
      loginUser: methodStub(),
      logoutUser: methodStub(),
      createUser: methodStub()
    };

    currentRouter = Router()
      .post('/pet', methodStubs.addPet.requestHandler)
      .put('/pet', methodStubs.updatePet.requestHandler)
      .get('/pet/findByStatus', methodStubs.findPetsByStatus.requestHandler)
      .get('/pet/findByTags', methodStubs.findPetsByTags.requestHandler)
      .get('/pet/:petId', methodStubs.getPetById.requestHandler)
      .post('/pet/:petId', methodStubs.updatePetWithForm.requestHandler)
      .delete('/pet/:petId', methodStubs.deletePet.requestHandler)
      .post('/store/order', methodStubs.placeOrder.requestHandler)
      .get('/store/order/:orderId', methodStubs.getOrderById.requestHandler)
      .delete('/store/order/:orderId', methodStubs.deleteOrder.requestHandler)
      .get('/store/inventory', methodStubs.getInventory.requestHandler)
      .post(
        '/user/createWithArray',
        methodStubs.createUsersWithArrayInput.requestHandler
      )
      .post(
        '/user/createWithList',
        methodStubs.createUsersWithListInput.requestHandler
      )
      .get('/user/:username', methodStubs.getUserByName.requestHandler)
      .put('/user/:username', methodStubs.updateUser.requestHandler)
      .delete('/user/:username', methodStubs.deleteUser.requestHandler)
      .get('/user/login', methodStubs.loginUser.requestHandler)
      .get('/user/logout', methodStubs.logoutUser.requestHandler)
      .post('/user', methodStubs.createUser.requestHandler);
  };

  reset();

  return {
    reset,
    middleware: (...args: Parameters<RequestHandler>) => currentRouter(...args),
    stubs: () => methodStubs
  };
};
