import fs from 'fs';
import prettier from 'prettier';
import { initUpper } from './helpers/initUpper';
import { mapParameters } from './helpers/v2';
import * as OpenAPI from './types/OpenAPI';
import * as OpenAPIV2 from './types/OpenAPIV2';
import 'ts-array-extensions';
import { prettierStyle } from './helpers/prettierStyle';
import { initLower } from './helpers/initLower';

const fromV2 = (
  document: OpenAPIV2.Document
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
  throw new Error('OpenAPI 3 not supported');
};

export const createRouter = (
  document: OpenAPI.Document,
  filename: string
): void => {
  const types = 'swagger' in document ? fromV2(document) : fromV3();

  const argumentList = types
    .map(({ handlerInstanceName }) => handlerInstanceName)
    .join(', ');

  const code = `
  import { Router } from 'express';
  import * as RequestHandlers from './requestHandlerTypes';
  import * as Validators from './schemaValidators';
  
  export const router = ({ ${argumentList} }: RequestHandlers.RequestHandlers): Router => {
    return Router()
      ${types.map(t => t.route).join('\n')}
  }
`;

  fs.writeFileSync(filename, prettier.format(code, prettierStyle));
};
