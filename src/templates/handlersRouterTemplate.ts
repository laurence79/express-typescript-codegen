import { HandlerTemplateArgs } from './handlerTemplate';

export const handlersRouterTemplate = (
  handlers: HandlerTemplateArgs[]
): string => {
  return `
    export type Handlers = {
      ${handlers
        .map(h => `"${h.handlerInstanceName}": ${h.handlerTypeName}`)
        .join(';\n')}
    };

    const { validate } = new Validator({ strict: false, coerceTypes: true });

    export const addHandlers = (app: Express, handlers: Partial<Handlers>) => {
      const router = Router();
    
      ${handlers
        .map(
          h => `
      router.${h.httpMethod}(
        '${h.expressPath}',
  
        ${
          h.bodySchema || h.querySchema || h.pathSchema
            ? `
        validate({
          ${h.bodySchema ? `body: ${JSON.stringify(h.bodySchema)},` : ''}
          ${h.querySchema ? `query: ${JSON.stringify(h.querySchema)},` : ''}
          ${h.pathSchema ? `params: ${JSON.stringify(h.pathSchema)},` : ''}
        }),
        `
            : ''
        }
    
        async (req, res, next) => {
          const handler = handlers["${h.handlerInstanceName}"];

          if (!handler) {
            return next(new Error('${h.expressPath} not handled'));
          }

          try {  
            await handler(
              req as ${h.requestTypeName},
              res as ${h.responseTypeName},
              next
            );
          } catch (e: unknown) {
            next(e);
          }
        }
      );
      `
        )
        .join('\n')}
        
      app.use(router);

      const validationErrorHandler: ErrorRequestHandler =
        (error, _, response, next) => {
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

      app.use(validationErrorHandler);
    };`;
};
