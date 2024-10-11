import * as msw from 'msw';

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

export type AddPetRequestQuery = {};

export type AddPetRequestHeaders = {};

export type AddPetRequestParams = {};

export type AddPetRequestBody = { readonly body: Pet };

export type AddPetResponseStatus = 405;

export type AddPetResponseBody = never;

export type AddPetResolver = msw.HttpResponseResolver<
  AddPetRequestParams,
  AddPetRequestBody,
  AddPetResponseBody
>;

export type UpdatePetRequestQuery = {};

export type UpdatePetRequestHeaders = {};

export type UpdatePetRequestParams = {};

export type UpdatePetRequestBody = { readonly body: Pet };

export type UpdatePetResponseStatus = 400 | 404 | 405;

export type UpdatePetResponseBody = never;

export type UpdatePetResolver = msw.HttpResponseResolver<
  UpdatePetRequestParams,
  UpdatePetRequestBody,
  UpdatePetResponseBody
>;

export type FindPetsByStatusRequestQuery = { readonly status: string };

export type FindPetsByStatusRequestHeaders = {};

export type FindPetsByStatusRequestParams = {};

export type FindPetsByStatusRequestBody = {};

export type FindPetsByStatusResponseStatus = 200 | 400;

export type FindPetsByStatusResponseBody = ReadonlyArray<Pet>;

export type FindPetsByStatusResolver = msw.HttpResponseResolver<
  FindPetsByStatusRequestParams,
  FindPetsByStatusRequestBody,
  FindPetsByStatusResponseBody
>;

export type FindPetsByTagsRequestQuery = { readonly tags: string };

export type FindPetsByTagsRequestHeaders = {};

export type FindPetsByTagsRequestParams = {};

export type FindPetsByTagsRequestBody = {};

export type FindPetsByTagsResponseStatus = 200 | 400;

export type FindPetsByTagsResponseBody = ReadonlyArray<Pet>;

export type FindPetsByTagsResolver = msw.HttpResponseResolver<
  FindPetsByTagsRequestParams,
  FindPetsByTagsRequestBody,
  FindPetsByTagsResponseBody
>;

export type GetPetByIdRequestQuery = {};

export type GetPetByIdRequestHeaders = {};

export type GetPetByIdRequestParams = { readonly petId: string };

export type GetPetByIdRequestBody = {};

export type GetPetByIdResponseStatus = 200 | 400 | 404;

export type GetPetByIdResponseBody = Pet;

export type GetPetByIdResolver = msw.HttpResponseResolver<
  GetPetByIdRequestParams,
  GetPetByIdRequestBody,
  GetPetByIdResponseBody
>;

export type UpdatePetWithFormRequestQuery = {};

export type UpdatePetWithFormRequestHeaders = {};

export type UpdatePetWithFormRequestParams = { readonly petId: string };

export type UpdatePetWithFormRequestBody = {};

export type UpdatePetWithFormResponseStatus = 405;

export type UpdatePetWithFormResponseBody = never;

export type UpdatePetWithFormResolver = msw.HttpResponseResolver<
  UpdatePetWithFormRequestParams,
  UpdatePetWithFormRequestBody,
  UpdatePetWithFormResponseBody
>;

export type DeletePetRequestQuery = {};

export type DeletePetRequestHeaders = { readonly api_key?: string };

export type DeletePetRequestParams = { readonly petId: string };

export type DeletePetRequestBody = {};

export type DeletePetResponseStatus = 400 | 404;

export type DeletePetResponseBody = never;

export type DeletePetResolver = msw.HttpResponseResolver<
  DeletePetRequestParams,
  DeletePetRequestBody,
  DeletePetResponseBody
>;

export type Order = {
  readonly id?: number;
  readonly petId?: number;
  readonly quantity?: number;
  readonly shipDate?: string;
  readonly status?: 'placed' | 'approved' | 'delivered';
  readonly complete?: boolean;
};

export type PlaceOrderRequestQuery = {};

export type PlaceOrderRequestHeaders = {};

export type PlaceOrderRequestParams = {};

export type PlaceOrderRequestBody = { readonly body: Order };

export type PlaceOrderResponseStatus = 200 | 400;

export type PlaceOrderResponseBody = Order;

export type PlaceOrderResolver = msw.HttpResponseResolver<
  PlaceOrderRequestParams,
  PlaceOrderRequestBody,
  PlaceOrderResponseBody
>;

export type GetOrderByIdRequestQuery = {};

export type GetOrderByIdRequestHeaders = {};

export type GetOrderByIdRequestParams = { readonly orderId: string };

export type GetOrderByIdRequestBody = {};

export type GetOrderByIdResponseStatus = 200 | 400 | 404;

export type GetOrderByIdResponseBody = Order;

export type GetOrderByIdResolver = msw.HttpResponseResolver<
  GetOrderByIdRequestParams,
  GetOrderByIdRequestBody,
  GetOrderByIdResponseBody
>;

export type DeleteOrderRequestQuery = {};

export type DeleteOrderRequestHeaders = {};

export type DeleteOrderRequestParams = { readonly orderId: string };

export type DeleteOrderRequestBody = {};

export type DeleteOrderResponseStatus = 400 | 404;

export type DeleteOrderResponseBody = never;

export type DeleteOrderResolver = msw.HttpResponseResolver<
  DeleteOrderRequestParams,
  DeleteOrderRequestBody,
  DeleteOrderResponseBody
>;

export type GetInventoryRequestQuery = {};

export type GetInventoryRequestHeaders = {};

export type GetInventoryRequestParams = {};

export type GetInventoryRequestBody = {};

export type GetInventoryResponseStatus = 200;

export type GetInventoryResponseBody = never;

export type GetInventoryResolver = msw.HttpResponseResolver<
  GetInventoryRequestParams,
  GetInventoryRequestBody,
  GetInventoryResponseBody
>;

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

export type CreateUsersWithArrayInputRequestQuery = {};

export type CreateUsersWithArrayInputRequestHeaders = {};

export type CreateUsersWithArrayInputRequestParams = {};

export type CreateUsersWithArrayInputRequestBody = {
  readonly body: ReadonlyArray<User>;
};

export type CreateUsersWithArrayInputResponseStatus = number;

export type CreateUsersWithArrayInputResponseBody = never;

export type CreateUsersWithArrayInputResolver = msw.HttpResponseResolver<
  CreateUsersWithArrayInputRequestParams,
  CreateUsersWithArrayInputRequestBody,
  CreateUsersWithArrayInputResponseBody
>;

export type CreateUsersWithListInputRequestQuery = {};

export type CreateUsersWithListInputRequestHeaders = {};

export type CreateUsersWithListInputRequestParams = {};

export type CreateUsersWithListInputRequestBody = {
  readonly body: ReadonlyArray<User>;
};

export type CreateUsersWithListInputResponseStatus = number;

export type CreateUsersWithListInputResponseBody = never;

export type CreateUsersWithListInputResolver = msw.HttpResponseResolver<
  CreateUsersWithListInputRequestParams,
  CreateUsersWithListInputRequestBody,
  CreateUsersWithListInputResponseBody
>;

export type GetUserByNameRequestQuery = {};

export type GetUserByNameRequestHeaders = {};

export type GetUserByNameRequestParams = { readonly username: string };

export type GetUserByNameRequestBody = {};

export type GetUserByNameResponseStatus = 200 | 400 | 404;

export type GetUserByNameResponseBody = User;

export type GetUserByNameResolver = msw.HttpResponseResolver<
  GetUserByNameRequestParams,
  GetUserByNameRequestBody,
  GetUserByNameResponseBody
>;

export type UpdateUserRequestQuery = {};

export type UpdateUserRequestHeaders = {};

export type UpdateUserRequestParams = { readonly username: string };

export type UpdateUserRequestBody = { readonly body: User };

export type UpdateUserResponseStatus = 400 | 404;

export type UpdateUserResponseBody = never;

export type UpdateUserResolver = msw.HttpResponseResolver<
  UpdateUserRequestParams,
  UpdateUserRequestBody,
  UpdateUserResponseBody
>;

export type DeleteUserRequestQuery = {};

export type DeleteUserRequestHeaders = {};

export type DeleteUserRequestParams = { readonly username: string };

export type DeleteUserRequestBody = {};

export type DeleteUserResponseStatus = 400 | 404;

export type DeleteUserResponseBody = never;

export type DeleteUserResolver = msw.HttpResponseResolver<
  DeleteUserRequestParams,
  DeleteUserRequestBody,
  DeleteUserResponseBody
>;

export type LoginUserRequestQuery = {
  readonly username: string;
  readonly password: string;
};

export type LoginUserRequestHeaders = {};

export type LoginUserRequestParams = {};

export type LoginUserRequestBody = {};

export type LoginUserResponseStatus = 200 | 400;

export type LoginUserResponseBody = string;

export type LoginUserResolver = msw.HttpResponseResolver<
  LoginUserRequestParams,
  LoginUserRequestBody,
  LoginUserResponseBody
>;

export type LogoutUserRequestQuery = {};

export type LogoutUserRequestHeaders = {};

export type LogoutUserRequestParams = {};

export type LogoutUserRequestBody = {};

export type LogoutUserResponseStatus = number;

export type LogoutUserResponseBody = never;

export type LogoutUserResolver = msw.HttpResponseResolver<
  LogoutUserRequestParams,
  LogoutUserRequestBody,
  LogoutUserResponseBody
>;

export type CreateUserRequestQuery = {};

export type CreateUserRequestHeaders = {};

export type CreateUserRequestParams = {};

export type CreateUserRequestBody = { readonly body: User };

export type CreateUserResponseStatus = number;

export type CreateUserResponseBody = never;

export type CreateUserResolver = msw.HttpResponseResolver<
  CreateUserRequestParams,
  CreateUserRequestBody,
  CreateUserResponseBody
>;

export function handleAddPet(resolver: AddPetResolver) {
  return msw.http.post('/pet', resolver);
}

export function handleUpdatePet(resolver: UpdatePetResolver) {
  return msw.http.put('/pet', resolver);
}

export function handleFindPetsByStatus(resolver: FindPetsByStatusResolver) {
  return msw.http.get('/pet/findByStatus', resolver);
}

export function handleFindPetsByTags(resolver: FindPetsByTagsResolver) {
  return msw.http.get('/pet/findByTags', resolver);
}

export function handleGetPetById(resolver: GetPetByIdResolver) {
  return msw.http.get('/pet/:petId', resolver);
}

export function handleUpdatePetWithForm(resolver: UpdatePetWithFormResolver) {
  return msw.http.post('/pet/:petId', resolver);
}

export function handleDeletePet(resolver: DeletePetResolver) {
  return msw.http.delete('/pet/:petId', resolver);
}

export function handlePlaceOrder(resolver: PlaceOrderResolver) {
  return msw.http.post('/store/order', resolver);
}

export function handleGetOrderById(resolver: GetOrderByIdResolver) {
  return msw.http.get('/store/order/:orderId', resolver);
}

export function handleDeleteOrder(resolver: DeleteOrderResolver) {
  return msw.http.delete('/store/order/:orderId', resolver);
}

export function handleGetInventory(resolver: GetInventoryResolver) {
  return msw.http.get('/store/inventory', resolver);
}

export function handleCreateUsersWithArrayInput(
  resolver: CreateUsersWithArrayInputResolver
) {
  return msw.http.post('/user/createWithArray', resolver);
}

export function handleCreateUsersWithListInput(
  resolver: CreateUsersWithListInputResolver
) {
  return msw.http.post('/user/createWithList', resolver);
}

export function handleGetUserByName(resolver: GetUserByNameResolver) {
  return msw.http.get('/user/:username', resolver);
}

export function handleUpdateUser(resolver: UpdateUserResolver) {
  return msw.http.put('/user/:username', resolver);
}

export function handleDeleteUser(resolver: DeleteUserResolver) {
  return msw.http.delete('/user/:username', resolver);
}

export function handleLoginUser(resolver: LoginUserResolver) {
  return msw.http.get('/user/login', resolver);
}

export function handleLogoutUser(resolver: LogoutUserResolver) {
  return msw.http.get('/user/logout', resolver);
}

export function handleCreateUser(resolver: CreateUserResolver) {
  return msw.http.post('/user', resolver);
}
