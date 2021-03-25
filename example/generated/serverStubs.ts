import { RequestHandler } from '@laurence79/express-async-request-handler';
import { Router } from 'express';
import * as Schema from './schemaTypes';

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
    Schema.AddPetRequestBody,
    405,
    unknown
  >;
  readonly updatePet: MethodStub<
    unknown,
    unknown,
    unknown,
    Schema.UpdatePetRequestBody,
    400 | 404 | 405,
    unknown
  >;
  readonly findPetsByStatus: MethodStub<
    unknown,
    unknown,
    Schema.FindPetsByStatusRequestQuery,
    unknown,
    200 | 400,
    Schema.FindPetsByStatus200ResponseBody
  >;
  readonly findPetsByTags: MethodStub<
    unknown,
    unknown,
    Schema.FindPetsByTagsRequestQuery,
    unknown,
    200 | 400,
    Schema.FindPetsByTags200ResponseBody
  >;
  readonly getPetById: MethodStub<
    unknown,
    Schema.GetPetByIdRequestPath,
    unknown,
    unknown,
    200 | 400 | 404,
    Schema.GetPetById200ResponseBody
  >;
  readonly updatePetWithForm: MethodStub<
    unknown,
    Schema.UpdatePetWithFormRequestPath,
    unknown,
    unknown,
    405,
    unknown
  >;
  readonly deletePet: MethodStub<
    Schema.DeletePetRequestHeader,
    Schema.DeletePetRequestPath,
    unknown,
    unknown,
    400 | 404,
    unknown
  >;
  readonly placeOrder: MethodStub<
    unknown,
    unknown,
    unknown,
    Schema.PlaceOrderRequestBody,
    200 | 400,
    Schema.PlaceOrder200ResponseBody
  >;
  readonly getOrderById: MethodStub<
    unknown,
    Schema.GetOrderByIdRequestPath,
    unknown,
    unknown,
    200 | 400 | 404,
    Schema.GetOrderById200ResponseBody
  >;
  readonly deleteOrder: MethodStub<
    unknown,
    Schema.DeleteOrderRequestPath,
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
    Schema.GetInventory200ResponseBody
  >;
  readonly createUsersWithArrayInput: MethodStub<
    unknown,
    unknown,
    unknown,
    Schema.CreateUsersWithArrayInputRequestBody,
    number,
    unknown
  >;
  readonly createUsersWithListInput: MethodStub<
    unknown,
    unknown,
    unknown,
    Schema.CreateUsersWithListInputRequestBody,
    number,
    unknown
  >;
  readonly getUserByName: MethodStub<
    unknown,
    Schema.GetUserByNameRequestPath,
    unknown,
    unknown,
    200 | 400 | 404,
    Schema.GetUserByName200ResponseBody
  >;
  readonly updateUser: MethodStub<
    unknown,
    Schema.UpdateUserRequestPath,
    unknown,
    Schema.UpdateUserRequestBody,
    400 | 404,
    unknown
  >;
  readonly deleteUser: MethodStub<
    unknown,
    Schema.DeleteUserRequestPath,
    unknown,
    unknown,
    400 | 404,
    unknown
  >;
  readonly loginUser: MethodStub<
    unknown,
    unknown,
    Schema.LoginUserRequestQuery,
    unknown,
    200 | 400,
    Schema.LoginUser200ResponseBody
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
    Schema.CreateUserRequestBody,
    number,
    unknown
  >;
};

export type ServiceStub = {
  readonly middleware: RequestHandler;
  readonly reset: () => void;
  readonly stubs: () => MethodStubs;
};

export const serviceStub = (): ServiceStub => {
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
