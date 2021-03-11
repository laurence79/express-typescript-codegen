export const initLower = (value: string): string => {
  return value.replace(/(?:^|\s)[A-Z]/g, (m: string) => m.toLowerCase());
};
