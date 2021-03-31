import Ajv from 'ajv';
import { Request, Router } from 'express';
import { RequestHandler } from '@laurence79/express-async-request-handler';

export type ValidationOptions = {
  logger?: (
    req: Request
  ) => (message: string, data: Record<string, unknown>) => void;
};

export type GetHealth200ResponseBody = { ok?: boolean };

export type PostPaymentIntentRequestBody = PostPaymentIntentRequestPayload;

export type PostPaymentIntentRequestHeader = { Authorization: string };

export type PostPaymentIntent200ResponseBody = PaymentIntentResponsePayload;

export type PostPaymentIntent400ResponseBody = PaymentIntentBadRequestResponsePayload;

export type GetVenueConfigsRequestHeader = { Authorization: string };

export type GetVenueConfigsRequestQuery = {
  venueId?: string;
  status?: 'CURRENT' | 'REPLACED';
};

export type GetVenueConfigs200ResponseBody = Array<VenueConfigResponsePayload>;

export type GetVenueConfigs400ResponseBody = BadRequestResponsePayload;

export type PostVenueConfigRequestHeader = { Authorization: string };

export type PostVenueConfigRequestBody = VenueConfigRequestPayload;

export type PostVenueConfig200ResponseBody = VenueConfigResponsePayload;

export type PostVenueConfig400ResponseBody = BadRequestResponsePayload;

export type GetVenueConfigByIdRequestHeader = { Authorization: string };

export type GetVenueConfigByIdRequestPath = { id: string };

export type GetVenueConfigById200ResponseBody = VenueConfigResponsePayload;

export type GetVenueConfigById400ResponseBody = BadRequestResponsePayload;

export type GetVenueStripeAccountByVenueIdRequestHeader = {
  Authorization: string;
};

export type GetVenueStripeAccountByVenueIdRequestQuery = { venueId: string };

export type GetVenueStripeAccountByVenueId200ResponseBody = VenueStripeAccountResponsePayload;

export type GetVenueStripeAccountByVenueId400ResponseBody = BadRequestResponsePayload;

export type PostVenueStripeAccountRequestHeader = { Authorization: string };

export type PostVenueStripeAccountRequestBody = PostVenueStripeAccountRequestPayload;

export type PostVenueStripeAccount200ResponseBody = VenueStripeAccountResponsePayload;

export type PostVenueStripeAccount400ResponseBody = BadRequestResponsePayload;

export type GetVenueStripeAccountByIdRequestHeader = { Authorization: string };

export type GetVenueStripeAccountByIdRequestPath = { id: string };

export type GetVenueStripeAccountById200ResponseBody = VenueStripeAccountResponsePayload;

export type GetVenueStripeAccountById400ResponseBody = BadRequestResponsePayload;

export type DeleteVenueStripeAccountRequestHeader = { Authorization: string };

export type DeleteVenueStripeAccountRequestPath = { id: string };

export type DeleteVenueStripeAccount400ResponseBody = BadRequestResponsePayload;

export type GetVenueStatementSuffixByVenueIdRequestHeader = {
  Authorization: string;
};

export type GetVenueStatementSuffixByVenueIdRequestQuery = { venueId: string };

export type GetVenueStatementSuffixByVenueId200ResponseBody = VenueStatementSuffixResponsePayload;

export type GetVenueStatementSuffixByVenueId400ResponseBody = BadRequestResponsePayload;

export type PostVenueStatementSuffixRequestHeader = { Authorization: string };

export type PostVenueStatementSuffixRequestBody = PostVenueStatementSuffixRequestPayload;

export type PostVenueStatementSuffix200ResponseBody = VenueStatementSuffixResponsePayload;

export type PostVenueStatementSuffix400ResponseBody = BadRequestResponsePayload;

export type GetVenueStatementSuffixByIdRequestPath = { id: string };

export type GetVenueStatementSuffixByIdRequestHeader = {
  Authorization: string;
};

export type GetVenueStatementSuffixById200ResponseBody = VenueStatementSuffixResponsePayload;

export type GetVenueStatementSuffixById400ResponseBody = BadRequestResponsePayload;

export type DeleteVenueStatementSuffixRequestPath = { id: string };

export type DeleteVenueStatementSuffixRequestHeader = { Authorization: string };

export type DeleteVenueStatementSuffix400ResponseBody = BadRequestResponsePayload;

export type BadRequestResponsePayload = { errors: Array<string> };

export type PaymentIntentBadRequestResponsePayload = {
  errors: Array<PaymentIntentBadRequestError>;
};

export type PaymentIntentBadRequestError = {
  errorType: PaymentIntentBadRequestErrorType;
  errorMessage?: string;
};

export type PaymentIntentBadRequestErrorType =
  | 'MISSING_STRIPE_ACCOUNT'
  | 'REQUIRED_PAYLOAD_DATA_MISSING';

export type PaymentIntentResponsePayload = { clientSecret: string };

export type PostPaymentIntentRequestPayload = {
  amount: number;
  orderId: string;
  venueId: string;
};

export type Config =
  | { configType: 'DIRECT'; statementSuffix: string }
  | { configType: 'CONNECT'; stripeAccountId: string };

export type VenueConfigRequestPayload = { venueId: string; config: Config };

export type VenueConfigResponsePayload = {
  id: string;
  venueId: string;
  config: Config;
  status: StripeConfigStatus;
  createDateTime: string;
  createUserId: string;
};

export type StripeConfigStatus = 'CURRENT' | 'REPLACED';

export type VenueStripeAccountResponsePayload = {
  id: string;
  stripeAccountId: string;
  venueId: string;
  modifyDateTime: string;
  modifyUserId: string;
};

export type PostVenueStripeAccountRequestPayload = {
  stripeAccountId: string;
  venueId: string;
};

export type VenueStatementSuffixResponsePayload = {
  id: string;
  statementSuffix: string;
  venueId: string;
  modifyDateTime: string;
  modifyUserId: string;
};

export type PostVenueStatementSuffixRequestPayload = {
  statementSuffix: string;
  venueId: string;
};

export type GetHealthRequestHandler = RequestHandler<
  unknown,
  GetHealth200ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200
>;

export type PostPaymentIntentRequestHandler = RequestHandler<
  unknown,
  PostPaymentIntent200ResponseBody | PostPaymentIntent400ResponseBody,
  PostPaymentIntentRequestBody,
  unknown,
  Record<string, any>,
  200 | 400 | 401 | 403
>;

export type GetVenueConfigsRequestHandler = RequestHandler<
  unknown,
  GetVenueConfigs200ResponseBody | GetVenueConfigs400ResponseBody,
  unknown,
  GetVenueConfigsRequestQuery,
  Record<string, any>,
  200 | 400 | 401 | 403
>;

export type PostVenueConfigRequestHandler = RequestHandler<
  unknown,
  PostVenueConfig200ResponseBody | PostVenueConfig400ResponseBody,
  PostVenueConfigRequestBody,
  unknown,
  Record<string, any>,
  200 | 400 | 401 | 403
>;

export type GetVenueConfigByIdRequestHandler = RequestHandler<
  GetVenueConfigByIdRequestPath,
  GetVenueConfigById200ResponseBody | GetVenueConfigById400ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200 | 400 | 401 | 403 | 404
>;

export type GetVenueStripeAccountByVenueIdRequestHandler = RequestHandler<
  unknown,
  | GetVenueStripeAccountByVenueId200ResponseBody
  | GetVenueStripeAccountByVenueId400ResponseBody,
  unknown,
  GetVenueStripeAccountByVenueIdRequestQuery,
  Record<string, any>,
  200 | 400 | 401 | 403 | 404
>;

export type PostVenueStripeAccountRequestHandler = RequestHandler<
  unknown,
  PostVenueStripeAccount200ResponseBody | PostVenueStripeAccount400ResponseBody,
  PostVenueStripeAccountRequestBody,
  unknown,
  Record<string, any>,
  200 | 400 | 401 | 403
>;

export type GetVenueStripeAccountByIdRequestHandler = RequestHandler<
  GetVenueStripeAccountByIdRequestPath,
  | GetVenueStripeAccountById200ResponseBody
  | GetVenueStripeAccountById400ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200 | 400 | 401 | 403 | 404
>;

export type DeleteVenueStripeAccountRequestHandler = RequestHandler<
  DeleteVenueStripeAccountRequestPath,
  DeleteVenueStripeAccount400ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200 | 400 | 401 | 403 | 404
>;

export type GetVenueStatementSuffixByVenueIdRequestHandler = RequestHandler<
  unknown,
  | GetVenueStatementSuffixByVenueId200ResponseBody
  | GetVenueStatementSuffixByVenueId400ResponseBody,
  unknown,
  GetVenueStatementSuffixByVenueIdRequestQuery,
  Record<string, any>,
  200 | 400 | 401 | 403 | 404
>;

export type PostVenueStatementSuffixRequestHandler = RequestHandler<
  unknown,
  | PostVenueStatementSuffix200ResponseBody
  | PostVenueStatementSuffix400ResponseBody,
  PostVenueStatementSuffixRequestBody,
  unknown,
  Record<string, any>,
  200 | 400 | 401 | 403
>;

export type GetVenueStatementSuffixByIdRequestHandler = RequestHandler<
  GetVenueStatementSuffixByIdRequestPath,
  | GetVenueStatementSuffixById200ResponseBody
  | GetVenueStatementSuffixById400ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200 | 400 | 401 | 403 | 404
>;

export type DeleteVenueStatementSuffixRequestHandler = RequestHandler<
  DeleteVenueStatementSuffixRequestPath,
  DeleteVenueStatementSuffix400ResponseBody,
  unknown,
  unknown,
  Record<string, any>,
  200 | 400 | 401 | 403 | 404
>;

export type RequestHandlers = {
  getHealth: GetHealthRequestHandler;
  postPaymentIntent: PostPaymentIntentRequestHandler;
  getVenueConfigs: GetVenueConfigsRequestHandler;
  postVenueConfig: PostVenueConfigRequestHandler;
  getVenueConfigById: GetVenueConfigByIdRequestHandler;
  getVenueStripeAccountByVenueId: GetVenueStripeAccountByVenueIdRequestHandler;
  postVenueStripeAccount: PostVenueStripeAccountRequestHandler;
  getVenueStripeAccountById: GetVenueStripeAccountByIdRequestHandler;
  deleteVenueStripeAccount: DeleteVenueStripeAccountRequestHandler;
  getVenueStatementSuffixByVenueId: GetVenueStatementSuffixByVenueIdRequestHandler;
  postVenueStatementSuffix: PostVenueStatementSuffixRequestHandler;
  getVenueStatementSuffixById: GetVenueStatementSuffixByIdRequestHandler;
  deleteVenueStatementSuffix: DeleteVenueStatementSuffixRequestHandler;
};

const ajv = new Ajv({ strict: false });
ajv.addSchema({
  $schema: 'http://json-schema.org/draft-07/schema#',
  definitions: {
    GetHealth200ResponseBody: {
      type: 'object',
      properties: { ok: { type: 'boolean' } }
    },
    PostPaymentIntentRequestBody: {
      $ref: '#/definitions/PostPaymentIntentRequestPayload'
    },
    PostPaymentIntentRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    PostPaymentIntent200ResponseBody: {
      $ref: '#/definitions/PaymentIntentResponsePayload'
    },
    PostPaymentIntent400ResponseBody: {
      $ref: '#/definitions/PaymentIntentBadRequestResponsePayload'
    },
    GetVenueConfigsRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    GetVenueConfigsRequestQuery: {
      type: 'object',
      required: [],
      properties: {
        venueId: { type: 'string', description: 'The venue Id' },
        status: {
          type: 'string',
          enum: ['CURRENT', 'REPLACED'],
          description: 'The status of the configs to return'
        }
      }
    },
    GetVenueConfigs200ResponseBody: {
      type: 'array',
      items: { $ref: '#/definitions/VenueConfigResponsePayload' }
    },
    GetVenueConfigs400ResponseBody: {
      $ref: '#/definitions/BadRequestResponsePayload'
    },
    PostVenueConfigRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    PostVenueConfigRequestBody: {
      $ref: '#/definitions/VenueConfigRequestPayload'
    },
    PostVenueConfig200ResponseBody: {
      $ref: '#/definitions/VenueConfigResponsePayload'
    },
    PostVenueConfig400ResponseBody: {
      $ref: '#/definitions/BadRequestResponsePayload'
    },
    GetVenueConfigByIdRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    GetVenueConfigByIdRequestPath: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string', description: 'The Id of the object to return' }
      }
    },
    GetVenueConfigById200ResponseBody: {
      $ref: '#/definitions/VenueConfigResponsePayload'
    },
    GetVenueConfigById400ResponseBody: {
      $ref: '#/definitions/BadRequestResponsePayload'
    },
    GetVenueStripeAccountByVenueIdRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    GetVenueStripeAccountByVenueIdRequestQuery: {
      type: 'object',
      required: ['venueId'],
      properties: { venueId: { type: 'string', description: 'The venue Id' } }
    },
    GetVenueStripeAccountByVenueId200ResponseBody: {
      $ref: '#/definitions/VenueStripeAccountResponsePayload'
    },
    GetVenueStripeAccountByVenueId400ResponseBody: {
      $ref: '#/definitions/BadRequestResponsePayload'
    },
    PostVenueStripeAccountRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    PostVenueStripeAccountRequestBody: {
      $ref: '#/definitions/PostVenueStripeAccountRequestPayload'
    },
    PostVenueStripeAccount200ResponseBody: {
      $ref: '#/definitions/VenueStripeAccountResponsePayload'
    },
    PostVenueStripeAccount400ResponseBody: {
      $ref: '#/definitions/BadRequestResponsePayload'
    },
    GetVenueStripeAccountByIdRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    GetVenueStripeAccountByIdRequestPath: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string', description: 'The Id of the object to return' }
      }
    },
    GetVenueStripeAccountById200ResponseBody: {
      $ref: '#/definitions/VenueStripeAccountResponsePayload'
    },
    GetVenueStripeAccountById400ResponseBody: {
      $ref: '#/definitions/BadRequestResponsePayload'
    },
    DeleteVenueStripeAccountRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    DeleteVenueStripeAccountRequestPath: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string', description: 'The Id of the object to return' }
      }
    },
    DeleteVenueStripeAccount400ResponseBody: {
      $ref: '#/definitions/BadRequestResponsePayload'
    },
    GetVenueStatementSuffixByVenueIdRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    GetVenueStatementSuffixByVenueIdRequestQuery: {
      type: 'object',
      required: ['venueId'],
      properties: { venueId: { type: 'string', description: 'The venue Id' } }
    },
    GetVenueStatementSuffixByVenueId200ResponseBody: {
      $ref: '#/definitions/VenueStatementSuffixResponsePayload'
    },
    GetVenueStatementSuffixByVenueId400ResponseBody: {
      $ref: '#/definitions/BadRequestResponsePayload'
    },
    PostVenueStatementSuffixRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    PostVenueStatementSuffixRequestBody: {
      $ref: '#/definitions/PostVenueStatementSuffixRequestPayload'
    },
    PostVenueStatementSuffix200ResponseBody: {
      $ref: '#/definitions/VenueStatementSuffixResponsePayload'
    },
    PostVenueStatementSuffix400ResponseBody: {
      $ref: '#/definitions/BadRequestResponsePayload'
    },
    GetVenueStatementSuffixByIdRequestPath: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string', description: 'The Id of the object to return' }
      }
    },
    GetVenueStatementSuffixByIdRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    GetVenueStatementSuffixById200ResponseBody: {
      $ref: '#/definitions/VenueStatementSuffixResponsePayload'
    },
    GetVenueStatementSuffixById400ResponseBody: {
      $ref: '#/definitions/BadRequestResponsePayload'
    },
    DeleteVenueStatementSuffixRequestPath: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string', description: 'The Id of the object to return' }
      }
    },
    DeleteVenueStatementSuffixRequestHeader: {
      type: 'object',
      required: ['Authorization'],
      properties: {
        Authorization: {
          type: 'string',
          description: 'The authentication token, e.g. "Bearer <token>"'
        }
      }
    },
    DeleteVenueStatementSuffix400ResponseBody: {
      $ref: '#/definitions/BadRequestResponsePayload'
    },
    BadRequestResponsePayload: {
      type: 'object',
      required: ['errors'],
      properties: { errors: { type: 'array', items: { type: 'string' } } }
    },
    PaymentIntentBadRequestResponsePayload: {
      type: 'object',
      required: ['errors'],
      properties: {
        errors: {
          type: 'array',
          items: { $ref: '#/definitions/PaymentIntentBadRequestError' }
        }
      }
    },
    PaymentIntentBadRequestError: {
      type: 'object',
      required: ['errorType'],
      properties: {
        errorType: { $ref: '#/definitions/PaymentIntentBadRequestErrorType' },
        errorMessage: { type: 'string' }
      }
    },
    PaymentIntentBadRequestErrorType: {
      type: 'string',
      enum: ['MISSING_STRIPE_ACCOUNT', 'REQUIRED_PAYLOAD_DATA_MISSING']
    },
    PaymentIntentResponsePayload: {
      type: 'object',
      required: ['clientSecret'],
      properties: { clientSecret: { type: 'string', example: 'abc123' } }
    },
    PostPaymentIntentRequestPayload: {
      type: 'object',
      required: ['amount', 'orderId', 'venueId'],
      properties: {
        amount: { type: 'number', example: 12345 },
        orderId: { type: 'string', example: 'abc123' },
        venueId: { type: 'string', example: 'abc123' }
      }
    },
    Config: {
      type: 'object',
      enum: [
        {
          type: 'object',
          properties: {
            configType: { type: 'string', enum: ['DIRECT'] },
            statementSuffix: { type: 'string', example: 'ALLBARONE' }
          },
          required: ['configType', 'statementSuffix']
        },
        {
          type: 'object',
          properties: {
            configType: { type: 'string', enum: ['CONNECT'] },
            stripeAccountId: { type: 'string', example: '1234' }
          },
          required: ['configType', 'stripeAccountId']
        }
      ]
    },
    VenueConfigRequestPayload: {
      type: 'object',
      required: ['config', 'venueId'],
      properties: {
        venueId: { type: 'string', example: '1234' },
        config: { $ref: '#/definitions/Config' }
      }
    },
    VenueConfigResponsePayload: {
      type: 'object',
      required: [
        'id',
        'config',
        'venueId',
        'status',
        'createDateTime',
        'createUserId'
      ],
      properties: {
        id: { type: 'string', example: '1234' },
        venueId: { type: 'string', example: '1234' },
        config: { $ref: '#/definitions/Config' },
        status: { $ref: '#/definitions/StripeConfigStatus' },
        createDateTime: { type: 'string', example: '2020-08-10T21:07:38.123Z' },
        createUserId: { type: 'string', example: 'abc123' }
      }
    },
    StripeConfigStatus: { type: 'string', enum: ['CURRENT', 'REPLACED'] },
    VenueStripeAccountResponsePayload: {
      type: 'object',
      required: [
        'id',
        'stripeAccountId',
        'venueId',
        'modifyDateTime',
        'modifyUserId'
      ],
      properties: {
        id: { type: 'string', example: '1234' },
        stripeAccountId: { type: 'string', example: '1234' },
        venueId: { type: 'string', example: 'All bar one' },
        modifyDateTime: { type: 'string', example: '2020-08-10T21:07:38.123Z' },
        modifyUserId: { type: 'string', example: 'abc123' }
      }
    },
    PostVenueStripeAccountRequestPayload: {
      type: 'object',
      required: ['stripeAccountId', 'venueId'],
      properties: {
        stripeAccountId: { type: 'string', example: '1234' },
        venueId: { type: 'string', example: 'abc123' }
      }
    },
    VenueStatementSuffixResponsePayload: {
      type: 'object',
      required: [
        'id',
        'statementSuffix',
        'venueId',
        'modifyDateTime',
        'modifyUserId'
      ],
      properties: {
        id: { type: 'string', example: '1234' },
        statementSuffix: { type: 'string', example: 'ALLBARONE' },
        venueId: { type: 'string', example: 'All bar one' },
        modifyDateTime: { type: 'string', example: '2020-08-10T21:07:38.123Z' },
        modifyUserId: { type: 'string', example: 'abc123' }
      }
    },
    PostVenueStatementSuffixRequestPayload: {
      type: 'object',
      required: ['statementSuffix', 'venueId'],
      properties: {
        statementSuffix: { type: 'string', example: 'ALLBARONE' },
        venueId: { type: 'string', example: 'abc123' }
      }
    }
  }
});

const postPaymentIntentValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validateBody = ajv.getSchema(
    '#/definitions/PostPaymentIntentRequestBody'
  )!;

  const validateHeader = ajv.getSchema(
    '#/definitions/PostPaymentIntentRequestHeader'
  )!;

  return (req, res, next) => {
    if ([validateBody(req.body), validateHeader(req.headers)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validateBody, 'body'],
      [validateHeader, 'headers']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const getVenueConfigsValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validateHeader = ajv.getSchema(
    '#/definitions/GetVenueConfigsRequestHeader'
  )!;

  const validateQuery = ajv.getSchema(
    '#/definitions/GetVenueConfigsRequestQuery'
  )!;

  return (req, res, next) => {
    if ([validateHeader(req.headers), validateQuery(req.query)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validateHeader, 'headers'],
      [validateQuery, 'query']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const postVenueConfigValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validateHeader = ajv.getSchema(
    '#/definitions/PostVenueConfigRequestHeader'
  )!;

  const validateBody = ajv.getSchema(
    '#/definitions/PostVenueConfigRequestBody'
  )!;

  return (req, res, next) => {
    if ([validateHeader(req.headers), validateBody(req.body)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validateHeader, 'headers'],
      [validateBody, 'body']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const getVenueConfigByIdValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validateHeader = ajv.getSchema(
    '#/definitions/GetVenueConfigByIdRequestHeader'
  )!;

  const validatePath = ajv.getSchema(
    '#/definitions/GetVenueConfigByIdRequestPath'
  )!;

  return (req, res, next) => {
    if ([validateHeader(req.headers), validatePath(req.params)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validateHeader, 'headers'],
      [validatePath, 'params']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const getVenueStripeAccountByVenueIdValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validateHeader = ajv.getSchema(
    '#/definitions/GetVenueStripeAccountByVenueIdRequestHeader'
  )!;

  const validateQuery = ajv.getSchema(
    '#/definitions/GetVenueStripeAccountByVenueIdRequestQuery'
  )!;

  return (req, res, next) => {
    if ([validateHeader(req.headers), validateQuery(req.query)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validateHeader, 'headers'],
      [validateQuery, 'query']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const postVenueStripeAccountValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validateHeader = ajv.getSchema(
    '#/definitions/PostVenueStripeAccountRequestHeader'
  )!;

  const validateBody = ajv.getSchema(
    '#/definitions/PostVenueStripeAccountRequestBody'
  )!;

  return (req, res, next) => {
    if ([validateHeader(req.headers), validateBody(req.body)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validateHeader, 'headers'],
      [validateBody, 'body']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const getVenueStripeAccountByIdValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validateHeader = ajv.getSchema(
    '#/definitions/GetVenueStripeAccountByIdRequestHeader'
  )!;

  const validatePath = ajv.getSchema(
    '#/definitions/GetVenueStripeAccountByIdRequestPath'
  )!;

  return (req, res, next) => {
    if ([validateHeader(req.headers), validatePath(req.params)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validateHeader, 'headers'],
      [validatePath, 'params']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const deleteVenueStripeAccountValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validateHeader = ajv.getSchema(
    '#/definitions/DeleteVenueStripeAccountRequestHeader'
  )!;

  const validatePath = ajv.getSchema(
    '#/definitions/DeleteVenueStripeAccountRequestPath'
  )!;

  return (req, res, next) => {
    if ([validateHeader(req.headers), validatePath(req.params)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validateHeader, 'headers'],
      [validatePath, 'params']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const getVenueStatementSuffixByVenueIdValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validateHeader = ajv.getSchema(
    '#/definitions/GetVenueStatementSuffixByVenueIdRequestHeader'
  )!;

  const validateQuery = ajv.getSchema(
    '#/definitions/GetVenueStatementSuffixByVenueIdRequestQuery'
  )!;

  return (req, res, next) => {
    if ([validateHeader(req.headers), validateQuery(req.query)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validateHeader, 'headers'],
      [validateQuery, 'query']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const postVenueStatementSuffixValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validateHeader = ajv.getSchema(
    '#/definitions/PostVenueStatementSuffixRequestHeader'
  )!;

  const validateBody = ajv.getSchema(
    '#/definitions/PostVenueStatementSuffixRequestBody'
  )!;

  return (req, res, next) => {
    if ([validateHeader(req.headers), validateBody(req.body)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validateHeader, 'headers'],
      [validateBody, 'body']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const getVenueStatementSuffixByIdValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validatePath = ajv.getSchema(
    '#/definitions/GetVenueStatementSuffixByIdRequestPath'
  )!;

  const validateHeader = ajv.getSchema(
    '#/definitions/GetVenueStatementSuffixByIdRequestHeader'
  )!;

  return (req, res, next) => {
    if ([validatePath(req.params), validateHeader(req.headers)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validatePath, 'params'],
      [validateHeader, 'headers']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

const deleteVenueStatementSuffixValidator = (
  options?: ValidationOptions
): RequestHandler => {
  const validatePath = ajv.getSchema(
    '#/definitions/DeleteVenueStatementSuffixRequestPath'
  )!;

  const validateHeader = ajv.getSchema(
    '#/definitions/DeleteVenueStatementSuffixRequestHeader'
  )!;

  return (req, res, next) => {
    if ([validatePath(req.params), validateHeader(req.headers)].every(r => r)) {
      return next();
    }

    const errors = ([
      [validatePath, 'params'],
      [validateHeader, 'headers']
    ] as const)
      .flatMap(([validator, path]) =>
        validator.errors?.map(e => `${path}${e.dataPath} ${e.message}`)
      )
      .compact();

    options?.logger?.(req)('Request validation failed', { errors });

    res.status(400).send({
      errors
    });
  };
};

export const orderAndPayPaymentGatewayRouter = (
  {
    getHealth,
    postPaymentIntent,
    getVenueConfigs,
    postVenueConfig,
    getVenueConfigById,
    getVenueStripeAccountByVenueId,
    postVenueStripeAccount,
    getVenueStripeAccountById,
    deleteVenueStripeAccount,
    getVenueStatementSuffixByVenueId,
    postVenueStatementSuffix,
    getVenueStatementSuffixById,
    deleteVenueStatementSuffix
  }: RequestHandlers,
  options?: ValidationOptions
): Router => {
  return Router()
    .get('/health', getHealth)
    .post(
      '/payment-intent',
      postPaymentIntentValidator(options),
      postPaymentIntent
    )
    .get('/venue-config', getVenueConfigsValidator(options), getVenueConfigs)
    .post('/venue-config', postVenueConfigValidator(options), postVenueConfig)
    .get(
      '/venue-config/:id',
      getVenueConfigByIdValidator(options),
      getVenueConfigById
    )
    .get(
      '/venue-stripe-account',
      getVenueStripeAccountByVenueIdValidator(options),
      getVenueStripeAccountByVenueId
    )
    .post(
      '/venue-stripe-account',
      postVenueStripeAccountValidator(options),
      postVenueStripeAccount
    )
    .get(
      '/venue-stripe-account/:id',
      getVenueStripeAccountByIdValidator(options),
      getVenueStripeAccountById
    )
    .delete(
      '/venue-stripe-account/:id',
      deleteVenueStripeAccountValidator(options),
      deleteVenueStripeAccount
    )
    .get(
      '/venue-statement-suffix',
      getVenueStatementSuffixByVenueIdValidator(options),
      getVenueStatementSuffixByVenueId
    )
    .post(
      '/venue-statement-suffix',
      postVenueStatementSuffixValidator(options),
      postVenueStatementSuffix
    )
    .get(
      '/venue-statement-suffix/:id',
      getVenueStatementSuffixByIdValidator(options),
      getVenueStatementSuffixById
    )
    .delete(
      '/venue-statement-suffix/:id',
      deleteVenueStatementSuffixValidator(options),
      deleteVenueStatementSuffix
    );
};
