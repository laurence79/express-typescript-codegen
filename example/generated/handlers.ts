import { RequestHandler } from '@laurence79/express-async-request-handler';
import * as Schema from './schemaTypes';

export type AddPetRequestHandler = RequestHandler<
  unknown,
  unknown,
  Schema.AddPetRequestBody,
  unknown,
  Record<string, any>,
  405
>;

export type UpdatePetRequestHandler = RequestHandler<
  unknown,
  unknown,
  Schema.UpdatePetRequestBody,
  unknown,
  Record<string, any>,
  400 | 404 | 405
>;

export type FindPetsByStatusRequestHandler = RequestHandler<
  unknown,
  Schema.FindPetsByStatus200ResponseBody,
  unknown,
  Schema.FindPetsByStatusRequestQuery,
  Record<string, any>,
  200 | 400
>;

export type FindPetsByTagsRequestHandler = RequestHandler<
  unknown,
  Schema.FindPetsByTags200ResponseBody,
  unknown,
  Schema.FindPetsByTagsRequestQuery,
  Record<string, any>,
  200 | 400
>;

export type GetPetByIdRequestHandler = RequestHandler<
  Schema.GetPetByIdRequestPath,
  Schema.GetPetById200ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200 | 400 | 404
>;

export type UpdatePetWithFormRequestHandler = RequestHandler<
  Schema.UpdatePetWithFormRequestPath,
  unknown,
  unknown,
  unknown,
  Record<string, any>,
  405
>;

export type DeletePetRequestHandler = RequestHandler<
  Schema.DeletePetRequestPath,
  unknown,
  unknown,
  unknown,
  Record<string, any>,
  400 | 404
>;

export type PlaceOrderRequestHandler = RequestHandler<
  unknown,
  Schema.PlaceOrder200ResponseBody,
  Schema.PlaceOrderRequestBody,
  unknown,
  Record<string, any>,
  200 | 400
>;

export type GetOrderByIdRequestHandler = RequestHandler<
  Schema.GetOrderByIdRequestPath,
  Schema.GetOrderById200ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200 | 400 | 404
>;

export type DeleteOrderRequestHandler = RequestHandler<
  Schema.DeleteOrderRequestPath,
  unknown,
  unknown,
  unknown,
  Record<string, any>,
  400 | 404
>;

export type GetInventoryRequestHandler = RequestHandler<
  unknown,
  Schema.GetInventory200ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200
>;

export type CreateUsersWithArrayInputRequestHandler = RequestHandler<
  unknown,
  unknown,
  Schema.CreateUsersWithArrayInputRequestBody,
  unknown,
  Record<string, any>,
  number
>;

export type CreateUsersWithListInputRequestHandler = RequestHandler<
  unknown,
  unknown,
  Schema.CreateUsersWithListInputRequestBody,
  unknown,
  Record<string, any>,
  number
>;

export type GetUserByNameRequestHandler = RequestHandler<
  Schema.GetUserByNameRequestPath,
  Schema.GetUserByName200ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200 | 400 | 404
>;

export type UpdateUserRequestHandler = RequestHandler<
  Schema.UpdateUserRequestPath,
  unknown,
  Schema.UpdateUserRequestBody,
  unknown,
  Record<string, any>,
  400 | 404
>;

export type DeleteUserRequestHandler = RequestHandler<
  Schema.DeleteUserRequestPath,
  unknown,
  unknown,
  unknown,
  Record<string, any>,
  400 | 404
>;

export type LoginUserRequestHandler = RequestHandler<
  unknown,
  Schema.LoginUser200ResponseBody,
  unknown,
  Schema.LoginUserRequestQuery,
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
  Schema.CreateUserRequestBody,
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
