import qs from 'qs';
import { fetch } from 'cross-fetch';
import * as Responses from './clientResponseTypes';
import * as Schema from './schemaTypes';

type LogFn = (message: string, data: Record<string, unknown>) => void;

export class Client {
  public constructor(
    public readonly baseUrl: string,
    private readonly logger?: LogFn
  ) {}

  public async addPet(args: {
    body: Schema.AddPetRequestBody;
  }): Promise<Responses.AddPetResponse> {
    const { body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/pet`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body)
    });

    const { status } = response;

    this.logger?.('REST API Call', {
      method,
      url,
      requestBody: body,
      status
    });

    return {
      status: status as 405,
      body: undefined
    };
  }

  public async updatePet(args: {
    body: Schema.UpdatePetRequestBody;
  }): Promise<Responses.UpdatePetResponse> {
    const { body } = args;

    const method = 'PUT';
    const url = `${this.baseUrl}/pet`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body)
    });

    const { status } = response;

    this.logger?.('REST API Call', {
      method,
      url,
      requestBody: body,
      status
    });

    return {
      status: status as 400 | 404 | 405,
      body: undefined
    };
  }

  public async findPetsByStatus(
    args: Schema.FindPetsByStatusRequestQuery
  ): Promise<Responses.FindPetsByStatusResponse> {
    const { status } = args;

    const query = qs.stringify({ status });

    const method = 'GET';
    const url = `${this.baseUrl}/pet/findByStatus?${query}`;

    const response = await fetch(url, {
      method
    });

    const { status } = response;

    const responseBody = await response.json();

    this.logger?.('REST API Call', {
      method,
      url,
      status,
      responseBody
    });

    return {
      status: status as 200 | 400,
      body: responseBody
    };
  }

  public async findPetsByTags(
    args: Schema.FindPetsByTagsRequestQuery
  ): Promise<Responses.FindPetsByTagsResponse> {
    const { tags } = args;

    const query = qs.stringify({ tags });

    const method = 'GET';
    const url = `${this.baseUrl}/pet/findByTags?${query}`;

    const response = await fetch(url, {
      method
    });

    const { status } = response;

    const responseBody = await response.json();

    this.logger?.('REST API Call', {
      method,
      url,
      status,
      responseBody
    });

    return {
      status: status as 200 | 400,
      body: responseBody
    };
  }

  public async getPetById(
    args: Schema.GetPetByIdRequestPath
  ): Promise<Responses.GetPetByIdResponse> {
    const { petId } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/pet/:petId`;

    const response = await fetch(url, {
      method
    });

    const { status } = response;

    const responseBody = await response.json();

    this.logger?.('REST API Call', {
      method,
      url,
      status,
      responseBody,
      petId
    });

    return {
      status: status as 200 | 400 | 404,
      body: responseBody
    };
  }

  public async updatePetWithForm(
    args: Schema.UpdatePetWithFormRequestPath
  ): Promise<Responses.UpdatePetWithFormResponse> {
    const { petId, name, status } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/pet/:petId`;

    const response = await fetch(url, {
      method
    });

    const { status } = response;

    this.logger?.('REST API Call', {
      method,
      url,
      status,
      petId
    });

    return {
      status: status as 405,
      body: undefined
    };
  }

  public async deletePet(
    args: Schema.DeletePetRequestPath & Schema.DeletePetRequestHeader
  ): Promise<Responses.DeletePetResponse> {
    const { api_key, petId } = args;

    const method = 'DELETE';
    const url = `${this.baseUrl}/pet/:petId`;

    const response = await fetch(url, {
      method,
      headers: { api_key }
    });

    const { status } = response;

    this.logger?.('REST API Call', {
      method,
      url,
      status,
      api_key,
      petId
    });

    return {
      status: status as 400 | 404,
      body: undefined
    };
  }

  public async placeOrder(args: {
    body: Schema.PlaceOrderRequestBody;
  }): Promise<Responses.PlaceOrderResponse> {
    const { body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/store/order`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body)
    });

    const { status } = response;

    const responseBody = await response.json();

    this.logger?.('REST API Call', {
      method,
      url,
      requestBody: body,
      status,
      responseBody
    });

    return {
      status: status as 200 | 400,
      body: responseBody
    };
  }

  public async getOrderById(
    args: Schema.GetOrderByIdRequestPath
  ): Promise<Responses.GetOrderByIdResponse> {
    const { orderId } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/store/order/:orderId`;

    const response = await fetch(url, {
      method
    });

    const { status } = response;

    const responseBody = await response.json();

    this.logger?.('REST API Call', {
      method,
      url,
      status,
      responseBody,
      orderId
    });

    return {
      status: status as 200 | 400 | 404,
      body: responseBody
    };
  }

  public async deleteOrder(
    args: Schema.DeleteOrderRequestPath
  ): Promise<Responses.DeleteOrderResponse> {
    const { orderId } = args;

    const method = 'DELETE';
    const url = `${this.baseUrl}/store/order/:orderId`;

    const response = await fetch(url, {
      method
    });

    const { status } = response;

    this.logger?.('REST API Call', {
      method,
      url,
      status,
      orderId
    });

    return {
      status: status as 400 | 404,
      body: undefined
    };
  }

  public async getInventory(): Promise<Responses.GetInventoryResponse> {
    const method = 'GET';
    const url = `${this.baseUrl}/store/inventory`;

    const response = await fetch(url, {
      method
    });

    const { status } = response;

    const responseBody = await response.json();

    this.logger?.('REST API Call', {
      method,
      url,
      status,
      responseBody
    });

    return {
      status: status as 200,
      body: responseBody
    };
  }

  public async createUsersWithArrayInput(args: {
    body: Schema.CreateUsersWithArrayInputRequestBody;
  }): Promise<Responses.CreateUsersWithArrayInputResponse> {
    const { body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/user/createWithArray`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body)
    });

    const { status } = response;

    this.logger?.('REST API Call', {
      method,
      url,
      requestBody: body,
      status
    });

    return {
      status: status as number,
      body: undefined
    };
  }

  public async createUsersWithListInput(args: {
    body: Schema.CreateUsersWithListInputRequestBody;
  }): Promise<Responses.CreateUsersWithListInputResponse> {
    const { body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/user/createWithList`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body)
    });

    const { status } = response;

    this.logger?.('REST API Call', {
      method,
      url,
      requestBody: body,
      status
    });

    return {
      status: status as number,
      body: undefined
    };
  }

  public async getUserByName(
    args: Schema.GetUserByNameRequestPath
  ): Promise<Responses.GetUserByNameResponse> {
    const { username } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/user/:username`;

    const response = await fetch(url, {
      method
    });

    const { status } = response;

    const responseBody = await response.json();

    this.logger?.('REST API Call', {
      method,
      url,
      status,
      responseBody,
      username
    });

    return {
      status: status as 200 | 400 | 404,
      body: responseBody
    };
  }

  public async updateUser(
    args: Schema.UpdateUserRequestPath & { body: Schema.UpdateUserRequestBody }
  ): Promise<Responses.UpdateUserResponse> {
    const { username, body } = args;

    const method = 'PUT';
    const url = `${this.baseUrl}/user/:username`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body)
    });

    const { status } = response;

    this.logger?.('REST API Call', {
      method,
      url,
      requestBody: body,
      status,
      username
    });

    return {
      status: status as 400 | 404,
      body: undefined
    };
  }

  public async deleteUser(
    args: Schema.DeleteUserRequestPath
  ): Promise<Responses.DeleteUserResponse> {
    const { username } = args;

    const method = 'DELETE';
    const url = `${this.baseUrl}/user/:username`;

    const response = await fetch(url, {
      method
    });

    const { status } = response;

    this.logger?.('REST API Call', {
      method,
      url,
      status,
      username
    });

    return {
      status: status as 400 | 404,
      body: undefined
    };
  }

  public async loginUser(
    args: Schema.LoginUserRequestQuery
  ): Promise<Responses.LoginUserResponse> {
    const { username, password } = args;

    const query = qs.stringify({ username, password });

    const method = 'GET';
    const url = `${this.baseUrl}/user/login?${query}`;

    const response = await fetch(url, {
      method
    });

    const { status } = response;

    const responseBody = await response.json();

    this.logger?.('REST API Call', {
      method,
      url,
      status,
      responseBody
    });

    return {
      status: status as 200 | 400,
      body: responseBody
    };
  }

  public async logoutUser(): Promise<Responses.LogoutUserResponse> {
    const method = 'GET';
    const url = `${this.baseUrl}/user/logout`;

    const response = await fetch(url, {
      method
    });

    const { status } = response;

    this.logger?.('REST API Call', {
      method,
      url,
      status
    });

    return {
      status: status as number,
      body: undefined
    };
  }

  public async createUser(args: {
    body: Schema.CreateUserRequestBody;
  }): Promise<Responses.CreateUserResponse> {
    const { body } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/user`;

    const response = await fetch(url, {
      method,
      body: JSON.stringify(body)
    });

    const { status } = response;

    this.logger?.('REST API Call', {
      method,
      url,
      requestBody: body,
      status
    });

    return {
      status: status as number,
      body: undefined
    };
  }
}
