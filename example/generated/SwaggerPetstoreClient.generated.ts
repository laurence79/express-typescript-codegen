import qs from 'qs';

export type Category = { readonly id?: number; readonly name?: string };

export type Tag = { readonly id?: number; readonly name?: string };

export type Pet = {
  readonly id?: number;
  readonly category?: Category;
  readonly name: string;
  readonly photoUrls: ReadonlyArray<string>;
  readonly tags?: ReadonlyArray<Tag>;
  readonly status?: 'available' | 'pending' | 'sold';
};

export type Order = {
  readonly id?: number;
  readonly petId?: number;
  readonly quantity?: number;
  readonly shipDate?: string;
  readonly status?: 'placed' | 'approved' | 'delivered';
  readonly complete?: boolean;
};

export type User = {
  readonly id?: number;
  readonly username?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly password?: string;
  readonly phone?: string;
  readonly userStatus?: number;
};

type ResponseWithData<TStatus, TData> = {
  status: TStatus;
  body: TData;
};

type LegacyLogFn = (message: string, data: Record<string, unknown>) => void;

type Logger = Pick<typeof console, 'info' | 'error'>;

export interface SwaggerPetstoreClientOptions {
  fetch: typeof fetch;
  logger: Logger | null;
  requestOptions: RequestInit;
}

export class SwaggerPetstoreClient {
  public constructor(
    public readonly baseUrl: string,
    options?: Partial<SwaggerPetstoreClientOptions> | LegacyLogFn
  ) {
    if (typeof options === 'function') {
      this.options = {
        fetch,
        logger: {
          info: options,
          error: options
        },
        requestOptions: {}
      };
    } else {
      this.options = {
        fetch,
        logger: console,
        requestOptions: {},
        ...options
      };
    }
  }

  private readonly options: SwaggerPetstoreClientOptions;

  public async addPet(
    args: { readonly body: Pet },
    options?: RequestInit
  ): Promise<ResponseWithData<405, undefined>> {
    const method = 'POST';
    const url = `${this.baseUrl}/pet`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
        ...this.options.requestOptions.headers
      }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 405:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async updatePet(
    args: { readonly body: Pet },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
    | ResponseWithData<405, undefined>
  > {
    const method = 'PUT';
    const url = `${this.baseUrl}/pet`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
        ...this.options.requestOptions.headers
      }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 400:
          return {
            status: $status,
            body: undefined
          };

        case 404:
          return {
            status: $status,
            body: undefined
          };

        case 405:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async findPetsByStatus(
    args: { readonly status: string },
    options?: RequestInit
  ): Promise<
    ResponseWithData<200, ReadonlyArray<Pet>> | ResponseWithData<400, undefined>
  > {
    const query = qs.stringify({ ['status']: args['status'] });

    const method = 'GET';
    const url = `${this.baseUrl}/pet/findByStatus?${query}`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      headers: { ...options?.headers, ...this.options.requestOptions.headers }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 200:
          return {
            status: $status,
            body: (await response.json()) as ReadonlyArray<Pet>
          };

        case 400:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async findPetsByTags(
    args: { readonly tags: string },
    options?: RequestInit
  ): Promise<
    ResponseWithData<200, ReadonlyArray<Pet>> | ResponseWithData<400, undefined>
  > {
    const query = qs.stringify({ ['tags']: args['tags'] });

    const method = 'GET';
    const url = `${this.baseUrl}/pet/findByTags?${query}`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      headers: { ...options?.headers, ...this.options.requestOptions.headers }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 200:
          return {
            status: $status,
            body: (await response.json()) as ReadonlyArray<Pet>
          };

        case 400:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async getPetById(
    args: { readonly petId: number },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<200, Pet>
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
  > {
    const method = 'GET';
    const url = `${this.baseUrl}/pet/${encodeURIComponent(args['petId'])}`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      headers: { ...options?.headers, ...this.options.requestOptions.headers }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 200:
          return {
            status: $status,
            body: (await response.json()) as Pet
          };

        case 400:
          return {
            status: $status,
            body: undefined
          };

        case 404:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async updatePetWithForm(
    args: {
      readonly petId: number;
      readonly body: { readonly name?: string; readonly status?: string };
    },
    options?: RequestInit
  ): Promise<ResponseWithData<405, undefined>> {
    const formData = new FormData();
    if (args.body['name']) formData.append('name', args.body['name']);
    if (args.body['status']) formData.append('status', args.body['status']);

    const method = 'POST';
    const url = `${this.baseUrl}/pet/${encodeURIComponent(args['petId'])}`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      body: formData,
      headers: { ...options?.headers, ...this.options.requestOptions.headers }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 405:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async deletePet(
    args: { readonly api_key?: string; readonly petId: number },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const method = 'DELETE';
    const url = `${this.baseUrl}/pet/${encodeURIComponent(args['petId'])}`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      headers: {
        ...(typeof args['api_key'] !== 'undefined' && args['api_key'] !== null
          ? { ['api_key']: args['api_key'] }
          : {}),
        ...options?.headers,
        ...this.options.requestOptions.headers
      }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 400:
          return {
            status: $status,
            body: undefined
          };

        case 404:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async placeOrder(
    args: { readonly body: Order },
    options?: RequestInit
  ): Promise<ResponseWithData<200, Order> | ResponseWithData<400, undefined>> {
    const method = 'POST';
    const url = `${this.baseUrl}/store/order`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
        ...this.options.requestOptions.headers
      }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 200:
          return {
            status: $status,
            body: (await response.json()) as Order
          };

        case 400:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async getOrderById(
    args: { readonly orderId: number },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<200, Order>
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
  > {
    const method = 'GET';
    const url = `${this.baseUrl}/store/order/${encodeURIComponent(
      args['orderId']
    )}`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      headers: { ...options?.headers, ...this.options.requestOptions.headers }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 200:
          return {
            status: $status,
            body: (await response.json()) as Order
          };

        case 400:
          return {
            status: $status,
            body: undefined
          };

        case 404:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async deleteOrder(
    args: { readonly orderId: number },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const method = 'DELETE';
    const url = `${this.baseUrl}/store/order/${encodeURIComponent(
      args['orderId']
    )}`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      headers: { ...options?.headers, ...this.options.requestOptions.headers }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 400:
          return {
            status: $status,
            body: undefined
          };

        case 404:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async getInventory(
    options?: RequestInit
  ): Promise<ResponseWithData<200, unknown>> {
    const method = 'GET';
    const url = `${this.baseUrl}/store/inventory`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      headers: { ...options?.headers, ...this.options.requestOptions.headers }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 200:
          return {
            status: $status,
            body: (await response.json()) as unknown
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async createUsersWithArrayInput(
    args: { readonly body: ReadonlyArray<User> },
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const method = 'POST';
    const url = `${this.baseUrl}/user/createWithArray`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
        ...this.options.requestOptions.headers
      }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        default:
          return {
            status: $status,
            body: undefined
          };
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async createUsersWithListInput(
    args: { readonly body: ReadonlyArray<User> },
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const method = 'POST';
    const url = `${this.baseUrl}/user/createWithList`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
        ...this.options.requestOptions.headers
      }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        default:
          return {
            status: $status,
            body: undefined
          };
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async getUserByName(
    args: { readonly username: string },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<200, User>
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
  > {
    const method = 'GET';
    const url = `${this.baseUrl}/user/${encodeURIComponent(args['username'])}`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      headers: { ...options?.headers, ...this.options.requestOptions.headers }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 200:
          return {
            status: $status,
            body: (await response.json()) as User
          };

        case 400:
          return {
            status: $status,
            body: undefined
          };

        case 404:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async updateUser(
    args: { readonly username: string; readonly body: User },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const method = 'PUT';
    const url = `${this.baseUrl}/user/${encodeURIComponent(args['username'])}`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
        ...this.options.requestOptions.headers
      }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 400:
          return {
            status: $status,
            body: undefined
          };

        case 404:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async deleteUser(
    args: { readonly username: string },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const method = 'DELETE';
    const url = `${this.baseUrl}/user/${encodeURIComponent(args['username'])}`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      headers: { ...options?.headers, ...this.options.requestOptions.headers }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 400:
          return {
            status: $status,
            body: undefined
          };

        case 404:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async loginUser(
    args: { readonly username: string; readonly password: string },
    options?: RequestInit
  ): Promise<ResponseWithData<200, string> | ResponseWithData<400, undefined>> {
    const query = qs.stringify({
      ['username']: args['username'],
      ['password']: args['password']
    });

    const method = 'GET';
    const url = `${this.baseUrl}/user/login?${query}`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      headers: { ...options?.headers, ...this.options.requestOptions.headers }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        case 200:
          return {
            status: $status,
            body: (await response.json()) as string
          };

        case 400:
          return {
            status: $status,
            body: undefined
          };

        default:
          throw new Error(`Unexpected status ${$status}`);
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async logoutUser(
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const method = 'GET';
    const url = `${this.baseUrl}/user/logout`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      headers: { ...options?.headers, ...this.options.requestOptions.headers }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        default:
          return {
            status: $status,
            body: undefined
          };
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }

  public async createUser(
    args: { readonly body: User },
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const method = 'POST';
    const url = `${this.baseUrl}/user`;
    const fetchOptions = {
      method,
      ...options,
      ...this.options.requestOptions,
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
        ...this.options.requestOptions.headers
      }
    };

    try {
      const response = await this.options.fetch(url, fetchOptions);

      const { status: $status } = response;

      this.options.logger?.info(
        `[${fetchOptions.method}] ${url} status ${String($status)}`,
        { responseHeaders: response.headers }
      );

      switch ($status) {
        default:
          return {
            status: $status,
            body: undefined
          };
      }
    } catch (error: unknown) {
      this.options.logger?.error(
        `Error while ${fetchOptions.method}ing from/to ${url}`,
        { error }
      );

      throw error;
    }
  }
}
