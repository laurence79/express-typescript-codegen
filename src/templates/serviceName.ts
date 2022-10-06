const initCap = (src: string): string =>
  src.replace(/\s+.{1}/g, v => v.slice(-1).toUpperCase());

const removeIllegalChars = (src: string): string =>
  src.replace(/[|&;$%@"<>()+,.[\]\-']/g, ' ');

export const serviceNameTemplate = (title: string): string => {
  return initCap(removeIllegalChars(title)).trim();
};
