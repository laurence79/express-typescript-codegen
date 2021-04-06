import { initLower } from '../helpers/initLower';

export const routerTemplate = ({
  serviceName,
  routes
}: {
  serviceName: string;
  routes: {
    httpMethod: string;
    openApiPath: string;
    handlerInstanceName: string;
    validatorInstanceName?: string;
  }[];
}): string => {
  const argumentList = routes
    .map(({ handlerInstanceName }) => handlerInstanceName)
    .join(', ');

  return `
    export const ${initLower(serviceName)}Router
      = ({ ${argumentList} }: RequestHandlers, options?: ValidationOptions): Router => {
      return Router()
        ${routes
          .map(t => {
            const path = t.openApiPath.replace(
              /\{(?:.*?)\}/g,
              x => `:${x.substr(1, x.length - 2)}`
            );

            const args = [
              `'${path}'`,
              ...(t.validatorInstanceName
                ? [`${t.validatorInstanceName}(options)`]
                : []),
              t.handlerInstanceName
            ];

            return `.${t.httpMethod}(${args.join(', ')})`;
          })
          .join('\n')}
    }
  `;
};
