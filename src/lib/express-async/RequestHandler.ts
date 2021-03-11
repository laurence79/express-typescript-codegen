import {
  ParamsDictionary,
  Request,
  Response,
  NextFunction
} from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export interface RequestHandler<
  P = ParamsDictionary,
  ResBody = unknown,
  ReqBody = unknown,
  ReqQuery = ParsedQs,
  Locals extends Record<string, unknown> = Record<string, unknown>,
  StatusCode extends number = number
> {
  (
    req: Request<P, ResBody, ReqBody, ReqQuery, Locals>,
    res: Response<ResBody, Locals, StatusCode>,
    next: NextFunction
  ): void;
}
