import { controllerMiddlewareTemplate } from './controllerMiddlewareTemplate';
import {
  controllerTemplate,
  ControllerTemplateArgs
} from './controllerTemplate';

export const controllersTemplate = (
  controllers: ControllerTemplateArgs[]
): string => {
  return `
    ${controllers.map(controllerTemplate).join(';\n')}

    ${controllerMiddlewareTemplate(controllers)}
  `;
};
