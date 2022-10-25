export const removeIllegalChars = (src: string): string =>
  src.replace(/[|&;$%@"<>(){}*+,.[\]\-/']/g, ' ');
