import { RequestHandler } from '@laurence79/express-async-request-handler';
import * as Schema from './types';
import * as Query from './queryTypes';
import * as Param from './parameterTypes';

export type UploadFileRequestHandler = RequestHandler<
  Param.UploadFileParams,
  Schema.UploadFile200ResponseBody,
  unknown,
  Query.UploadFileQuery,
  Record<string, any>,
  200
>;

export type AddPetRequestHandler = RequestHandler<
  Param.AddPetParams,
  unknown,
  Schema.AddPetRequestBody,
  Query.AddPetQuery,
  Record<string, any>,
  405
>;

export type UpdatePetRequestHandler = RequestHandler<
  Param.UpdatePetParams,
  unknown,
  Schema.UpdatePetRequestBody,
  Query.UpdatePetQuery,
  Record<string, any>,
  400 | 404 | 405
>;

export type FindPetsByStatusRequestHandler = RequestHandler<
  Param.FindPetsByStatusParams,
  Schema.FindPetsByStatus200ResponseBody,
  unknown,
  Query.FindPetsByStatusQuery,
  Record<string, any>,
  200 | 400
>;

export type FindPetsByTagsRequestHandler = RequestHandler<
  Param.FindPetsByTagsParams,
  Schema.FindPetsByTags200ResponseBody,
  unknown,
  Query.FindPetsByTagsQuery,
  Record<string, any>,
  200 | 400
>;

export type GetPetByIdRequestHandler = RequestHandler<
  Param.GetPetByIdParams,
  Schema.GetPetById200ResponseBody,
  unknown,
  Query.GetPetByIdQuery,
  Record<string, any>,
  200 | 400 | 404
>;

export type UpdatePetWithFormRequestHandler = RequestHandler<
  Param.UpdatePetWithFormParams,
  unknown,
  unknown,
  Query.UpdatePetWithFormQuery,
  Record<string, any>,
  405
>;

export type DeletePetRequestHandler = RequestHandler<
  Param.DeletePetParams,
  unknown,
  unknown,
  Query.DeletePetQuery,
  Record<string, any>,
  400 | 404
>;

export type PlaceOrderRequestHandler = RequestHandler<
  Param.PlaceOrderParams,
  Schema.PlaceOrder200ResponseBody,
  Schema.PlaceOrderRequestBody,
  Query.PlaceOrderQuery,
  Record<string, any>,
  200 | 400
>;

export type GetOrderByIdRequestHandler = RequestHandler<
  Param.GetOrderByIdParams,
  Schema.GetOrderById200ResponseBody,
  unknown,
  Query.GetOrderByIdQuery,
  Record<string, any>,
  200 | 400 | 404
>;

export type DeleteOrderRequestHandler = RequestHandler<
  Param.DeleteOrderParams,
  unknown,
  unknown,
  Query.DeleteOrderQuery,
  Record<string, any>,
  400 | 404
>;

export type GetInventoryRequestHandler = RequestHandler<
  Param.GetInventoryParams,
  Schema.GetInventory200ResponseBody,
  unknown,
  Query.GetInventoryQuery,
  Record<string, any>,
  200
>;

export type CreateUsersWithArrayInputRequestHandler = RequestHandler<
  Param.CreateUsersWithArrayInputParams,
  unknown,
  Schema.CreateUsersWithArrayInputRequestBody,
  Query.CreateUsersWithArrayInputQuery,
  Record<string, any>,
  number
>;

export type CreateUsersWithListInputRequestHandler = RequestHandler<
  Param.CreateUsersWithListInputParams,
  unknown,
  Schema.CreateUsersWithListInputRequestBody,
  Query.CreateUsersWithListInputQuery,
  Record<string, any>,
  number
>;

export type GetUserByNameRequestHandler = RequestHandler<
  Param.GetUserByNameParams,
  Schema.GetUserByName200ResponseBody,
  unknown,
  Query.GetUserByNameQuery,
  Record<string, any>,
  200 | 400 | 404
>;

export type UpdateUserRequestHandler = RequestHandler<
  Param.UpdateUserParams,
  unknown,
  Schema.UpdateUserRequestBody,
  Query.UpdateUserQuery,
  Record<string, any>,
  400 | 404
>;

export type DeleteUserRequestHandler = RequestHandler<
  Param.DeleteUserParams,
  unknown,
  unknown,
  Query.DeleteUserQuery,
  Record<string, any>,
  400 | 404
>;

export type LoginUserRequestHandler = RequestHandler<
  Param.LoginUserParams,
  Schema.LoginUser200ResponseBody,
  unknown,
  Query.LoginUserQuery,
  Record<string, any>,
  200 | 400
>;

export type LogoutUserRequestHandler = RequestHandler<
  Param.LogoutUserParams,
  unknown,
  unknown,
  Query.LogoutUserQuery,
  Record<string, any>,
  number
>;

export type CreateUserRequestHandler = RequestHandler<
  Param.CreateUserParams,
  unknown,
  Schema.CreateUserRequestBody,
  Query.CreateUserQuery,
  Record<string, any>,
  number
>;

export type RequestHandlers = {
  uploadFile: UploadFileRequestHandler;
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
