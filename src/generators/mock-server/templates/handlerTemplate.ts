export interface HandlerTemplateArgs {
  httpMethod: string;
  expressPath: string;
  handlerTypeName: string;
  handlerInstanceName: string;
  pathParamsType?: string;
  responseBodyType: string;
  bodyParamType: string;
  queryParamsType?: string;
  statusCodeType?: string;
}

export const handlerTemplate = ({
  handlerTypeName,
  pathParamsType = 'ParamsDictionary',
  responseBodyType,
  bodyParamType,
  queryParamsType = 'ParsedQs',
  statusCodeType = 'number'
}: HandlerTemplateArgs): string => {
  return `
    export type ${handlerTypeName} = (
      req: Request<
        ${pathParamsType},
        ${responseBodyType},
        ${bodyParamType},
        ${queryParamsType},
        Record<string, any>
      >,
      res: Response<
        ${responseBodyType},
        Record<string, any>,
        ${statusCodeType}
      >,
      next: NextFunction
    ) => Promise<void> | void;

  `;
};
