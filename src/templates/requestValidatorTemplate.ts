/* eslint-disable no-template-curly-in-string */
export const requestValidatorTemplate = ({
  requestHandlerTypeName,
  functionName,
  parameterTypes
}: {
  requestHandlerTypeName: string;
  functionName: string;
  parameterTypes: {
    typeName: string;
    requestProperty: string;
  }[];
}): string => {
  return (
    `
    const ${functionName} = (options?: ValidationOptions): ${requestHandlerTypeName} => {
      ${parameterTypes
        .map(
          ({ typeName, requestProperty }) => `
        const ${requestProperty} = ajv.getSchema('#/definitions/${typeName}')!;
      `
        )
        .join('\n')}

      return (req, res, next) => {
        if ([
          ${parameterTypes
            .map(
              ({ requestProperty }) => `
            ${requestProperty}(req.${requestProperty})
          `
            )
            .join(',\n')}
        ].every(r => r)) {
          return next();
        }

        const fields = ([
          ${parameterTypes
            .map(
              ({ requestProperty }) => `
            [${requestProperty}, '${requestProperty}']
          `
            )
            .join(',\n')}
        ] as const).flatMap(([validator, path]) =>
          validator.errors?.map(e => ({
            path: ` +
    '`${path}${e.dataPath}`,' +
    `
            message: e.message ?? 'Unknown'
          }))
        ).compact();

        options?.logger?.(req as Request)('Request validation failed', { fields });

        res.status(400).send({
          type: 'REQUEST_VALIDATION_FAILED',
          fields
        });
      };
    };
  `
  );
};
