export const initCap = (src: string): string =>
  src.replace(/\s+.{1}/g, v => v.slice(-1).toUpperCase());
