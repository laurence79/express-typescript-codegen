import type {
  Request,
  Response,
  Express,
  NextFunction,
  ParamsDictionary
} from 'express-serve-static-core';
import { Router } from 'express';
import { ParsedQs } from 'qs';

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

export type AddPetRequestBody = Pet;

export type UpdatePetRequestBody = Pet;

export type FindPetsByStatus200ResponseBody = ReadonlyArray<Pet>;

export type FindPetsByStatusRequestQuery = { readonly status: unknown };

export type FindPetsByTags200ResponseBody = ReadonlyArray<Pet>;

export type FindPetsByTagsRequestQuery = { readonly tags: unknown };

export type GetPetById200ResponseBody = Pet;

export type GetPetByIdRequestPath = { readonly petId: number };

export type UpdatePetWithFormRequestPath = { readonly petId: number };

export type DeletePetRequestPath = { readonly petId: number };

export type Order = {
  readonly id?: number;
  readonly petId?: number;
  readonly quantity?: number;
  readonly shipDate?: string;
  readonly status?: 'placed' | 'approved' | 'delivered';
  readonly complete?: boolean;
};

export type PlaceOrder200ResponseBody = Order;

export type PlaceOrderRequestBody = Order;

export type GetOrderById200ResponseBody = Order;

export type GetOrderByIdRequestPath = { readonly orderId: number };

export type DeleteOrderRequestPath = { readonly orderId: number };

export type GetInventory200ResponseBody = unknown;

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

export type CreateUsersWithArrayInputRequestBody = ReadonlyArray<User>;

export type CreateUsersWithListInputRequestBody = ReadonlyArray<User>;

export type GetUserByName200ResponseBody = User;

export type GetUserByNameRequestPath = { readonly username: string };

export type UpdateUserRequestBody = User;

export type UpdateUserRequestPath = { readonly username: string };

export type DeleteUserRequestPath = { readonly username: string };

export type LoginUser200ResponseBody = string;

export type LoginUserRequestQuery = {
  readonly username: string;
  readonly password: string;
};

export type CreateUserRequestBody = User;

export type AddPetHandler = (
  req: Request<
    ParamsDictionary,
    unknown,
    AddPetRequestBody,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<unknown, Record<string, any>, 405>,
  next: NextFunction
) => Promise<void> | void;

export type UpdatePetHandler = (
  req: Request<
    ParamsDictionary,
    unknown,
    UpdatePetRequestBody,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<unknown, Record<string, any>, 400 | 404 | 405>,
  next: NextFunction
) => Promise<void> | void;

export type FindPetsByStatusHandler = (
  req: Request<
    ParamsDictionary,
    FindPetsByStatus200ResponseBody,
    unknown,
    FindPetsByStatusRequestQuery,
    Record<string, any>
  >,
  res: Response<
    FindPetsByStatus200ResponseBody,
    Record<string, any>,
    200 | 400
  >,
  next: NextFunction
) => Promise<void> | void;

export type FindPetsByTagsHandler = (
  req: Request<
    ParamsDictionary,
    FindPetsByTags200ResponseBody,
    unknown,
    FindPetsByTagsRequestQuery,
    Record<string, any>
  >,
  res: Response<FindPetsByTags200ResponseBody, Record<string, any>, 200 | 400>,
  next: NextFunction
) => Promise<void> | void;

export type GetPetByIdHandler = (
  req: Request<
    GetPetByIdRequestPath,
    GetPetById200ResponseBody,
    unknown,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<
    GetPetById200ResponseBody,
    Record<string, any>,
    200 | 400 | 404
  >,
  next: NextFunction
) => Promise<void> | void;

export type UpdatePetWithFormHandler = (
  req: Request<
    UpdatePetWithFormRequestPath,
    unknown,
    unknown,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<unknown, Record<string, any>, 405>,
  next: NextFunction
) => Promise<void> | void;

export type DeletePetHandler = (
  req: Request<
    DeletePetRequestPath,
    unknown,
    unknown,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<unknown, Record<string, any>, 400 | 404>,
  next: NextFunction
) => Promise<void> | void;

export type PlaceOrderHandler = (
  req: Request<
    ParamsDictionary,
    PlaceOrder200ResponseBody,
    PlaceOrderRequestBody,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<PlaceOrder200ResponseBody, Record<string, any>, 200 | 400>,
  next: NextFunction
) => Promise<void> | void;

export type GetOrderByIdHandler = (
  req: Request<
    GetOrderByIdRequestPath,
    GetOrderById200ResponseBody,
    unknown,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<
    GetOrderById200ResponseBody,
    Record<string, any>,
    200 | 400 | 404
  >,
  next: NextFunction
) => Promise<void> | void;

export type DeleteOrderHandler = (
  req: Request<
    DeleteOrderRequestPath,
    unknown,
    unknown,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<unknown, Record<string, any>, 400 | 404>,
  next: NextFunction
) => Promise<void> | void;

export type GetInventoryHandler = (
  req: Request<
    ParamsDictionary,
    GetInventory200ResponseBody,
    unknown,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<GetInventory200ResponseBody, Record<string, any>, 200>,
  next: NextFunction
) => Promise<void> | void;

export type CreateUsersWithArrayInputHandler = (
  req: Request<
    ParamsDictionary,
    unknown,
    CreateUsersWithArrayInputRequestBody,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<unknown, Record<string, any>, number>,
  next: NextFunction
) => Promise<void> | void;

export type CreateUsersWithListInputHandler = (
  req: Request<
    ParamsDictionary,
    unknown,
    CreateUsersWithListInputRequestBody,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<unknown, Record<string, any>, number>,
  next: NextFunction
) => Promise<void> | void;

export type GetUserByNameHandler = (
  req: Request<
    GetUserByNameRequestPath,
    GetUserByName200ResponseBody,
    unknown,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<
    GetUserByName200ResponseBody,
    Record<string, any>,
    200 | 400 | 404
  >,
  next: NextFunction
) => Promise<void> | void;

export type UpdateUserHandler = (
  req: Request<
    UpdateUserRequestPath,
    unknown,
    UpdateUserRequestBody,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<unknown, Record<string, any>, 400 | 404>,
  next: NextFunction
) => Promise<void> | void;

export type DeleteUserHandler = (
  req: Request<
    DeleteUserRequestPath,
    unknown,
    unknown,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<unknown, Record<string, any>, 400 | 404>,
  next: NextFunction
) => Promise<void> | void;

export type LoginUserHandler = (
  req: Request<
    ParamsDictionary,
    LoginUser200ResponseBody,
    unknown,
    LoginUserRequestQuery,
    Record<string, any>
  >,
  res: Response<LoginUser200ResponseBody, Record<string, any>, 200 | 400>,
  next: NextFunction
) => Promise<void> | void;

export type LogoutUserHandler = (
  req: Request<
    ParamsDictionary,
    unknown,
    unknown,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<unknown, Record<string, any>, number>,
  next: NextFunction
) => Promise<void> | void;

export type CreateUserHandler = (
  req: Request<
    ParamsDictionary,
    unknown,
    CreateUserRequestBody,
    ParsedQs,
    Record<string, any>
  >,
  res: Response<unknown, Record<string, any>, number>,
  next: NextFunction
) => Promise<void> | void;

export type Handlers = {
  addPet: AddPetHandler;
  updatePet: UpdatePetHandler;
  findPetsByStatus: FindPetsByStatusHandler;
  findPetsByTags: FindPetsByTagsHandler;
  getPetById: GetPetByIdHandler;
  updatePetWithForm: UpdatePetWithFormHandler;
  deletePet: DeletePetHandler;
  placeOrder: PlaceOrderHandler;
  getOrderById: GetOrderByIdHandler;
  deleteOrder: DeleteOrderHandler;
  getInventory: GetInventoryHandler;
  createUsersWithArrayInput: CreateUsersWithArrayInputHandler;
  createUsersWithListInput: CreateUsersWithListInputHandler;
  getUserByName: GetUserByNameHandler;
  updateUser: UpdateUserHandler;
  deleteUser: DeleteUserHandler;
  loginUser: LoginUserHandler;
  logoutUser: LogoutUserHandler;
  createUser: CreateUserHandler;
};

export const addHandlers = (app: Express, handlers: Partial<Handlers>) => {
  const router = Router();

  router.post('/pet', async (req, res, next) => {
    const handler = handlers['addPet'];

    if (!handler) {
      return next(new Error('/pet not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.put('/pet', async (req, res, next) => {
    const handler = handlers['updatePet'];

    if (!handler) {
      return next(new Error('/pet not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.get('/pet/findByStatus', async (req, res, next) => {
    const handler = handlers['findPetsByStatus'];

    if (!handler) {
      return next(new Error('/pet/findByStatus not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.get('/pet/findByTags', async (req, res, next) => {
    const handler = handlers['findPetsByTags'];

    if (!handler) {
      return next(new Error('/pet/findByTags not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.get('/pet/:petId', async (req, res, next) => {
    const handler = handlers['getPetById'];

    if (!handler) {
      return next(new Error('/pet/:petId not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.post('/pet/:petId', async (req, res, next) => {
    const handler = handlers['updatePetWithForm'];

    if (!handler) {
      return next(new Error('/pet/:petId not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.delete('/pet/:petId', async (req, res, next) => {
    const handler = handlers['deletePet'];

    if (!handler) {
      return next(new Error('/pet/:petId not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.post('/store/order', async (req, res, next) => {
    const handler = handlers['placeOrder'];

    if (!handler) {
      return next(new Error('/store/order not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.get('/store/order/:orderId', async (req, res, next) => {
    const handler = handlers['getOrderById'];

    if (!handler) {
      return next(new Error('/store/order/:orderId not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.delete('/store/order/:orderId', async (req, res, next) => {
    const handler = handlers['deleteOrder'];

    if (!handler) {
      return next(new Error('/store/order/:orderId not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.get('/store/inventory', async (req, res, next) => {
    const handler = handlers['getInventory'];

    if (!handler) {
      return next(new Error('/store/inventory not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.post('/user/createWithArray', async (req, res, next) => {
    const handler = handlers['createUsersWithArrayInput'];

    if (!handler) {
      return next(new Error('/user/createWithArray not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.post('/user/createWithList', async (req, res, next) => {
    const handler = handlers['createUsersWithListInput'];

    if (!handler) {
      return next(new Error('/user/createWithList not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.get('/user/:username', async (req, res, next) => {
    const handler = handlers['getUserByName'];

    if (!handler) {
      return next(new Error('/user/:username not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.put('/user/:username', async (req, res, next) => {
    const handler = handlers['updateUser'];

    if (!handler) {
      return next(new Error('/user/:username not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.delete('/user/:username', async (req, res, next) => {
    const handler = handlers['deleteUser'];

    if (!handler) {
      return next(new Error('/user/:username not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.get('/user/login', async (req, res, next) => {
    const handler = handlers['loginUser'];

    if (!handler) {
      return next(new Error('/user/login not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.get('/user/logout', async (req, res, next) => {
    const handler = handlers['logoutUser'];

    if (!handler) {
      return next(new Error('/user/logout not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  router.post('/user', async (req, res, next) => {
    const handler = handlers['createUser'];

    if (!handler) {
      return next(new Error('/user not handled'));
    }

    try {
      await handler(req as any, res as any, next);
    } catch (e: unknown) {
      next(e);
    }
  });

  app.use(router);
};
