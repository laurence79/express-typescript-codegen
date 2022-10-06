import { mapOperations } from '../../../helpers/open-api/v3';
import * as OpenApiV3 from '../../../types/OpenApiV3';
import { initLower } from '../../../helpers/initLower';
import { LogFn, progress } from '../../../lib/cli-logging';
import { routerTemplate } from '../../../templates/routerTemplate';

export const fromV3 = (
  document: OpenApiV3.Document,
  serviceName: string,
  log?: LogFn
): string => {
  const routes = mapOperations(document).map(
    ({ method, path, parameters, operationId, requestBody }) => {
      log?.(progress(`Adding ${method} ${path}`));

      return {
        httpMethod: method,
        openApiPath: path,
        handlerInstanceName: initLower(operationId),
        validatorInstanceName:
          parameters.any() || requestBody
            ? `${operationId}Validator`
            : undefined
      };
    }
  );

  return routerTemplate({
    serviceName,
    routes
  });
};
