export type ControllerTemplateArgs = {
  httpMethod: string;
  expressPath: string;
  requestTypeName: string;
  responseTypeName: string;
  controllerTypeName: string;
  controllerMethodName: string;
  pathParamsType?: string;
  bodyParamType?: string;
  queryParamsType?: string;
  responseTypes?: {
    bodyType?: string;
    statusCodeType?: string;
  }[];
};

export const controllerTemplate = ({
  requestTypeName,
  responseTypeName,
  controllerTypeName,
  controllerMethodName,
  pathParamsType = 'ParamsDictionary',
  bodyParamType = 'unknown',
  queryParamsType = 'ParsedQs',
  responseTypes = [{ bodyType: 'unknown', statusCodeType: 'number' }]
}: ControllerTemplateArgs): string => {
  return `
    export type ${requestTypeName} = Request<
      ${pathParamsType},
      ${
        responseTypes
          .compactMap(({ bodyType }) => bodyType)
          .distinct()
          .join(' | ') || 'unknown'
      },
      ${bodyParamType},
      ${queryParamsType},
      Record<string, any>
    >;

    export type ${responseTypeName} = ${responseTypes
    .map(
      ({ bodyType = 'unknown', statusCodeType = 'number' }) => `
      Response<
        ${bodyType},
        Record<string, any>,
        ${statusCodeType}
      >
    `
    )
    .join(' | ')};

    export interface ${controllerTypeName} {
      ${controllerMethodName}(
        req: ${requestTypeName},
        res: ${responseTypeName},
        next: NextFunction
      ): Promise<unknown | void>;
    }`;
};
