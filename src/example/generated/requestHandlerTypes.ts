import * as Schema from './schemaTypes';
import * as Query from './queryTypes';
import * as Param from './parameterTypes';
import { RequestHandler } from '../../lib/express-async';

export type GetHealthRequestHandler = RequestHandler<
  Param.GetHealthParams,
  Schema.GetHealth200ResponseBody,
  unknown,
  Query.GetHealthQuery,
  Record<string, any>,
  200
>;

export type PostAnonymousRequestHandler = RequestHandler<
  Param.PostAnonymousParams,
  Schema.PostAnonymous200ResponseBody | Schema.PostAnonymous400ResponseBody,
  Schema.PostAnonymousRequestBody,
  Query.PostAnonymousQuery,
  Record<string, any>,
  200 | 400
>;

export type PostCreateRequestHandler = RequestHandler<
  Param.PostCreateParams,
  Schema.PostCreate200ResponseBody | Schema.PostCreate400ResponseBody,
  Schema.PostCreateRequestBody,
  Query.PostCreateQuery,
  Record<string, any>,
  200 | 400
>;

export type PostLoginRequestHandler = RequestHandler<
  Param.PostLoginParams,
  Schema.PostLogin200ResponseBody | Schema.PostLogin400ResponseBody,
  Schema.PostLoginRequestBody,
  Query.PostLoginQuery,
  Record<string, any>,
  200 | 400
>;

export type PostVerifyRequestHandler = RequestHandler<
  Param.PostVerifyParams,
  Schema.PostVerify200ResponseBody,
  unknown,
  Query.PostVerifyQuery,
  Record<string, any>,
  200 | 204 | 401
>;

export type GetGrantsRequestHandler = RequestHandler<
  Param.GetGrantsParams,
  Schema.GetGrants200ResponseBody | Schema.GetGrants400ResponseBody,
  unknown,
  Query.GetGrantsQuery,
  Record<string, any>,
  200 | 400 | 401 | 403
>;

export type PostGrantsRequestHandler = RequestHandler<
  Param.PostGrantsParams,
  Schema.PostGrants200ResponseBody | Schema.PostGrants400ResponseBody,
  Schema.PostGrantsRequestBody,
  Query.PostGrantsQuery,
  Record<string, any>,
  200 | 400 | 401 | 403
>;

export type GetGrantByIdRequestHandler = RequestHandler<
  Param.GetGrantByIdParams,
  Schema.GetGrantById200ResponseBody | Schema.GetGrantById400ResponseBody,
  unknown,
  Query.GetGrantByIdQuery,
  Record<string, any>,
  200 | 400 | 401 | 403 | 404
>;

export type DeleteGrantByIdRequestHandler = RequestHandler<
  Param.DeleteGrantByIdParams,
  Schema.DeleteGrantById400ResponseBody,
  unknown,
  Query.DeleteGrantByIdQuery,
  Record<string, any>,
  200 | 400 | 401 | 403 | 404
>;

export type RequestHandlers = {
  getHealth: GetHealthRequestHandler;
  postAnonymous: PostAnonymousRequestHandler;
  postCreate: PostCreateRequestHandler;
  postLogin: PostLoginRequestHandler;
  postVerify: PostVerifyRequestHandler;
  getGrants: GetGrantsRequestHandler;
  postGrants: PostGrantsRequestHandler;
  getGrantById: GetGrantByIdRequestHandler;
  deleteGrantById: DeleteGrantByIdRequestHandler;
};
