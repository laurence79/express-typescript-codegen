import * as Schema from './schemaTypes';

export type ResponseWithData<TStatus, TData> = {
  status: TStatus;
  body: TData;
};

export type AddPetResponse = ResponseWithData<405, unknown>;

export type UpdatePetResponse =
  | ResponseWithData<400, unknown>
  | ResponseWithData<404, unknown>
  | ResponseWithData<405, unknown>;

export type FindPetsByStatusResponse =
  | ResponseWithData<200, Schema.FindPetsByStatus200ResponseBody>
  | ResponseWithData<400, unknown>;

export type FindPetsByTagsResponse =
  | ResponseWithData<200, Schema.FindPetsByTags200ResponseBody>
  | ResponseWithData<400, unknown>;

export type GetPetByIdResponse =
  | ResponseWithData<200, Schema.GetPetById200ResponseBody>
  | ResponseWithData<400, unknown>
  | ResponseWithData<404, unknown>;

export type UpdatePetWithFormResponse = ResponseWithData<405, unknown>;

export type DeletePetResponse =
  | ResponseWithData<400, unknown>
  | ResponseWithData<404, unknown>;

export type PlaceOrderResponse =
  | ResponseWithData<200, Schema.PlaceOrder200ResponseBody>
  | ResponseWithData<400, unknown>;

export type GetOrderByIdResponse =
  | ResponseWithData<200, Schema.GetOrderById200ResponseBody>
  | ResponseWithData<400, unknown>
  | ResponseWithData<404, unknown>;

export type DeleteOrderResponse =
  | ResponseWithData<400, unknown>
  | ResponseWithData<404, unknown>;

export type GetInventoryResponse = ResponseWithData<
  200,
  Schema.GetInventory200ResponseBody
>;

export type CreateUsersWithArrayInputResponse = ResponseWithData<
  number,
  unknown
>;

export type CreateUsersWithListInputResponse = ResponseWithData<
  number,
  unknown
>;

export type GetUserByNameResponse =
  | ResponseWithData<200, Schema.GetUserByName200ResponseBody>
  | ResponseWithData<400, unknown>
  | ResponseWithData<404, unknown>;

export type UpdateUserResponse =
  | ResponseWithData<400, unknown>
  | ResponseWithData<404, unknown>;

export type DeleteUserResponse =
  | ResponseWithData<400, unknown>
  | ResponseWithData<404, unknown>;

export type LoginUserResponse =
  | ResponseWithData<200, Schema.LoginUser200ResponseBody>
  | ResponseWithData<400, unknown>;

export type LogoutUserResponse = ResponseWithData<number, unknown>;

export type CreateUserResponse = ResponseWithData<number, unknown>;
