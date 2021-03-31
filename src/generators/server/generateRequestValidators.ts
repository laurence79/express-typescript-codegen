/* eslint-disable no-template-curly-in-string */
import { mapOperations } from '../../helpers/v2';
import * as OpenApiV2 from '../../types/OpenApiV2';
import 'ts-array-extensions';
import { parametersTypeNameTemplate } from '../../templates';
import { LogFn, progress } from '../../lib/cli-logging';
import { initUpper } from '../../helpers/initUpper';

const requestPropertyName = (type: OpenApiV2.Parameter['in']) => {
  switch (type) {
    case 'header':
      return 'headers';
    case 'path':
      return 'params';
    case 'formData':
      return 'body';
    default:
      return type;
  }
};

export const generateRequestValidators = (
  openApiDocument: OpenApiV2.Document,
  log?: LogFn
): string[] => {
  log?.(progress('Generating request body validators'));

  return mapOperations(openApiDocument).compactMap(
    ({ operationId, parameters }) => {
      if (parameters.none()) {
        return undefined;
      }

      const parameterTypes = parameters
        .map(p => p.in)
        .distinct()
        .map(
          p =>
            [
              `validate${initUpper(p)}`,
              parametersTypeNameTemplate(operationId, p),
              requestPropertyName(p)
            ] as const
        );

      log?.(progress(`Generating ${operationId}Validator`));

      return (
        `
        const ${operationId}Validator = (options?: ValidationOptions): RequestHandler => {
          ${parameterTypes
            .map(
              ([validator, type]) => `
            const ${validator} = ajv.getSchema('#/definitions/${type}')!;
          `
            )
            .join('\n')}

          return (req, res, next) => {
            if ([
              ${parameterTypes
                .map(
                  ([validator, _, requestProperty]) => `
                ${validator}(req.${requestProperty})
              `
                )
                .join(',\n')}
            ].every(r => r)) {
              return next();
            }

            const errors = ([
              ${parameterTypes
                .map(
                  ([validator, _, requestProperty]) => `
                [${validator}, '${requestProperty}']
              `
                )
                .join(',\n')}
            ] as const).flatMap(([validator, path]) =>
              validator.errors?.map(e => ` +
        '`${path}${e.dataPath} ${e.message}`' +
        `)
            ).compact();

            options?.logger?.(req)('Request validation failed', { errors });

            res.status(400).send({
              errors
            });
          };
        };
      `
      );
    }
  );
};
