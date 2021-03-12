import { initUpper } from '../helpers/initUpper';
import { mapParameters } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import { initLower } from '../helpers/initLower';
import { LogFn, Logger, progress, success } from '../lib/cli-logging';

const fromV2 = (
  document: OpenApiV2.Document,
  log?: LogFn
): { route: string; handlerInstanceName: string; handlerType: string }[] => {
  return mapParameters(document).map(
    ({ method, parameters, path, operationId }) => {
      const hasBody = parameters.some(p => p.in === 'body');
      const bodyValidatorName = `Validators.${initLower(operationId)}`;
      const handlerType = `RequestHandlers.${initUpper(
        operationId
      )}RequestHandler`;
      const handlerInstanceName = `${initLower(operationId)}`;
      const requestHandlersPath = path.replace(
        /\{(?:.*?)\}/g,
        x => `:${x.substr(1, x.length - 2)}`
      );

      log?.(progress(`Adding ${method} ${requestHandlersPath}`));

      return {
        route: `.${method}('${requestHandlersPath}', ${
          hasBody ? `${bodyValidatorName}, ` : ''
        } ${handlerInstanceName})`,
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

export const generateRouter = ({
  jsonSchemaValidatorsModuleName,
  logger,
  openApiDocument,
  requestHandlersModuleName
}: {
  jsonSchemaValidatorsModuleName: string;
  logger?: Logger;
  openApiDocument: OpenApi.Document;
  requestHandlersModuleName: string;
}): string => {
  const log = logger?.create('Generating router');

  const types =
    'swagger' in openApiDocument ? fromV2(openApiDocument, log) : fromV3();

  const argumentList = types
    .map(({ handlerInstanceName }) => handlerInstanceName)
    .join(', ');

  const code = `
  import { Router } from 'express';
  import * as RequestHandlers from './${requestHandlersModuleName}';
  import * as Validators from './${jsonSchemaValidatorsModuleName}';
  
  export const router = ({ ${argumentList} }: RequestHandlers.RequestHandlers): Router => {
    return Router()
      ${types.map(t => t.route).join('\n')}
  }
`;

  log?.(success());

  return code;
};
