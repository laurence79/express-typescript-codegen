import { ControllerTemplateArgs } from './controllerTemplate';

export const controllerMiddlewareTemplate = (
  handlers: ControllerTemplateArgs[]
): string => {
  return `
    export interface RequestResolver {
      resolve<T>(token: 
        | { new (...args: any[]): T; }
        | string
        | symbol): T;
    }

    @injectable()
    export class RequestResolverFactory {
      constructor(public readonly forRequest: (req: Request) => RequestResolver) {};
    }

    @injectable()
    export class ControllerMiddleware {
      constructor(
        private readonly resolver: RequestResolverFactory
      ) {}

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
    
          asyncRequestHandler<${h.requestTypeName}, ${h.responseTypeName}>(
            async (req, res, next) => {
              const controller = this.resolver
                .forRequest(req)
                .resolve<${h.controllerTypeName}>(
                  nameof<${h.controllerTypeName}>()
                );
    
              await controller.${h.controllerMethodName}(req, res, next);
            }
          )
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
