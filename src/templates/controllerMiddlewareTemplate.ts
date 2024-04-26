import { ControllerTemplateArgs } from './controllerTemplate';

export const controllerMiddlewareTemplate = (
  handlers: ControllerTemplateArgs[]
): string => {
  return `
    type Token<T> = { new(...args: any[]): T } | object;

    export abstract class ControllerMiddleware {
      abstract resolver<T>(req: Request, token: Token<T>): T;

      private static validate = new Validator({ strict: false, coerceTypes: true }).validate;

      ${handlers
        .map(
          h => `
      private add${h.controllerTypeName}(router: Router): void {
        router.${h.httpMethod}(
          '${h.expressPath}',
    
          ${
            h.bodySchema || h.querySchema || h.pathSchema
              ? `
          ControllerMiddleware.validate({
            ${h.bodySchema ? `body: ${JSON.stringify(h.bodySchema)},` : ''}
            ${h.querySchema ? `query: ${JSON.stringify(h.querySchema)},` : ''}
            ${h.pathSchema ? `params: ${JSON.stringify(h.pathSchema)},` : ''}
          }),
          `
              : ''
          }
    
          async (req, res, next) => {
            try {
              const controller = this.resolver(req, ${h.controllerTypeName});
    
              await controller.${h.controllerMethodName}(
                req as ${h.requestTypeName},
                res as ${h.responseTypeName},
                next
              );
            } catch (e: unknown) {
              next(e);
            }
          }
        );
      }
      `
        )
        .join('\n')}

      private static validationErrorMiddleware: ErrorRequestHandler = (error, _, response, next) => {
        if (error instanceof ValidationError) {
          response.status(400).send({
            type: 'REQUEST_VALIDATION_FAILED',
            fields: error.validationErrors
          });
          next();
        } else {
          next(error);
        }
      };    
    
      public apply(expressApp: Express): void {
        const router = Router();

      ${handlers
        .map(h => `this.add${h.controllerTypeName}(router);`)
        .join('\n')}
    
        expressApp.use(router);

        expressApp.use(ControllerMiddleware.validationErrorMiddleware);
      }
    }`;
};
