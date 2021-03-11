import { ParamsDictionary } from 'express-serve-static-core';

export type GetHealthParams = ParamsDictionary;

export type PostAnonymousParams = ParamsDictionary;

export type PostCreateParams = ParamsDictionary;

export type PostLoginParams = ParamsDictionary;

export type PostVerifyParams = ParamsDictionary;

export type GetGrantsParams = ParamsDictionary;

export type PostGrantsParams = ParamsDictionary;

export type GetGrantByIdParams = { grantId: string };

export type DeleteGrantByIdParams = { grantId: string };
