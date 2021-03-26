import { initUpper } from '../helpers/initUpper';
import { mapOperations } from '../helpers/v2';
import * as OpenApi from '../types/OpenApi';
import * as OpenApiV2 from '../types/OpenApiV2';
import 'ts-array-extensions';
import { initLower } from '../helpers/initLower';
import { LogFn, Logger, progress, success } from '../lib/cli-logging';

const fromV2 = (
  document: OpenApiV2.Document,
  log?: LogFn
): { route: string; handlerInstanceName: string; handlerType: string }[] => {
  return mapOperations(document).map(({ method, path, operationId }) => {
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
      route: `.${method}('${requestHandlersPath}', Validators.${operationId}(options), ${handlerInstanceName})`,
      handlerInstanceName,
      handlerType
    };
  });
};

const fromV3 = (): {
  route: string;
  handlerInstanceName: string;
  handlerType: string;
}[] => {
  throw new Error('OpenApi 3 not supported');
};

export const generateRouter = ({
  requestSchemaValidatorsModuleName,
  logger,
  openApiDocument,
  requestHandlersModuleName
}: {
  requestSchemaValidatorsModuleName: string;
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
  import * as Validators from './${requestSchemaValidatorsModuleName}';
  
  export const router = ({ ${argumentList} }: RequestHandlers.RequestHandlers, options?: Validators.ValidationOptions): Router => {
    return Router()
      ${types.map(t => t.route).join('\n')}
  }
`;

  log?.(success());

  return code;
};
