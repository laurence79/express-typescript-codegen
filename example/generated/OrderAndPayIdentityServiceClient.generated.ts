import qs from 'qs';
import { fetch } from 'cross-fetch';

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

type ResponseWithData<TStatus, TData> = {
  status: TStatus;
  body: TData;
};

type LogFn = (message: string, data: Record<string, unknown>) => void;

export class OrderAndPayIdentityServiceClient {
  public constructor(
    public readonly baseUrl: string,
    private readonly logger?: LogFn
  ) {}

  public async getHealth(): Promise<ResponseWithData<200, { ok?: boolean }>> {
    const method = 'GET';
    const url = `${this.baseUrl}/health`;

    const response = await fetch(url, {
      method
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as { ok?: boolean }
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async postAnonymous(args: {
    Body: { seed: string };
  }): Promise<
    ResponseWithData<200, TokenResponse> | ResponseWithData<400, BadRequest>
  > {
    const { Body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/anonymous`;

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Body)
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as TokenResponse
        };

      case 400:
        return {
          status: $status,
          body: (await response.json()) as BadRequest
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async postCreate(args: {
    Body: {
      emailAddress: string;
      password: string;
      displayName: string;
      photoUrl?: string;
    };
  }): Promise<
    ResponseWithData<200, { uid: string }> | ResponseWithData<400, BadRequest>
  > {
    const { Body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/create`;

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Body)
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as { uid: string }
        };

      case 400:
        return {
          status: $status,
          body: (await response.json()) as BadRequest
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async postLogin(args: {
    Body: { emailAddress: string; password: string };
  }): Promise<
    ResponseWithData<200, TokenResponse> | ResponseWithData<400, BadRequest>
  > {
    const { Body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/login`;

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Body)
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as TokenResponse
        };

      case 400:
        return {
          status: $status,
          body: (await response.json()) as BadRequest
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async postVerify(args: {
    authorization: string;
  }): Promise<
    | ResponseWithData<200, TokenResponse>
    | ResponseWithData<204, unknown>
    | ResponseWithData<401, unknown>
  > {
    const { authorization } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/verify`;

    const response = await fetch(url, {
      method,
      headers: { authorization }
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as TokenResponse
        };

      case 204:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      case 401:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async getGrants(args: {
    authorization: string;
    venueId?: string;
    userId?: string;
    limit?: string;
    fromCreateDateTime?: string;
  }): Promise<
    | ResponseWithData<200, Array<GrantResponse>>
    | ResponseWithData<400, BadRequest>
    | ResponseWithData<401, unknown>
    | ResponseWithData<403, unknown>
  > {
    const { authorization, venueId, userId, limit, fromCreateDateTime } = args;

    const query = qs.stringify({ venueId, userId, limit, fromCreateDateTime });

    const method = 'GET';
    const url = `${this.baseUrl}/grants?${query}`;

    const response = await fetch(url, {
      method,
      headers: { authorization }
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as Array<GrantResponse>
        };

      case 400:
        return {
          status: $status,
          body: (await response.json()) as BadRequest
        };

      case 401:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      case 403:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async postGrants(args: {
    authorization: string;
    Body: GrantRequest;
  }): Promise<
    | ResponseWithData<200, GrantResponse>
    | ResponseWithData<400, BadRequest>
    | ResponseWithData<401, unknown>
    | ResponseWithData<403, unknown>
  > {
    const { authorization, Body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/grants`;

    const response = await fetch(url, {
      method,
      headers: { authorization, 'Content-Type': 'application/json' },
      body: JSON.stringify(Body)
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as GrantResponse
        };

      case 400:
        return {
          status: $status,
          body: (await response.json()) as BadRequest
        };

      case 401:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      case 403:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async getGrantById(args: {
    authorization: string;
    grantId: string;
  }): Promise<
    | ResponseWithData<200, GrantResponse>
    | ResponseWithData<400, BadRequest>
    | ResponseWithData<401, unknown>
    | ResponseWithData<403, unknown>
    | ResponseWithData<404, unknown>
  > {
    const { authorization, grantId } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/grants/${grantId}`;

    const response = await fetch(url, {
      method,
      headers: { authorization }
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as GrantResponse
        };

      case 400:
        return {
          status: $status,
          body: (await response.json()) as BadRequest
        };

      case 401:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      case 403:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      case 404:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async deleteGrantById(args: {
    authorization: string;
    grantId: string;
  }): Promise<
    | ResponseWithData<200, unknown>
    | ResponseWithData<400, BadRequest>
    | ResponseWithData<401, unknown>
    | ResponseWithData<403, unknown>
    | ResponseWithData<404, unknown>
  > {
    const { authorization, grantId } = args;

    const method = 'DELETE';
    const url = `${this.baseUrl}/grants/${grantId}`;

    const response = await fetch(url, {
      method,
      headers: { authorization }
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      case 400:
        return {
          status: $status,
          body: (await response.json()) as BadRequest
        };

      case 401:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      case 403:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      case 404:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }
}
