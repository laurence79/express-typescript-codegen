export type RequestHandlerTemplateArgs = {
  methodName: string;
  typeName: string;
  pathParamsType?: string;
  responseBodyType?: string;
  bodyParamType?: string;
  queryParamsType?: string;
  statusCodeType?: string;
};
export const requestHandlerTemplate = ({
  typeName,
  pathParamsType = 'unknown',
  responseBodyType = 'unknown',
  bodyParamType = 'unknown',
  queryParamsType = 'ParsedQs',
  statusCodeType = 'number'
}: RequestHandlerTemplateArgs): string => {
  return `
    export type ${typeName} = RequestHandler<
      ${pathParamsType},
      ${responseBodyType},
      ${bodyParamType},
      ${queryParamsType},
      Record<string, any>,
      ${statusCodeType}
    >`;
};
