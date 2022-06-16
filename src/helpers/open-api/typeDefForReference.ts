import { typeName } from './typeName';

export const typeDefForReference = ($ref: string): string => {
  const name = $ref.substring($ref.lastIndexOf('/') + 1);
  return typeName(name);
};
