import { handlersRouterTemplate } from './handlersRouterTemplate';
import { handlerTemplate, HandlerTemplateArgs } from './handlerTemplate';

export const handlersTemplate = (handlers: HandlerTemplateArgs[]): string => {
  return `
    ${handlers.map(handlerTemplate).join(';\n')}

    ${handlersRouterTemplate(handlers)}
  `;
};
