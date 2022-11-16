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
    args: { body: Pet },
    options?: RequestInit
  ): Promise<ResponseWithData<405, undefined>> {
    const { body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/pet`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
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
    args: { body: Pet },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
    | ResponseWithData<405, undefined>
  > {
    const { body } = args;

    const method = 'PUT';
    const url = `${this.baseUrl}/pet`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
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
    args: { status: string },
    options?: RequestInit
  ): Promise<
    ResponseWithData<200, Array<Pet>> | ResponseWithData<400, undefined>
  > {
    const { status } = args;

    const query = qs.stringify({ ['status']: status });

    const method = 'GET';
    const url = `${this.baseUrl}/pet/findByStatus?${query}`;

    const response = await fetch(url, {
      method,
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
    args: { tags: string },
    options?: RequestInit
  ): Promise<
    ResponseWithData<200, Array<Pet>> | ResponseWithData<400, undefined>
  > {
    const { tags } = args;

    const query = qs.stringify({ ['tags']: tags });

    const method = 'GET';
    const url = `${this.baseUrl}/pet/findByTags?${query}`;

    const response = await fetch(url, {
      method,
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
    args: { petId: number },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<200, Pet>
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
  > {
    const { petId } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/pet/${petId}`;

    const response = await fetch(url, {
      method,
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
    args: { petId: number; body: { name?: string; status?: string } },
    options?: RequestInit
  ): Promise<ResponseWithData<405, undefined>> {
    const { petId, body } = args;

    const formData = new FormData();
    if (body.name) formData.append('name', body.name);
    if (body.status) formData.append('status', body.status);

    const method = 'POST';
    const url = `${this.baseUrl}/pet/${petId}`;

    const response = await fetch(url, {
      method,
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
    args: { api_key?: string; petId: number },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const { api_key, petId } = args;

    const method = 'DELETE';
    const url = `${this.baseUrl}/pet/${petId}`;

    const response = await fetch(url, {
      method,
      headers: {
        ...(typeof api_key !== 'undefined' ? { [api_key]: api_key } : {})
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
    args: { body: Order },
    options?: RequestInit
  ): Promise<ResponseWithData<200, Order> | ResponseWithData<400, undefined>> {
    const { body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/store/order`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
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
    args: { orderId: number },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<200, Order>
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
  > {
    const { orderId } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/store/order/${orderId}`;

    const response = await fetch(url, {
      method,
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
    args: { orderId: number },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const { orderId } = args;

    const method = 'DELETE';
    const url = `${this.baseUrl}/store/order/${orderId}`;

    const response = await fetch(url, {
      method,
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
    options?: RequestInit
  ): Promise<ResponseWithData<200, unknown>> {
    const method = 'GET';
    const url = `${this.baseUrl}/store/inventory`;

    const response = await fetch(url, {
      method,
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
    args: { body: Array<User> },
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const { body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/user/createWithArray`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
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
    args: { body: Array<User> },
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const { body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/user/createWithList`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
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
    args: { username: string },
    options?: RequestInit
  ): Promise<
    | ResponseWithData<200, User>
    | ResponseWithData<400, undefined>
    | ResponseWithData<404, undefined>
  > {
    const { username } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/user/${username}`;

    const response = await fetch(url, {
      method,
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
    args: { username: string; body: User },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const { username, body } = args;

    const method = 'PUT';
    const url = `${this.baseUrl}/user/${username}`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
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
    args: { username: string },
    options?: RequestInit
  ): Promise<
    ResponseWithData<400, undefined> | ResponseWithData<404, undefined>
  > {
    const { username } = args;

    const method = 'DELETE';
    const url = `${this.baseUrl}/user/${username}`;

    const response = await fetch(url, {
      method,
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
    args: { username: string; password: string },
    options?: RequestInit
  ): Promise<ResponseWithData<200, string> | ResponseWithData<400, undefined>> {
    const { username, password } = args;

    const query = qs.stringify({
      ['username']: username,
      ['password']: password
    });

    const method = 'GET';
    const url = `${this.baseUrl}/user/login?${query}`;

    const response = await fetch(url, {
      method,
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
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const method = 'GET';
    const url = `${this.baseUrl}/user/logout`;

    const response = await fetch(url, {
      method,
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
    args: { body: User },
    options?: RequestInit
  ): Promise<ResponseWithData<number, undefined>> {
    const { body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/user`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
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
