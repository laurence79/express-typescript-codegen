export const dereference = <T>(
  references: { [key: string]: T | undefined } | undefined,
  $ref: string,
  prefix: string
): T => {
  if (!$ref.startsWith(prefix)) {
    throw new Error(`Invalid $ref ${$ref}`);
  }

  const name = $ref.substring($ref.lastIndexOf('/') + 1);

  const maybe = references?.[name];

  if (!maybe) throw new Error(`Failed to deference ${$ref}`);

  return maybe;
};
