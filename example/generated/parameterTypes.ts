import { ParamsDictionary } from 'express-serve-static-core';

export type UploadFileParams = { petId: string };

export type AddPetParams = ParamsDictionary;

export type UpdatePetParams = ParamsDictionary;

export type FindPetsByStatusParams = ParamsDictionary;

export type FindPetsByTagsParams = ParamsDictionary;

export type GetPetByIdParams = { petId: string };

export type UpdatePetWithFormParams = { petId: string };

export type DeletePetParams = { petId: string };

export type PlaceOrderParams = ParamsDictionary;

export type GetOrderByIdParams = { orderId: string };

export type DeleteOrderParams = { orderId: string };

export type GetInventoryParams = ParamsDictionary;

export type CreateUsersWithArrayInputParams = ParamsDictionary;

export type CreateUsersWithListInputParams = ParamsDictionary;

export type GetUserByNameParams = { username: string };

export type UpdateUserParams = { username: string };

export type DeleteUserParams = { username: string };

export type LoginUserParams = ParamsDictionary;

export type LogoutUserParams = ParamsDictionary;

export type CreateUserParams = ParamsDictionary;
