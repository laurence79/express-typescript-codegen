import { initCap } from './initCap';
import { removeIllegalChars } from './removeIllegalChars';

export const serviceNameTemplate = (title: string): string => {
  return initCap(removeIllegalChars(title)).trim();
};
