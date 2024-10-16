/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Document {
  openapi: string;
  info: InfoObject;
  servers?: ServerObject[];
  paths: PathsObject;
  components?: ComponentsObject;
  security?: SecurityRequirementObject[];
  tags?: TagObject[];
  externalDocs?: ExternalDocumentationObject;
  'x-express-openapi-additional-middleware'?: (
    | ((request: any, response: any, next: any) => Promise<void>)
    | ((request: any, response: any, next: any) => void)
  )[];
  'x-express-openapi-validation-strict'?: boolean;
}

export interface InfoObject {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: ContactObject;
  license?: LicenseObject;
  version: string;
}

export interface ContactObject {
  name?: string;
  url?: string;
  email?: string;
}

export interface LicenseObject {
  name: string;
  url?: string;
}

export interface ServerObject {
  url: string;
  description?: string;
  variables?: Record<string, ServerVariableObject>;
}

export interface ServerVariableObject {
  enum?: string[];
  default: string;
  description?: string;
}

export type PathsObject = Record<string, PathItemObject>;

export interface PathItemObject {
  $ref?: string;
  summary?: string;
  description?: string;
  get?: OperationObject;
  put?: OperationObject;
  post?: OperationObject;
  delete?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
  patch?: OperationObject;
  trace?: OperationObject;
  servers?: ServerObject[];
  parameters?: (ReferenceObject | ParameterObject)[];
}

export interface OperationObject {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocumentationObject;
  operationId?: string;
  parameters?: (ReferenceObject | ParameterObject)[];
  requestBody?: ReferenceObject | RequestBodyObject;
  responses?: ResponsesObject;
  callbacks?: Record<string, ReferenceObject | CallbackObject>;
  deprecated?: boolean;
  security?: SecurityRequirementObject[];
  servers?: ServerObject[];
}

export interface ExternalDocumentationObject {
  description?: string;
  url: string;
}

export interface ParameterObject extends ParameterBaseObject {
  name: string;
  in: 'path' | 'query' | 'header' | 'cookie';
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HeaderObject extends ParameterBaseObject {}

export interface ParameterBaseObject {
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: ReferenceObject | SchemaObject;
  example?: any;
  examples?: Record<string, ReferenceObject | ExampleObject>;
  content?: Record<string, MediaTypeObject>;
}
export type NonArraySchemaObjectType =
  | 'boolean'
  | 'object'
  | 'number'
  | 'string'
  | 'integer';
export type ArraySchemaObjectType = 'array';
export type SchemaObject = ArraySchemaObject | NonArraySchemaObject;

export interface ArraySchemaObject extends BaseSchemaObject {
  type: ArraySchemaObjectType;
  items: ReferenceObject | SchemaObject;
}

export interface NonArraySchemaObject extends BaseSchemaObject {
  type?: NonArraySchemaObjectType;
}

export interface BaseSchemaObject {
  // JSON schema allowed properties, adjusted for OpenApi
  title?: string;
  description?: string;
  format?: string;
  default?: any;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  additionalProperties?: boolean | ReferenceObject | SchemaObject;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  enum?: any[];
  properties?: Record<string, ReferenceObject | SchemaObject>;
  allOf?: (ReferenceObject | SchemaObject)[];
  oneOf?: (ReferenceObject | SchemaObject)[];
  anyOf?: (ReferenceObject | SchemaObject)[];
  not?: ReferenceObject | SchemaObject;

  // OpenApi-specific properties
  nullable?: boolean;
  discriminator?: DiscriminatorObject;
  readOnly?: boolean;
  writeOnly?: boolean;
  xml?: XMLObject;
  externalDocs?: ExternalDocumentationObject;
  example?: any;
  deprecated?: boolean;
}

export interface DiscriminatorObject {
  propertyName: string;
  mapping?: Record<string, string>;
}

export interface XMLObject {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
}

export interface ReferenceObject {
  $ref: string;
}

export interface ExampleObject {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
}

export interface MediaTypeObject {
  schema?: ReferenceObject | SchemaObject;
  example?: any;
  examples?: Record<string, ReferenceObject | ExampleObject>;
  encoding?: Record<string, EncodingObject>;
}

export interface EncodingObject {
  contentType?: string;
  headers?: Record<string, ReferenceObject | HeaderObject>;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
}

export interface RequestBodyObject {
  description?: string;
  content: Partial<Record<string, MediaTypeObject>>;
  required?: boolean;
}

export type ResponsesObject = Record<string, ReferenceObject | ResponseObject>;

export interface ResponseObject {
  description: string;
  headers?: Record<string, ReferenceObject | HeaderObject>;
  content?: Record<string, MediaTypeObject>;
  links?: Record<string, ReferenceObject | LinkObject>;
}

export interface LinkObject {
  operationRef?: string;
  operationId?: string;
  parameters?: Record<string, any>;
  requestBody?: any;
  description?: string;
  server?: ServerObject;
}

export type CallbackObject = Record<string, PathItemObject>;

export type SecurityRequirementObject = Record<string, string[]>;

export interface ComponentsObject {
  schemas?: Record<string, ReferenceObject | SchemaObject>;
  responses?: Record<string, ReferenceObject | ResponseObject>;
  parameters?: Record<string, ReferenceObject | ParameterObject>;
  examples?: Record<string, ReferenceObject | ExampleObject>;
  requestBodies?: Record<string, ReferenceObject | RequestBodyObject>;
  headers?: Record<string, ReferenceObject | HeaderObject>;
  securitySchemes?: Record<string, ReferenceObject | SecuritySchemeObject>;
  links?: Record<string, ReferenceObject | LinkObject>;
  callbacks?: Record<string, ReferenceObject | CallbackObject>;
}

export type SecuritySchemeObject =
  | HttpSecurityScheme
  | ApiKeySecurityScheme
  | OAuth2SecurityScheme
  | OpenIdSecurityScheme;

export interface HttpSecurityScheme {
  type: 'http';
  description?: string;
  scheme: string;
  bearerFormat?: string;
}

export interface ApiKeySecurityScheme {
  type: 'apiKey';
  description?: string;
  name: string;
  in: string;
}

export interface OAuth2SecurityScheme {
  type: 'oauth2';
  flows: {
    implicit?: {
      authorizationUrl: string;
      refreshUrl?: string;
      scopes: Record<string, string>;
    };
    password?: {
      tokenUrl: string;
      refreshUrl?: string;
      scopes: Record<string, string>;
    };
    clientCredentials?: {
      tokenUrl: string;
      refreshUrl?: string;
      scopes: Record<string, string>;
    };
    authorizationCode?: {
      authorizationUrl: string;
      tokenUrl: string;
      refreshUrl?: string;
      scopes: Record<string, string>;
    };
  };
}

export interface OpenIdSecurityScheme {
  type: 'openIdConnect';
  description?: string;
  openIdConnectUrl: string;
}

export interface TagObject {
  name: string;
  description?: string;
  externalDocs?: ExternalDocumentationObject;
}
