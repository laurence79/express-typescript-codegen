import { ParsedQs } from 'qs';

export type UploadFileQuery = ParsedQs;

export type AddPetQuery = ParsedQs;

export type UpdatePetQuery = ParsedQs;

export type FindPetsByStatusQuery = { status?: string };

export type FindPetsByTagsQuery = { tags?: string };

export type GetPetByIdQuery = ParsedQs;

export type UpdatePetWithFormQuery = ParsedQs;

export type DeletePetQuery = ParsedQs;

export type PlaceOrderQuery = ParsedQs;

export type GetOrderByIdQuery = ParsedQs;

export type DeleteOrderQuery = ParsedQs;

export type GetInventoryQuery = ParsedQs;

export type CreateUsersWithArrayInputQuery = ParsedQs;

export type CreateUsersWithListInputQuery = ParsedQs;

export type GetUserByNameQuery = ParsedQs;

export type UpdateUserQuery = ParsedQs;

export type DeleteUserQuery = ParsedQs;

export type LoginUserQuery = { username?: string; password?: string };

export type LogoutUserQuery = ParsedQs;

export type CreateUserQuery = ParsedQs;
