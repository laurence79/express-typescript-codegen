import { makeIdentifier } from '../../templates/makeIdentifier';

export const typeDefForReference = ($ref: string): string => {
  const name = $ref.substring($ref.lastIndexOf('/') + 1);
  return makeIdentifier(name);
};
