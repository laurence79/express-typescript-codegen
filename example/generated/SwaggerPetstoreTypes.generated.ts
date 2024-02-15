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

export type AddPetRequest = {
  body: { readonly body: Pet };
  path: {};
  query: {};
  header: {};
};

export type AddPetResponse = { status: 405; body: unknown };

export type UpdatePetRequest = {
  body: { readonly body: Pet };
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
  query: { readonly status: string };
  header: {};
};

export type FindPetsByStatusResponse =
  | { status: 200; body: ReadonlyArray<Pet> }
  | { status: 400; body: unknown };

export type FindPetsByTagsRequest = {
  body: {};
  path: {};
  query: { readonly tags: string };
  header: {};
};

export type FindPetsByTagsResponse =
  | { status: 200; body: ReadonlyArray<Pet> }
  | { status: 400; body: unknown };

export type GetPetByIdRequest = {
  body: {};
  path: { readonly petId: string };
  query: {};
  header: {};
};

export type GetPetByIdResponse =
  | { status: 200; body: Pet }
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type UpdatePetWithFormRequest = {
  body: {};
  path: { readonly petId: string };
  query: {};
  header: {};
};

export type UpdatePetWithFormResponse = { status: 405; body: unknown };

export type DeletePetRequest = {
  body: {};
  path: { readonly petId: string };
  query: {};
  header: { readonly api_key?: string };
};

export type DeletePetResponse =
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type Order = {
  readonly id?: number;
  readonly petId?: number;
  readonly quantity?: number;
  readonly shipDate?: string;
  readonly status?: 'placed' | 'approved' | 'delivered';
  readonly complete?: boolean;
};

export type PlaceOrderRequest = {
  body: { readonly body: Order };
  path: {};
  query: {};
  header: {};
};

export type PlaceOrderResponse =
  | { status: 200; body: Order }
  | { status: 400; body: unknown };

export type GetOrderByIdRequest = {
  body: {};
  path: { readonly orderId: string };
  query: {};
  header: {};
};

export type GetOrderByIdResponse =
  | { status: 200; body: Order }
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type DeleteOrderRequest = {
  body: {};
  path: { readonly orderId: string };
  query: {};
  header: {};
};

export type DeleteOrderResponse =
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type GetInventoryRequest = { body: {}; path: {}; query: {}; header: {} };

export type GetInventoryResponse = { status: 200; body: unknown };

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

export type CreateUsersWithArrayInputRequest = {
  body: { readonly body: ReadonlyArray<User> };
  path: {};
  query: {};
  header: {};
};

export type CreateUsersWithArrayInputResponse = {
  status: number;
  body: unknown;
};

export type CreateUsersWithListInputRequest = {
  body: { readonly body: ReadonlyArray<User> };
  path: {};
  query: {};
  header: {};
};

export type CreateUsersWithListInputResponse = {
  status: number;
  body: unknown;
};

export type GetUserByNameRequest = {
  body: {};
  path: { readonly username: string };
  query: {};
  header: {};
};

export type GetUserByNameResponse =
  | { status: 200; body: User }
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type UpdateUserRequest = {
  body: { readonly body: User };
  path: { readonly username: string };
  query: {};
  header: {};
};

export type UpdateUserResponse =
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type DeleteUserRequest = {
  body: {};
  path: { readonly username: string };
  query: {};
  header: {};
};

export type DeleteUserResponse =
  | { status: 400; body: unknown }
  | { status: 404; body: unknown };

export type LoginUserRequest = {
  body: {};
  path: {};
  query: { readonly username: string; readonly password: string };
  header: {};
};

export type LoginUserResponse =
  | { status: 200; body: string }
  | { status: 400; body: unknown };

export type LogoutUserRequest = { body: {}; path: {}; query: {}; header: {} };

export type LogoutUserResponse = { status: number; body: unknown };

export type CreateUserRequest = {
  body: { readonly body: User };
  path: {};
  query: {};
  header: {};
};

export type CreateUserResponse = { status: number; body: unknown };
