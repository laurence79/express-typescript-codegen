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

export type AddPetRequest = {
  body: { body: Pet };
  path: {};
  query: {};
  header: {};
};

export type AddPetResponse = { status: 405; body: unknown };

export type UpdatePetRequest = {
  body: { body: Pet };
  path: {};
  query: {};
  header: {};
};

export type UpdatePetResponse =
  | { status: 400; body: unknown }
  | { status: 404; body: unknown }
  | { status: 405; body: unknown };

export type FindPetsByStatusRequest = {
  body: {};
  path: {};
  query: { status: string };
  header: {};
};

export type FindPetsByStatusResponse =
  | { status: 200; body: Array<Pet> }
  | { status: 400; body: unknown };

export type FindPetsByTagsRequest = {
  body: {};
  path: {};
  query: { tags: string };
  header: {};
};

export type FindPetsByTagsResponse =
  | { status: 200; body: Array<Pet> }
  | { status: 400; body: unknown };

export type GetPetByIdRequest = {
  body: {};
  path: { petId: string };
  query: {};
  header: {};
};

export type GetPetByIdResponse =
  | { status: 200; body: Pet }
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type UpdatePetWithFormRequest = {
  body: {};
  path: { petId: string };
  query: {};
  header: {};
};

export type UpdatePetWithFormResponse = { status: 405; body: unknown };

export type DeletePetRequest = {
  body: {};
  path: { petId: string };
  query: {};
  header: { apiKey?: string };
};

export type DeletePetResponse =
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type Order = {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  status?: 'placed' | 'approved' | 'delivered';
  complete?: boolean;
};

export type PlaceOrderRequest = {
  body: { body: Order };
  path: {};
  query: {};
  header: {};
};

export type PlaceOrderResponse =
  | { status: 200; body: Order }
  | { status: 400; body: unknown };

export type GetOrderByIdRequest = {
  body: {};
  path: { orderId: string };
  query: {};
  header: {};
};

export type GetOrderByIdResponse =
  | { status: 200; body: Order }
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type DeleteOrderRequest = {
  body: {};
  path: { orderId: string };
  query: {};
  header: {};
};

export type DeleteOrderResponse =
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type GetInventoryRequest = { body: {}; path: {}; query: {}; header: {} };

export type GetInventoryResponse = { status: 200; body: unknown };

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

export type CreateUsersWithArrayInputRequest = {
  body: { body: Array<User> };
  path: {};
  query: {};
  header: {};
};

export type CreateUsersWithArrayInputResponse = {
  status: default;
  body: unknown;
};

export type CreateUsersWithListInputRequest = {
  body: { body: Array<User> };
  path: {};
  query: {};
  header: {};
};

export type CreateUsersWithListInputResponse = {
  status: default;
  body: unknown;
};

export type GetUserByNameRequest = {
  body: {};
  path: { username: string };
  query: {};
  header: {};
};

export type GetUserByNameResponse =
  | { status: 200; body: User }
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type UpdateUserRequest = {
  body: { body: User };
  path: { username: string };
  query: {};
  header: {};
};

export type UpdateUserResponse =
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type DeleteUserRequest = {
  body: {};
  path: { username: string };
  query: {};
  header: {};
};

export type DeleteUserResponse =
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type LoginUserRequest = {
  body: {};
  path: {};
  query: { username: string; password: string };
  header: {};
};

export type LoginUserResponse =
  | { status: 200; body: string }
  | { status: 400; body: unknown };

export type LogoutUserRequest = { body: {}; path: {}; query: {}; header: {} };

export type LogoutUserResponse = { status: default; body: unknown };

export type CreateUserRequest = {
  body: { body: User };
  path: {};
  query: {};
  header: {};
};

export type CreateUserResponse = { status: default; body: unknown };
