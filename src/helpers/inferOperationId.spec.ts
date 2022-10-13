import { inferOperationId } from './inferOperationId';
import 'ts-array-extensions';

describe('inferOperationId', () => {
  it('works', () => {
    const result = inferOperationId(
      'put',
      '/commands/add-weigh-in/{commandId}'
    );

    expect(result).toEqual('putCommandsAddWeighInByCommandId');
  });
});
