import Ajv from 'ajv';
import { AnyValidateFunction } from 'ajv/dist/core';
import {
  Request,
  Response,
  Express,
  NextFunction,
  ParamsDictionary,
  RequestHandler
} from 'express-serve-static-core';
import { Router } from 'express';
import { asyncRequestHandler } from '@laurence79/express-async-request-handler';
import { ParsedQs } from 'qs';
import { injectable } from 'tsyringe';

export type GetHealth200ResponseBody = { ok?: boolean };

export type GetClientsRequestHeader = { authorization?: string };

export type GetClients200ResponseBody = Array<ClientResponsePayload>;

export type GetClients400ResponseBody = RequestValidationFailedBadRequestResponsePayload;

export type GetClientByIdRequestPath = { clientId: ClientId };

export type GetClientById200ResponseBody = ClientResponsePayload;

export type GetClientById400ResponseBody = RequestValidationFailedBadRequestResponsePayload;

export type GetClientById404ResponseBody = {
  reason: 'DOES_NOT_EXIST' | 'DELETED';
};

export type PutRegisterCommandRequestBody = RegisterCommandRequestPayload;

export type PutRegisterCommandRequestHeader = { authorization?: string };

export type PutRegisterCommandRequestPath = { commandId: CommandId };

export type PutRegisterCommand201ResponseBody = RegisterCommandResponsePayload;

export type PutRegisterCommand400ResponseBody = RequestValidationFailedBadRequestResponsePayload;

export type PutRenameCommandRequestBody = RenameCommandRequestPayload;

export type PutRenameCommandRequestHeader = { authorization?: string };

export type PutRenameCommandRequestPath = { commandId: CommandId };

export type PutRenameCommand201ResponseBody = RenameCommandResponsePayload;

export type PutRenameCommand400ResponseBody = RequestValidationFailedBadRequestResponsePayload;

export type PutArchiveCommandRequestBody = ArchiveCommandRequestPayload;

export type PutArchiveCommandRequestHeader = { authorization?: string };

export type PutArchiveCommandRequestPath = { commandId: CommandId };

export type PutArchiveCommand201ResponseBody = ArchiveCommandResponsePayload;

export type PutArchiveCommand400ResponseBody = RequestValidationFailedBadRequestResponsePayload;

export type GetEventsRequestHeader = { authorization?: string };

export type GetEventsRequestQuery = {
  name?: EventName;
  state?: EventState;
  since?: Timestamp;
};

export type GetEvents200ResponseBody = Array<EventResponsePayload>;

export type GetEvents400ResponseBody = RequestValidationFailedBadRequestResponsePayload;

export type GetEventRequestHeader = { authorization?: string };

export type GetEventRequestPath = { eventId: EventId };

export type GetEvent200ResponseBody = EventResponsePayload;

export type GetEvent400ResponseBody = RequestValidationFailedBadRequestResponsePayload;

export type GetEvent404ResponseBody = { reason: 'DOES_NOT_EXIST' | 'DELETED' };

export type UserId = string;

export type ServiceName = string;

export type Actor =
  | { type?: 'USER'; userId?: UserId }
  | { type?: 'SERVICE'; serviceName?: ServiceName };

export type ClientId = string;

export type ClientName = string;

export type CommandId = string;

export type EventId = string;

export type Timestamp = string;

export type ClientResponsePayload = { id: ClientId; name: ClientName };

export type RequestValidationFailedBadRequestResponsePayload = {
  type: 'REQUEST_VALIDATION_FAILED';
  fields: Array<{ path: string; message: string }>;
};

export type CommandResponsePayload = {
  id: CommandId;
  at: Timestamp;
  by: Actor;
};

export type RegisterCommandRequestPayload = {
  clientId: ClientId;
  name: ClientName;
};

export type RegisterCommandResponsePayload = RegisterCommandRequestPayload &
  CommandResponsePayload;

export type RenameCommandRequestPayload = {
  clientId: ClientId;
  newName: ClientName;
};

export type RenameCommandResponsePayload = RenameCommandRequestPayload &
  CommandResponsePayload;

export type ArchiveCommandRequestPayload = { clientId: ClientId };

export type ArchiveCommandResponsePayload = ArchiveCommandRequestPayload &
  CommandResponsePayload;

export type EventResponsePayload = {
  id: EventId;
  at: Timestamp;
  by: Actor;
  name: 'CLIENT_REGISTERED';
  data: string;
  state:
    | { state: 'READY_TO_SEND' }
    | { state: 'SENDING' }
    | { state: 'SENT'; messageId: string; at: Timestamp }
    | { state: 'ERROR'; error: string; at: Timestamp };
};

export type EventName = 'CLIENT_REGISTERED';

export type EventState = 'SENDING' | 'SENT' | 'ERROR';

export type GetClients401ResponseBody = Buffer;

export type GetClients403ResponseBody = Buffer;

export type PutRegisterCommand401ResponseBody = Buffer;

export type PutRegisterCommand403ResponseBody = Buffer;

export type PutRegisterCommand409ResponseBody = Buffer;

export type PutRenameCommand401ResponseBody = Buffer;

export type PutRenameCommand403ResponseBody = Buffer;

export type PutRenameCommand409ResponseBody = Buffer;

export type PutArchiveCommand401ResponseBody = Buffer;

export type PutArchiveCommand403ResponseBody = Buffer;

export type PutArchiveCommand409ResponseBody = Buffer;

export type GetEvents401ResponseBody = Buffer;

export type GetEvents403ResponseBody = Buffer;

export type GetEvent401ResponseBody = Buffer;

export type GetEvent403ResponseBody = Buffer;

export interface RequestValidators {
  readonly headers?: AnyValidateFunction;
  readonly params?: AnyValidateFunction;
  readonly body?: AnyValidateFunction;
  readonly query?: AnyValidateFunction;
}

@injectable()
export class RequestValidationSchema {
  private readonly ajv = new Ajv({ strict: false, coerceTypes: true });

  constructor() {
    this.ajv.addSchema({
      $schema: 'http://json-schema.org/draft-07/schema#',
      definitions: {
        GetHealth200ResponseBody: {
          type: 'object',
          properties: { ok: { type: 'boolean' } }
        },
        GetClientsRequestHeader: {
          type: 'object',
          properties: { authorization: { type: 'string' } },
          required: []
        },
        GetClients200ResponseBody: {
          type: 'array',
          items: { $ref: '#/definitions/ClientResponsePayload' }
        },
        GetClients400ResponseBody: {
          $ref: '#/definitions/RequestValidationFailedBadRequestResponsePayload'
        },
        GetClientByIdRequestPath: {
          type: 'object',
          properties: { clientId: { $ref: '#/definitions/ClientId' } },
          required: ['clientId']
        },
        GetClientById200ResponseBody: {
          $ref: '#/definitions/ClientResponsePayload'
        },
        GetClientById400ResponseBody: {
          $ref: '#/definitions/RequestValidationFailedBadRequestResponsePayload'
        },
        GetClientById404ResponseBody: {
          type: 'object',
          properties: {
            reason: { type: 'string', enum: ['DOES_NOT_EXIST', 'DELETED'] }
          },
          required: ['reason']
        },
        PutRegisterCommandRequestBody: {
          $ref: '#/definitions/RegisterCommandRequestPayload'
        },
        PutRegisterCommandRequestHeader: {
          type: 'object',
          properties: { authorization: { type: 'string' } },
          required: []
        },
        PutRegisterCommandRequestPath: {
          type: 'object',
          properties: { commandId: { $ref: '#/definitions/CommandId' } },
          required: ['commandId']
        },
        PutRegisterCommand201ResponseBody: {
          $ref: '#/definitions/RegisterCommandResponsePayload'
        },
        PutRegisterCommand400ResponseBody: {
          $ref: '#/definitions/RequestValidationFailedBadRequestResponsePayload'
        },
        PutRenameCommandRequestBody: {
          $ref: '#/definitions/RenameCommandRequestPayload'
        },
        PutRenameCommandRequestHeader: {
          type: 'object',
          properties: { authorization: { type: 'string' } },
          required: []
        },
        PutRenameCommandRequestPath: {
          type: 'object',
          properties: { commandId: { $ref: '#/definitions/CommandId' } },
          required: ['commandId']
        },
        PutRenameCommand201ResponseBody: {
          $ref: '#/definitions/RenameCommandResponsePayload'
        },
        PutRenameCommand400ResponseBody: {
          $ref: '#/definitions/RequestValidationFailedBadRequestResponsePayload'
        },
        PutArchiveCommandRequestBody: {
          $ref: '#/definitions/ArchiveCommandRequestPayload'
        },
        PutArchiveCommandRequestHeader: {
          type: 'object',
          properties: { authorization: { type: 'string' } },
          required: []
        },
        PutArchiveCommandRequestPath: {
          type: 'object',
          properties: { commandId: { $ref: '#/definitions/CommandId' } },
          required: ['commandId']
        },
        PutArchiveCommand201ResponseBody: {
          $ref: '#/definitions/ArchiveCommandResponsePayload'
        },
        PutArchiveCommand400ResponseBody: {
          $ref: '#/definitions/RequestValidationFailedBadRequestResponsePayload'
        },
        GetEventsRequestHeader: {
          type: 'object',
          properties: { authorization: { type: 'string' } },
          required: []
        },
        GetEventsRequestQuery: {
          type: 'object',
          properties: {
            name: { $ref: '#/definitions/EventName' },
            state: { $ref: '#/definitions/EventState' },
            since: { $ref: '#/definitions/Timestamp' }
          },
          required: []
        },
        GetEvents200ResponseBody: {
          type: 'array',
          items: { $ref: '#/definitions/EventResponsePayload' }
        },
        GetEvents400ResponseBody: {
          $ref: '#/definitions/RequestValidationFailedBadRequestResponsePayload'
        },
        GetEventRequestHeader: {
          type: 'object',
          properties: { authorization: { type: 'string' } },
          required: []
        },
        GetEventRequestPath: {
          type: 'object',
          properties: { eventId: { $ref: '#/definitions/EventId' } },
          required: ['eventId']
        },
        GetEvent200ResponseBody: { $ref: '#/definitions/EventResponsePayload' },
        GetEvent400ResponseBody: {
          $ref: '#/definitions/RequestValidationFailedBadRequestResponsePayload'
        },
        GetEvent404ResponseBody: {
          type: 'object',
          properties: {
            reason: { type: 'string', enum: ['DOES_NOT_EXIST', 'DELETED'] }
          },
          required: ['reason']
        },
        UserId: {
          type: 'string',
          pattern: '^usr_[0-9a-zA-Z]{22}$',
          example: 'usr_2qY9COoAhfMrsH7mCyh86T'
        },
        ServiceName: {
          type: 'string',
          pattern: '^[0-9a-z_]{1,64}$',
          example: 'identity_service'
        },
        Actor: {
          oneOf: [
            {
              type: 'object',
              properties: {
                type: { type: 'string', enum: ['USER'] },
                userId: { $ref: '#/definitions/UserId' }
              }
            },
            {
              type: 'object',
              properties: {
                type: { type: 'string', enum: ['SERVICE'] },
                serviceName: { $ref: '#/definitions/ServiceName' }
              }
            }
          ]
        },
        ClientId: {
          type: 'string',
          pattern: '^[a-z][a-z0-9_$()+-]{1,250}$',
          example: 'abc123'
        },
        ClientName: {
          type: 'string',
          pattern: '^(\\S{1}|\\S.{0,49}\\S)$',
          example: 'Brickworks'
        },
        CommandId: {
          type: 'string',
          pattern: '^cmd_[0-9a-zA-Z]{22}$',
          example: 'cmd_2qY9COoAhfMrsH7mCyh86T'
        },
        EventId: {
          type: 'string',
          pattern: '^e_[0-9a-zA-Z]{22}$',
          example: 'e_2qY9COoAhfMrsH7mCyh86T'
        },
        Timestamp: {
          type: 'string',
          pattern:
            '^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\\.\\d{3}Z$',
          example: '2022-01-12T09:29:29.123Z'
        },
        ClientResponsePayload: {
          type: 'object',
          properties: {
            id: { $ref: '#/definitions/ClientId' },
            name: { $ref: '#/definitions/ClientName' }
          },
          required: ['id', 'name']
        },
        RequestValidationFailedBadRequestResponsePayload: {
          type: 'object',
          required: ['type', 'fields'],
          properties: {
            type: { type: 'string', enum: ['REQUEST_VALIDATION_FAILED'] },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                required: ['path', 'message'],
                properties: {
                  path: { type: 'string' },
                  message: { type: 'string' }
                }
              }
            }
          }
        },
        CommandResponsePayload: {
          type: 'object',
          properties: {
            id: { $ref: '#/definitions/CommandId' },
            at: { $ref: '#/definitions/Timestamp' },
            by: { $ref: '#/definitions/Actor' }
          },
          required: ['id', 'at', 'by']
        },
        RegisterCommandRequestPayload: {
          type: 'object',
          properties: {
            clientId: { $ref: '#/definitions/ClientId' },
            name: { $ref: '#/definitions/ClientName' }
          },
          required: ['clientId', 'name']
        },
        RegisterCommandResponsePayload: {
          allOf: [
            { $ref: '#/definitions/RegisterCommandRequestPayload' },
            { $ref: '#/definitions/CommandResponsePayload' }
          ]
        },
        RenameCommandRequestPayload: {
          type: 'object',
          properties: {
            clientId: { $ref: '#/definitions/ClientId' },
            newName: { $ref: '#/definitions/ClientName' }
          },
          required: ['clientId', 'newName']
        },
        RenameCommandResponsePayload: {
          allOf: [
            { $ref: '#/definitions/RenameCommandRequestPayload' },
            { $ref: '#/definitions/CommandResponsePayload' }
          ]
        },
        ArchiveCommandRequestPayload: {
          type: 'object',
          properties: { clientId: { $ref: '#/definitions/ClientId' } },
          required: ['clientId']
        },
        ArchiveCommandResponsePayload: {
          allOf: [
            { $ref: '#/definitions/ArchiveCommandRequestPayload' },
            { $ref: '#/definitions/CommandResponsePayload' }
          ]
        },
        EventResponsePayload: {
          type: 'object',
          required: ['id', 'at', 'by', 'name', 'data', 'state'],
          properties: {
            id: { $ref: '#/definitions/EventId' },
            at: { $ref: '#/definitions/Timestamp' },
            by: { $ref: '#/definitions/Actor' },
            name: { type: 'string', enum: ['CLIENT_REGISTERED'] },
            data: { type: 'string' },
            state: {
              oneOf: [
                {
                  type: 'object',
                  properties: {
                    state: { type: 'string', enum: ['READY_TO_SEND'] }
                  },
                  required: ['state']
                },
                {
                  type: 'object',
                  properties: { state: { type: 'string', enum: ['SENDING'] } },
                  required: ['state']
                },
                {
                  type: 'object',
                  properties: {
                    state: { type: 'string', enum: ['SENT'] },
                    messageId: { type: 'string' },
                    at: { $ref: '#/definitions/Timestamp' }
                  },
                  required: ['state', 'messageId', 'at']
                },
                {
                  type: 'object',
                  properties: {
                    state: { type: 'string', enum: ['ERROR'] },
                    error: { type: 'string' },
                    at: { $ref: '#/definitions/Timestamp' }
                  },
                  required: ['state', 'error', 'at']
                }
              ]
            }
          }
        },
        EventName: { type: 'string', enum: ['CLIENT_REGISTERED'] },
        EventState: { type: 'string', enum: ['SENDING', 'SENT', 'ERROR'] }
      }
    });
  }

  public readonly getHealth = (): RequestValidators => ({});

  public readonly getClients = (): RequestValidators => ({
    headers: this.ajv.getSchema('#/definitions/GetClientsRequestHeader')!
  });

  public readonly getClientById = (): RequestValidators => ({
    params: this.ajv.getSchema('#/definitions/GetClientByIdRequestPath')!
  });

  public readonly putRegisterCommand = (): RequestValidators => ({
    headers: this.ajv.getSchema(
      '#/definitions/PutRegisterCommandRequestHeader'
    )!,
    params: this.ajv.getSchema('#/definitions/PutRegisterCommandRequestPath')!,
    body: this.ajv.getSchema('#/definitions/PutRegisterCommandRequestBody')!
  });

  public readonly putRenameCommand = (): RequestValidators => ({
    headers: this.ajv.getSchema('#/definitions/PutRenameCommandRequestHeader')!,
    params: this.ajv.getSchema('#/definitions/PutRenameCommandRequestPath')!,
    body: this.ajv.getSchema('#/definitions/PutRenameCommandRequestBody')!
  });

  public readonly putArchiveCommand = (): RequestValidators => ({
    headers: this.ajv.getSchema(
      '#/definitions/PutArchiveCommandRequestHeader'
    )!,
    params: this.ajv.getSchema('#/definitions/PutArchiveCommandRequestPath')!,
    body: this.ajv.getSchema('#/definitions/PutArchiveCommandRequestBody')!
  });

  public readonly getEvents = (): RequestValidators => ({
    headers: this.ajv.getSchema('#/definitions/GetEventsRequestHeader')!,
    query: this.ajv.getSchema('#/definitions/GetEventsRequestQuery')!
  });

  public readonly getEvent = (): RequestValidators => ({
    headers: this.ajv.getSchema('#/definitions/GetEventRequestHeader')!,
    params: this.ajv.getSchema('#/definitions/GetEventRequestPath')!
  });
}

@injectable()
export class RequestValidationMiddlewareLogger {
  info(message: string, meta: Record<string, unknown>): void {
    console.info(message, meta);
  }
}

@injectable()
export class RequestValidationMiddleware {
  constructor(private readonly logger: RequestValidationMiddlewareLogger) {}

  private static validatePart(
    validator: AnyValidateFunction,
    part: unknown,
    path: string
  ): { path: string; message: string }[] {
    validator(part);
    return (
      validator.errors?.map(e => ({
        path: `${path}${e.dataPath}`,
        message: e.message ?? 'Unknown'
      })) ?? []
    );
  }

  public createMiddleware(validators: RequestValidators): RequestHandler {
    return (req, res, next) => {
      const { headers, params, body, query } = validators;

      const errors = [
        headers &&
          RequestValidationMiddleware.validatePart(
            headers,
            req.headers,
            'headers'
          ),
        params &&
          RequestValidationMiddleware.validatePart(
            params,
            req.params,
            'params'
          ),
        body &&
          RequestValidationMiddleware.validatePart(body, req.body, 'body'),
        query &&
          RequestValidationMiddleware.validatePart(query, req.query, 'query')
      ]
        .compact()
        .flat();

      if (errors.none()) {
        return next();
      }

      this.logger.info('Request validation failed', { errors });

      return res.status(400).send({
        type: 'REQUEST_VALIDATION_FAILED',
        fields: errors
      });
    };
  }
}

export type GetHealthRequest = Request<
  ParamsDictionary,
  GetHealth200ResponseBody,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type GetHealthResponse = Response<
  GetHealth200ResponseBody,
  Record<string, any>,
  200
>;

export interface GetHealthController {
  getHealth(
    req: GetHealthRequest,
    res: GetHealthResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

export type GetClientsRequest = Request<
  ParamsDictionary,
  GetClients200ResponseBody | GetClients400ResponseBody,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type GetClientsResponse = Response<
  GetClients200ResponseBody | GetClients400ResponseBody,
  Record<string, any>,
  200 | 400 | 401 | 403
>;

export interface GetClientsController {
  getClients(
    req: GetClientsRequest,
    res: GetClientsResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

export type GetClientByIdRequest = Request<
  GetClientByIdRequestPath,
  | GetClientById200ResponseBody
  | GetClientById400ResponseBody
  | GetClientById404ResponseBody,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type GetClientByIdResponse = Response<
  | GetClientById200ResponseBody
  | GetClientById400ResponseBody
  | GetClientById404ResponseBody,
  Record<string, any>,
  200 | 400 | 404
>;

export interface GetClientByIdController {
  getClientById(
    req: GetClientByIdRequest,
    res: GetClientByIdResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

export type PutRegisterCommandRequest = Request<
  PutRegisterCommandRequestPath,
  PutRegisterCommand201ResponseBody | PutRegisterCommand400ResponseBody,
  PutRegisterCommandRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type PutRegisterCommandResponse = Response<
  PutRegisterCommand201ResponseBody | PutRegisterCommand400ResponseBody,
  Record<string, any>,
  201 | 400 | 401 | 403 | 409
>;

export interface PutRegisterCommandController {
  putRegisterCommand(
    req: PutRegisterCommandRequest,
    res: PutRegisterCommandResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

export type PutRenameCommandRequest = Request<
  PutRenameCommandRequestPath,
  PutRenameCommand201ResponseBody | PutRenameCommand400ResponseBody,
  PutRenameCommandRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type PutRenameCommandResponse = Response<
  PutRenameCommand201ResponseBody | PutRenameCommand400ResponseBody,
  Record<string, any>,
  201 | 400 | 401 | 403 | 409
>;

export interface PutRenameCommandController {
  putRenameCommand(
    req: PutRenameCommandRequest,
    res: PutRenameCommandResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

export type PutArchiveCommandRequest = Request<
  PutArchiveCommandRequestPath,
  PutArchiveCommand201ResponseBody | PutArchiveCommand400ResponseBody,
  PutArchiveCommandRequestBody,
  ParsedQs,
  Record<string, any>
>;

export type PutArchiveCommandResponse = Response<
  PutArchiveCommand201ResponseBody | PutArchiveCommand400ResponseBody,
  Record<string, any>,
  201 | 400 | 401 | 403 | 409
>;

export interface PutArchiveCommandController {
  putArchiveCommand(
    req: PutArchiveCommandRequest,
    res: PutArchiveCommandResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

export type GetEventsRequest = Request<
  ParamsDictionary,
  GetEvents200ResponseBody | GetEvents400ResponseBody,
  unknown,
  GetEventsRequestQuery,
  Record<string, any>
>;

export type GetEventsResponse = Response<
  GetEvents200ResponseBody | GetEvents400ResponseBody,
  Record<string, any>,
  200 | 400 | 401 | 403
>;

export interface GetEventsController {
  getEvents(
    req: GetEventsRequest,
    res: GetEventsResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

export type GetEventRequest = Request<
  GetEventRequestPath,
  GetEvent200ResponseBody | GetEvent400ResponseBody | GetEvent404ResponseBody,
  unknown,
  ParsedQs,
  Record<string, any>
>;

export type GetEventResponse = Response<
  GetEvent200ResponseBody | GetEvent400ResponseBody | GetEvent404ResponseBody,
  Record<string, any>,
  200 | 400 | 401 | 403 | 404
>;

export interface GetEventController {
  getEvent(
    req: GetEventRequest,
    res: GetEventResponse,
    next: NextFunction
  ): Promise<unknown | void>;
}

export interface RequestResolver {
  resolve<T>(token: { new (...args: any[]): T } | string | symbol): T;
}

@injectable()
export class RequestResolverFactory {
  constructor(public readonly forRequest: (req: Request) => RequestResolver) {}
}

@injectable()
export class ControllerMiddleware {
  constructor(
    private readonly schema: RequestValidationSchema,
    private readonly resolver: RequestResolverFactory
  ) {}

  private validation(validators: RequestValidators): RequestHandler {
    return (req, res, next) => {
      const validator = this.resolver
        .forRequest(req)
        .resolve(RequestValidationMiddleware);

      validator.createMiddleware(validators)(req, res, next);
    };
  }

  private addGetHealthController(router: Router): void {
    router.get(
      '/health',

      this.validation(this.schema.getHealth()),

      asyncRequestHandler<GetHealthRequest, GetHealthResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<GetHealthController>(nameof<GetHealthController>());

          await controller.getHealth(req, res, next);
        }
      )
    );
  }

  private addGetClientsController(router: Router): void {
    router.get(
      '/query/clients',

      this.validation(this.schema.getClients()),

      asyncRequestHandler<GetClientsRequest, GetClientsResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<GetClientsController>(nameof<GetClientsController>());

          await controller.getClients(req, res, next);
        }
      )
    );
  }

  private addGetClientByIdController(router: Router): void {
    router.get(
      '/query/clients/:clientId',

      this.validation(this.schema.getClientById()),

      asyncRequestHandler<GetClientByIdRequest, GetClientByIdResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<GetClientByIdController>(
              nameof<GetClientByIdController>()
            );

          await controller.getClientById(req, res, next);
        }
      )
    );
  }

  private addPutRegisterCommandController(router: Router): void {
    router.put(
      '/commands/register/:commandId',

      this.validation(this.schema.putRegisterCommand()),

      asyncRequestHandler<
        PutRegisterCommandRequest,
        PutRegisterCommandResponse
      >(async (req, res, next) => {
        const controller = this.resolver
          .forRequest(req)
          .resolve<PutRegisterCommandController>(
            nameof<PutRegisterCommandController>()
          );

        await controller.putRegisterCommand(req, res, next);
      })
    );
  }

  private addPutRenameCommandController(router: Router): void {
    router.put(
      '/commands/rename/:commandId',

      this.validation(this.schema.putRenameCommand()),

      asyncRequestHandler<PutRenameCommandRequest, PutRenameCommandResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<PutRenameCommandController>(
              nameof<PutRenameCommandController>()
            );

          await controller.putRenameCommand(req, res, next);
        }
      )
    );
  }

  private addPutArchiveCommandController(router: Router): void {
    router.put(
      '/commands/archive/:commandId',

      this.validation(this.schema.putArchiveCommand()),

      asyncRequestHandler<PutArchiveCommandRequest, PutArchiveCommandResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<PutArchiveCommandController>(
              nameof<PutArchiveCommandController>()
            );

          await controller.putArchiveCommand(req, res, next);
        }
      )
    );
  }

  private addGetEventsController(router: Router): void {
    router.get(
      '/events',

      this.validation(this.schema.getEvents()),

      asyncRequestHandler<GetEventsRequest, GetEventsResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<GetEventsController>(nameof<GetEventsController>());

          await controller.getEvents(req, res, next);
        }
      )
    );
  }

  private addGetEventController(router: Router): void {
    router.get(
      '/events/:eventId',

      this.validation(this.schema.getEvent()),

      asyncRequestHandler<GetEventRequest, GetEventResponse>(
        async (req, res, next) => {
          const controller = this.resolver
            .forRequest(req)
            .resolve<GetEventController>(nameof<GetEventController>());

          await controller.getEvent(req, res, next);
        }
      )
    );
  }

  public apply(expressApp: Express): void {
    const router = Router();

    this.addGetHealthController(router);
    this.addGetClientsController(router);
    this.addGetClientByIdController(router);
    this.addPutRegisterCommandController(router);
    this.addPutRenameCommandController(router);
    this.addPutArchiveCommandController(router);
    this.addGetEventsController(router);
    this.addGetEventController(router);

    expressApp.use(router);
  }
}
