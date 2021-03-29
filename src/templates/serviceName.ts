export const serviceNameTemplate = (title: string): string => {
  return title.replace(/\s+.{1}/g, v => v.slice(-1).toUpperCase());
};
