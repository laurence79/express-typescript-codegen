import { controllerMiddlewareTemplate } from './controllerMiddlewareTemplate';
import {
  controllerTemplate,
  ControllerTemplateArgs
} from './controllerTemplate';

export const controllersTemplate = (
  controllers: ControllerTemplateArgs[]
): string => {
  return `
    export const Handlers = {
      ${controllers
        .map(c => `${c.controllerTypeName}: '${c.controllerTypeName}'`)
        .join(',\n')}
    }

    ${controllers.map(controllerTemplate).join(';\n')}

    ${controllerMiddlewareTemplate(controllers)}
  `;
};
