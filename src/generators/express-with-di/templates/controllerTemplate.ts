import { JSONSchema7 } from 'json-schema';

export interface ControllerTemplateArgs {
  httpMethod: string;
  expressPath: string;
  requestTypeName: string;
  responseTypeName: string;
  controllerTypeName: string;
  controllerMethodName: string;
  pathParamsType?: string;
  responseBodyType: string;
  bodyParamType: string;
  queryParamsType?: string;
  statusCodeType?: string;
  querySchema?: JSONSchema7;
  bodySchema?: JSONSchema7;
  pathSchema?: JSONSchema7;
}
export const controllerTemplate = ({
  requestTypeName,
  responseTypeName,
  controllerTypeName,
  controllerMethodName,
  pathParamsType = 'ParamsDictionary',
  responseBodyType,
  bodyParamType,
  queryParamsType = 'ParsedQs',
  statusCodeType = 'number'
}: ControllerTemplateArgs): string => {
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

    export abstract class ${controllerTypeName} {
      abstract ${controllerMethodName}(
        req: ${requestTypeName},
        res: ${responseTypeName},
        next: NextFunction
      ): Promise<unknown | void>;
    }`;
};
