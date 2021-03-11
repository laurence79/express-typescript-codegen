import { ParsedQs } from 'qs';

export type GetHealthQuery = ParsedQs;

export type PostAnonymousQuery = ParsedQs;

export type PostCreateQuery = ParsedQs;

export type PostLoginQuery = ParsedQs;

export type PostVerifyQuery = ParsedQs;

export type GetGrantsQuery = {
  venueId?: string;
  userId?: string;
  limit?: string;
  fromCreateDateTime?: string;
};

export type PostGrantsQuery = ParsedQs;

export type GetGrantByIdQuery = ParsedQs;

export type DeleteGrantByIdQuery = ParsedQs;
