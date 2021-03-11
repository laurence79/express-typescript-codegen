import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { RequestHandler } from './RequestHandler';

export type AsyncRequestHandler<
  P = ParamsDictionary,
  ResBody = unknown,
  ReqBody = unknown,
  ReqQuery = ParsedQs,
  Locals extends Record<string, unknown> = Record<string, unknown>,
  StatusCode extends number = number
> = (
  ...args: Parameters<
    RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals, StatusCode>
  >
) => Promise<void> | void;

export function asyncRequestHandler<
  P = ParamsDictionary,
  ResBody = unknown,
  ReqBody = unknown,
  ReqQuery = ParsedQs
>(
  handler: AsyncRequestHandler<P, ResBody, ReqBody, ReqQuery>
): RequestHandler<P, ResBody, ReqBody, ReqQuery> {
  return (req, res, next) => {
    const result = handler(req, res, next);
    if (result instanceof Promise) {
      result.catch(next);
    }
  };
}
