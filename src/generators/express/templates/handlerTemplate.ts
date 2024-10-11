import { JSONSchema7 } from 'json-schema';

export type HandlerTemplateArgs = {
  httpMethod: string;
  expressPath: string;
  requestTypeName: string;
  responseTypeName: string;
  handlerTypeName: string;
  handlerInstanceName: string;
  pathParamsType?: string;
  responseBodyType?: string;
  bodyParamType?: string;
  queryParamsType?: string;
  statusCodeType?: string;
  querySchema?: JSONSchema7;
  bodySchema?: JSONSchema7;
  pathSchema?: JSONSchema7;
};
export const handlerTemplate = ({
  requestTypeName,
  responseTypeName,
  handlerTypeName,
  pathParamsType = 'ParamsDictionary',
  responseBodyType = 'unknown',
  bodyParamType = 'unknown',
  queryParamsType = 'ParsedQs',
  statusCodeType = 'number'
}: HandlerTemplateArgs): string => {
  return `
    export type ${requestTypeName} = Request<
      ${pathParamsType},
      ${responseBodyType},
      ${bodyParamType},
      ${queryParamsType},
      Record<string, any>
    >;

    export type ${responseTypeName} = Response<
      ${responseBodyType},
      Record<string, any>,
      ${statusCodeType}
    >;

    export type ${handlerTypeName} = (
      req: ${requestTypeName},
      res: ${responseTypeName},
      next: NextFunction
    ) => Promise<void> | void;
     
  `;
};
