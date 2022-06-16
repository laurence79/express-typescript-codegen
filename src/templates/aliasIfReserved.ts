const reserved = ['protected'];

export const aliasIfReserved = (name: string): string => {
  if (reserved.includes(name)) {
    return `${name}: _${name}`;
  }
  return name;
};

export const aliasNameIfReserved = (name: string): string => {
  if (reserved.includes(name)) {
    return `_${name}`;
  }
  return name;
};
