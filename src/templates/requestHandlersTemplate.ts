import {
  RequestHandlerTemplateArgs,
  requestHandlerTemplate
} from './requestHandlerTemplate';

export const requestHandlersTemplate = (
  handlers: RequestHandlerTemplateArgs[]
): string => {
  return `
    ${handlers.map(requestHandlerTemplate).join(';\n')}

    export type RequestHandlers = {
      ${handlers
        .map(
          ({ methodName, typeName }) => `
        ${methodName}: ${typeName}
      `
        )
        .join(';\n')}
    }`;
};
