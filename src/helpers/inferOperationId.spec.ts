import { inferOperationId } from './inferOperationId';
import 'ts-array-extensions';

describe('inferOperationId', () => {
  it('works', () => {
    const result = inferOperationId(
      'get',
      '/clients/{clientId}/posts/{postId}'
    );

    expect(result).toEqual('getClientsPostsByClientIdAndPostId');
  });
});
