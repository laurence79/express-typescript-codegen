/* eslint-disable @typescript-eslint/no-explicit-any */
import * as OpenApiV2 from './OpenApiV2';
import * as OpenApiV3 from './OpenApiV3';

export type Document = OpenApiV2.Document | OpenApiV3.Document;
export type Operation = OpenApiV2.OperationObject | OpenApiV3.OperationObject;
export type ReferenceObject =
  | OpenApiV2.ReferenceObject
  | OpenApiV3.ReferenceObject;
export type Parameter =
  | OpenApiV3.ReferenceObject
  | OpenApiV3.ParameterObject
  | OpenApiV2.ReferenceObject
  | OpenApiV2.Parameter;
export type Parameters =
  | (OpenApiV3.ReferenceObject | OpenApiV3.ParameterObject)[]
  | (OpenApiV2.ReferenceObject | OpenApiV2.Parameter)[];

export interface Request {
  body?: any;
  headers?: Record<string, unknown>;
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
}
