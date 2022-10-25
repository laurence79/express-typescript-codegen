import { initCap } from './initCap';
import { removeIllegalChars } from './removeIllegalChars';

export const safeName = (name: string): string =>
  initCap(removeIllegalChars(name)).trim();
