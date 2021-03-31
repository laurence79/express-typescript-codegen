import qs from 'qs';
import { fetch } from 'cross-fetch';

type ResponseWithData<TStatus, TData> = {
  status: TStatus;
  body: TData;
};

type LogFn = (message: string, data: Record<string, unknown>) => void;

export class OrderAndPayCustomerGatewayClient {
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

    const { status } = response;

    this.logger?.('REST API Call', { method, url, status });

    switch (status) {
      case 200:
        return {
          status,
          body: (await response.json()) as { ok?: boolean }
        };

      default:
        throw new Error(`Unexpected status ${status}`);
    }
  }
}
