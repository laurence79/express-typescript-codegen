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

      ${handlers
        .map(
          h => `
      private add${h.controllerTypeName}(router: Router): void {
        router.${h.httpMethod}(
          '${h.expressPath}',
    
          this.validation(this.schema.${h.controllerMethodName}()),
    
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
    
    
      public apply(expressApp: Express): void {
        const router = Router();

      ${handlers
        .map(h => `this.add${h.controllerTypeName}(router);`)
        .join('\n')}
    
        expressApp.use(router);
      }
    }`;
};
