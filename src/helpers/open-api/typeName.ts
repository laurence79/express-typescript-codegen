const initCap = (value: string) => {
  return value
    .toLowerCase()
    .replace(/(?:^|\s)[a-z]/g, (m: string) => m.toUpperCase());
};

export const typeName = (schemaName: string): string => {
  const words = (() => {
    if (schemaName.includes('_')) {
      return schemaName.split('_');
    }

    if (schemaName.includes('-')) {
      return schemaName.split('-');
    }

    return [...schemaName.matchAll(/(?:^|[A-Z])[a-z]+/g)].map(m => m[0]);
  })();

  return words.map(initCap).join('');
};
