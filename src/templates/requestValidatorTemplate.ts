/* eslint-disable no-template-curly-in-string */
export const requestValidatorTemplate = ({
  functionName,
  parameterTypes
}: {
  functionName: string;
  parameterTypes: {
    typeName: string;
    requestProperty: string;
  }[];
}): string => {
  return (
    `
    const ${functionName} = (options?: ValidationOptions): RequestHandler => {
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

        const errors = ([
          ${parameterTypes
            .map(
              ({ requestProperty }) => `
            [${requestProperty}, '${requestProperty}']
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
};
