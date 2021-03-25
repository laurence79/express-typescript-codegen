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

export type UpdatePetWithFormRequestFormData = {
  name?: string;
  status?: string;
};

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
