export const initUpper = (value: string): string => {
  return value.replace(/(?:^|\s)[a-z]/g, (m: string) => m.toUpperCase());
};
