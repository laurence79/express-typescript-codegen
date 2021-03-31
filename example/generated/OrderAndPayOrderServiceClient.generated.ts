import qs from 'qs';
import { fetch } from 'cross-fetch';

export type BadRequestResponsePayload = { errors: Array<string> };

export type OrderResponsePayload = {
  id: string;
  userId: string;
  venueId: string;
  tableId: string;
  tableName: string;
  customerName?: string;
  currentStatus: OrderStatus;
  statusHistory: Array<OrderStatusHistory>;
  lines: Array<OrderLine>;
  createDateTime: string;
  serviceChargePercent?: string;
  serviceCharge?: number;
};

export type OrderStatus =
  | 'WAITING_FOR_PAYMENT'
  | 'PAYMENT_DECLINED'
  | 'PAYMENT_COMPLETE'
  | 'ACCEPTED'
  | 'PREPARED'
  | 'SENT';

export type OrderStatusHistory = {
  dateTime: string;
  userId: string;
  status: OrderStatus;
};

export type OrdersResponsePayload = { orders: Array<OrderResponsePayload> };

export type OrderPostRequestPayload = {
  userId: string;
  venueId: string;
  tableId: string;
  tableName: string;
  lines: Array<OrderLine>;
  serviceChargePercent?: string;
  serviceCharge?: number;
};

export type OrderLine = {
  id: string;
  productId: string;
  productTitle: string;
  servingId: string;
  servingTitle: string;
  basePrice: number;
  quantity: number;
  customisations: Array<OrderLineCustomisation>;
};

export type OrderLineCustomisation = {
  customisationId: string;
  customisationName: string;
  optionId: string;
  optionName: string;
  priceDifference: number;
};

export type OrderStatusPostRequestPayload = { status: OrderStatus };

type ResponseWithData<TStatus, TData> = {
  status: TStatus;
  body: TData;
};

type LogFn = (message: string, data: Record<string, unknown>) => void;

export class OrderAndPayOrderServiceClient {
  public constructor(
    public readonly baseUrl: string,
    private readonly logger?: LogFn
  ) {}

  public async postOrder(args: {
    body?: OrderPostRequestPayload;
    authorization: string;
  }): Promise<
    | ResponseWithData<200, OrderResponsePayload>
    | ResponseWithData<400, BadRequestResponsePayload>
    | ResponseWithData<401, { type: 'INVALID_TOKEN' }>
  > {
    const { body, authorization } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/order`;

    const response = await fetch(url, {
      method,
      headers: { authorization },
      body: JSON.stringify(body)
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as OrderResponsePayload
        };

      case 400:
        return {
          status: $status,
          body: (await response.json()) as BadRequestResponsePayload
        };

      case 401:
        return {
          status: $status,
          body: (await response.json()) as { type: 'INVALID_TOKEN' }
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async getOrders(args: {
    venueId: string;
    status: Array<string>;
    limit?: number;
    fromCreateDateTime?: string;
    authorization: string;
  }): Promise<
    | ResponseWithData<200, OrdersResponsePayload>
    | ResponseWithData<400, BadRequestResponsePayload>
    | ResponseWithData<401, { type: 'INVALID_TOKEN' | 'ACCESS_DENIED' }>
  > {
    const { venueId, status, limit, fromCreateDateTime, authorization } = args;

    const query = qs.stringify({ venueId, status, limit, fromCreateDateTime });

    const method = 'GET';
    const url = `${this.baseUrl}/order?${query}`;

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
          body: (await response.json()) as OrdersResponsePayload
        };

      case 400:
        return {
          status: $status,
          body: (await response.json()) as BadRequestResponsePayload
        };

      case 401:
        return {
          status: $status,
          body: (await response.json()) as {
            type: 'INVALID_TOKEN' | 'ACCESS_DENIED';
          }
        };

      default:
        throw new Error(`Unexpected status ${$status}`);
    }
  }

  public async getOrder(args: {
    orderId: string;
    authorization: string;
  }): Promise<
    | ResponseWithData<200, OrderResponsePayload>
    | ResponseWithData<400, BadRequestResponsePayload>
    | ResponseWithData<401, { type: 'INVALID_TOKEN' | 'ACCESS_DENIED' }>
    | ResponseWithData<404, unknown>
  > {
    const { orderId, authorization } = args;

    const method = 'GET';
    const url = `${this.baseUrl}/order/${orderId}`;

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
          body: (await response.json()) as OrderResponsePayload
        };

      case 400:
        return {
          status: $status,
          body: (await response.json()) as BadRequestResponsePayload
        };

      case 401:
        return {
          status: $status,
          body: (await response.json()) as {
            type: 'INVALID_TOKEN' | 'ACCESS_DENIED';
          }
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

  public async postOrderStatus(args: {
    orderId: string;
    body?: OrderStatusPostRequestPayload;
    authorization: string;
  }): Promise<
    | ResponseWithData<200, OrderResponsePayload>
    | ResponseWithData<400, BadRequestResponsePayload>
    | ResponseWithData<401, { type: 'INVALID_TOKEN' | 'ACCESS_DENIED' }>
    | ResponseWithData<404, unknown>
  > {
    const { orderId, body, authorization } = args;

    const method = 'POST';
    const url = `${this.baseUrl}/order/${orderId}/status`;

    const response = await fetch(url, {
      method,
      headers: { authorization },
      body: JSON.stringify(body)
    });

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    switch ($status) {
      case 200:
        return {
          status: $status,
          body: (await response.json()) as OrderResponsePayload
        };

      case 400:
        return {
          status: $status,
          body: (await response.json()) as BadRequestResponsePayload
        };

      case 401:
        return {
          status: $status,
          body: (await response.json()) as {
            type: 'INVALID_TOKEN' | 'ACCESS_DENIED';
          }
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
