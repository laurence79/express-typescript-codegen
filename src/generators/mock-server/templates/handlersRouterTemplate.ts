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

    export const addHandlers = (app: Express, handlers: Partial<Handlers>) => {
      const router = Router();

      ${handlers
        .map(
          h => `
      router.${h.httpMethod}(
        '${h.expressPath}',
        async (req, res, next) => {
          const handler = handlers["${h.handlerInstanceName}"];

          if (!handler) {
            return next(new Error('${h.expressPath} not handled'));
          }

          try {
            await handler(req as any, res as any, next);
          } catch (e: unknown) {
            next(e);
          }
        }
      );
      `
        )
        .join('\n')}

      app.use(router);
    };`;
};
