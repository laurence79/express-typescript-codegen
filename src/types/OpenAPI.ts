import * as OpenAPIV2 from './OpenAPIV2';
import * as OpenAPIV3 from './OpenAPIV3';

export type Document = OpenAPIV2.Document | OpenAPIV3.Document;
export type Operation = OpenAPIV2.OperationObject | OpenAPIV3.OperationObject;
export type Parameter =
  | OpenAPIV3.ReferenceObject
  | OpenAPIV3.ParameterObject
  | OpenAPIV2.ReferenceObject
  | OpenAPIV2.Parameter;
export type Parameters =
  | (OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject)[]
  | (OpenAPIV2.ReferenceObject | OpenAPIV2.Parameter)[];

export interface Request {
  body?: any;
  headers?: Record<string, unknown>;
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
}
