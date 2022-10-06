import { mapOperations } from '../../../helpers/open-api/v2';
import * as OpenApiV2 from '../../../types/OpenApiV2';
import { initLower } from '../../../helpers/initLower';
import { LogFn, progress } from '../../../lib/cli-logging';
import { routerTemplate } from '../../../templates/routerTemplate';

export const fromV2 = (
  document: OpenApiV2.Document,
  serviceName: string,
  log?: LogFn
): string => {
  const routes = mapOperations(document).map(
    ({ method, path, parameters, operationId }) => {
      log?.(progress(`Adding ${method} ${path}`));

      return {
        httpMethod: method,
        openApiPath: path,
        handlerInstanceName: initLower(operationId),
        validatorInstanceName: parameters.any()
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
