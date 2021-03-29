import { initUpper } from '../../helpers/initUpper';
import { mapOperations } from '../../helpers/v2';
import * as OpenApi from '../../types/OpenApi';
import * as OpenApiV2 from '../../types/OpenApiV2';
import 'ts-array-extensions';
import { initLower } from '../../helpers/initLower';
import { LogFn, progress } from '../../lib/cli-logging';

const fromV2 = (
  document: OpenApiV2.Document,
  log?: LogFn
): { route: string; handlerInstanceName: string; handlerType: string }[] => {
  return mapOperations(document).map(
    ({ method, path, parameters, operationId }) => {
      const handlerType = `${initUpper(operationId)}RequestHandler`;

      const handlerInstanceName = `${initLower(operationId)}`;

      const requestHandlersPath = path.replace(
        /\{(?:.*?)\}/g,
        x => `:${x.substr(1, x.length - 2)}`
      );

      log?.(progress(`Adding ${method} ${requestHandlersPath}`));

      const args = [
        `'${requestHandlersPath}'`,
        ...(parameters.any() ? [`${operationId}Validator(options)`] : []),
        handlerInstanceName
      ];

      return {
        route: `.${method}(${args.join(', ')})`,
        handlerInstanceName,
        handlerType
      };
    }
  );
};

const fromV3 = (): {
  route: string;
  handlerInstanceName: string;
  handlerType: string;
}[] => {
  throw new Error('OpenApi 3 not supported');
};

export const generateRouter = (
  openApiDocument: OpenApi.Document,
  serviceName: string,
  log?: LogFn
): string => {
  log?.(progress('Router'));

  const types =
    'swagger' in openApiDocument ? fromV2(openApiDocument, log) : fromV3();

  const argumentList = types
    .map(({ handlerInstanceName }) => handlerInstanceName)
    .join(', ');

  return `
    export const ${initLower(serviceName)}Router
      = ({ ${argumentList} }: RequestHandlers, options?: ValidationOptions): Router => {
      return Router()
        ${types.map(t => t.route).join('\n')}
    }
  `;
};
