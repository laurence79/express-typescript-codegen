import { safeName } from '../../templates/safeName';
import { initUpper } from '../initUpper';

export const typeDefForReference = ($ref: string): string => {
  const name = $ref.substring($ref.lastIndexOf('/') + 1);
  return initUpper(safeName(name));
};
