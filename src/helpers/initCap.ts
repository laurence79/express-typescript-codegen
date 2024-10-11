export const initCap = (value: string): string => {
  return value
    .toLowerCase()
    .replace(/(?:^|\s)[a-z]/g, (m: string) => m.toUpperCase());
};
