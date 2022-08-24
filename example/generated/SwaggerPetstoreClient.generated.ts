import qs from 'qs';
import { fetch } from 'cross-fetch';

export type ApiResponse = {
  code: number | null;
  type: string | null;
  message: string | null;
};

export type Category = { id: number | null; name: string | null };

export type Pet = {
  id: number | null;
  category: Category | null;
  name: string;
  photoUrls: Array<string>;
  tags: Array<Tag> | null;
  status: 'available' | 'pending' | 'sold' | null;
};

export type Tag = { id: number | null; name: string | null };

export type Order = {
  id: number | null;
  petId: number | null;
  quantity: number | null;
  shipDate: string | null;
  status: 'placed' | 'approved' | 'delivered' | null;
  complete: boolean | null;
};

export type User = {
  id: number | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  phone: string | null;
  userStatus: number | null;
};

type ResponseWithData<TStatus, TData> = {
  status: TStatus;
  body: TData;
};

type LogFn = (message: string, data: Record<string, unknown>) => void;

export class SwaggerPetstoreClient {
  public constructor(
    public readonly baseUrl: string,
    private readonly logger?: LogFn
  ) {}

  public async addPet(
    args: { body: Pet; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<ResponseWithData<405, undefined>> {
    const { body, headers } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/pet`;

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 405:
        return {
          status: $status,
          body: undefined
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async updatePet(
    args: { body: Pet; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
    | ResponseWithData<405, undefined>
  > {
    const { body, headers } = args;

    const method = 'PUT';
    const url = `${this.baseUrl}/pet`;

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

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
  }

  public async findPetsByStatus(
    args: { status: string; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<
    ResponseWithData<200, Array<Pet>> | ResponseWithData<400, undefined>
  > {
    const { status, headers } = args;

    const query = qs.stringify({ status });

    const method = 'GET';
    const url = `${this.baseUrl}/pet/findByStatus?${query}`;

    const response = await fetch(url, {
      method,
      headers: { ...headers },
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as Array<Pet>
        };

      case 400:
        return {
          status: $status,
          body: undefined
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async findPetsByTags(
    args: { tags: string; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<
    ResponseWithData<200, Array<Pet>> | ResponseWithData<400, undefined>
  > {
    const { tags, headers } = args;

    const query = qs.stringify({ tags });

    const method = 'GET';
    const url = `${this.baseUrl}/pet/findByTags?${query}`;

    const response = await fetch(url, {
      method,
      headers: { ...headers },
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as Array<Pet>
        };

      case 400:
        return {
          status: $status,
          body: undefined
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async getPetById(
    args: { petId: number; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<200, Pet>
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
  > {
    const { petId, headers } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/pet/${petId}`;

    const response = await fetch(url, {
      method,
      headers: { ...headers },
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

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
  }

  public async updatePetWithForm(
    args: {
      petId: number;
      body: { name?: string; status?: string };
      headers?: HeadersInit;
    },
    options?: RequestInit
  ): Promise<ResponseWithData<405, undefined>> {
    const { petId, body, headers } = args;

    const formData = new FormData();
    if (body.name) formData.append('name', body.name);
    if (body.status) formData.append('status', body.status);

    const method = 'POST';
    const url = `${this.baseUrl}/pet/${petId}`;

    const response = await fetch(url, {
      method,
      headers: { ...headers },
      body: formData,
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 405:
        return {
          status: $status,
          body: undefined
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async deletePet(
    args: { api_key?: string; petId: number; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const { api_key, petId, headers } = args;

    const method = 'DELETE';
    const url = `${this.baseUrl}/pet/${petId}`;

    const response = await fetch(url, {
      method,
      headers: {
        ...(typeof api_key !== 'undefined' ? { api_key } : {}),
        ...headers
      },
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

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
  }

  public async placeOrder(
    args: { body: Order; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<ResponseWithData<200, Order> | ResponseWithData<400, undefined>> {
    const { body, headers } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/store/order`;

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

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
  }

  public async getOrderById(
    args: { orderId: number; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<200, Order>
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
  > {
    const { orderId, headers } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/store/order/${orderId}`;

    const response = await fetch(url, {
      method,
      headers: { ...headers },
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

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
  }

  public async deleteOrder(
    args: { orderId: number; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const { orderId, headers } = args;

    const method = 'DELETE';
    const url = `${this.baseUrl}/store/order/${orderId}`;

    const response = await fetch(url, {
      method,
      headers: { ...headers },
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

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
  }

  public async getInventory(
    args: { headers?: HeadersInit },
    options?: RequestInit
  ): Promise<ResponseWithData<200, unknown>> {
    const { headers } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/store/inventory`;

    const response = await fetch(url, {
      method,
      headers: { ...headers },
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as unknown
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async createUsersWithArrayInput(
    args: { body: Array<User>; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const { body, headers } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/user/createWithArray`;

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      default:
        return {
          status: $status,
          body: undefined
        };
    }
  }

  public async createUsersWithListInput(
    args: { body: Array<User>; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const { body, headers } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/user/createWithList`;

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      default:
        return {
          status: $status,
          body: undefined
        };
    }
  }

  public async getUserByName(
    args: { username: string; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<200, User>
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
  > {
    const { username, headers } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/user/${username}`;

    const response = await fetch(url, {
      method,
      headers: { ...headers },
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

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
  }

  public async updateUser(
    args: { username: string; body: User; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const { username, body, headers } = args;

    const method = 'PUT';
    const url = `${this.baseUrl}/user/${username}`;

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

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
  }

  public async deleteUser(
    args: { username: string; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const { username, headers } = args;

    const method = 'DELETE';
    const url = `${this.baseUrl}/user/${username}`;

    const response = await fetch(url, {
      method,
      headers: { ...headers },
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

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
  }

  public async loginUser(
    args: { username: string; password: string; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<ResponseWithData<200, string> | ResponseWithData<400, undefined>> {
    const { username, password, headers } = args;

    const query = qs.stringify({ username, password });

    const method = 'GET';
    const url = `${this.baseUrl}/user/login?${query}`;

    const response = await fetch(url, {
      method,
      headers: { ...headers },
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

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
  }

  public async logoutUser(
    args: { headers?: HeadersInit },
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const { headers } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/user/logout`;

    const response = await fetch(url, {
      method,
      headers: { ...headers },
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      default:
        return {
          status: $status,
          body: undefined
        };
    }
  }

  public async createUser(
    args: { body: User; headers?: HeadersInit },
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const { body, headers } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/user`;

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      ...options
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      default:
        return {
          status: $status,
          body: undefined
        };
    }
  }
}
