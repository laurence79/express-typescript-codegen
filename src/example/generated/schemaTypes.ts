export type BadRequest = { errors: Array<string> };

export type TokenResponse = { access_token: string; expires_in: number };

export type GrantResponse = {
  id: string;
  userId: string;
  createDateTime?: string;
  grantedByUserId?: string;
  global?: { role: 'ADMIN' };
  venue?: { id: string; role: 'MANAGER' };
};

export type GrantRequest = {
  userId: string;
  global?: { role: 'ADMIN' };
  venue?: { id: string; role: 'MANAGER' };
};

export type GetHealth200ResponseBody = { ok?: boolean };

export type PostAnonymousRequestBody = { seed: string };

export type PostAnonymous200ResponseBody = TokenResponse;

export type PostAnonymous400ResponseBody = BadRequest;

export type PostCreateRequestBody = {
  emailAddress: string;
  password: string;
  displayName: string;
  photoUrl?: string;
};

export type PostCreate200ResponseBody = { uid: string };

export type PostCreate400ResponseBody = BadRequest;

export type PostLoginRequestBody = { emailAddress: string; password: string };

export type PostLogin200ResponseBody = TokenResponse;

export type PostLogin400ResponseBody = BadRequest;

export type PostVerify200ResponseBody = TokenResponse;

export type GetGrants200ResponseBody = Array<GrantResponse>;

export type GetGrants400ResponseBody = BadRequest;

export type PostGrantsRequestBody = GrantRequest;

export type PostGrants200ResponseBody = GrantResponse;

export type PostGrants400ResponseBody = BadRequest;

export type GetGrantById200ResponseBody = GrantResponse;

export type GetGrantById400ResponseBody = BadRequest;

export type DeleteGrantById400ResponseBody = BadRequest;
