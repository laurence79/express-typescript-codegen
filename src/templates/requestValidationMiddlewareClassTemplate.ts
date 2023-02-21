export const requestValidationMiddlewareClassTemplate = (): string => `
type RequestValidators = {
  headers?: AnyValidateFunction;
  params?: AnyValidateFunction;
  body?: AnyValidateFunction;
  query?: AnyValidateFunction;
}

@injectable()
export class RequestValidationMiddlewareLogger {
  info(message: string, meta: Record<string, unknown>): void {
    console.info(message, meta);
  }
}

@injectable()
export class RequestValidationMiddleware {
  constructor(
    private readonly logger: RequestValidationMiddlewareLogger) {}

  private static validatePart(
    validator: AnyValidateFunction,
    part: unknown,
    path: string
  ): { path: string; message: string }[] {
    validator(part);
    return (
      validator.errors?.map(e => ({
        path: \`\${path}\${e.dataPath}\`,
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
          RequestValidationMiddleware.validatePart(
            body,
            req.body,
            'body'
          ),
        query &&
          RequestValidationMiddleware.validatePart(
            query,
            req.query,
            'query'
          )
      ]
        .compact()
        .flat();

      if (errors.none()) {
        return next?.();
      }

      this.logger.info('Request validation failed', { errors });

      return res.status(400).send({
        type: 'REQUEST_VALIDATION_FAILED',
        fields: errors
      });
    };
  }
}
`;
