export const typeNameForReference = ($ref: string): string => {
  const name = $ref.substring($ref.lastIndexOf('/') + 1);
  return name;
};
