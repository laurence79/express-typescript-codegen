type Reference = {
  $ref: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const dereference = <T extends object>(
  references: { [key: string]: T | Reference | undefined } | undefined,
  $ref: string,
  prefix: string
): T => {
  let current: Reference | T | undefined = {
    $ref
  };

  while (current && '$ref' in current) {
    if (!current.$ref.startsWith(prefix)) {
      throw new Error(`Invalid $ref ${$ref}`);
    }

    const name: string = current.$ref.substring(
      current.$ref.lastIndexOf('/') + 1
    );

    current = references?.[name];
  }

  if (!current) throw new Error(`Failed to deference ${$ref}`);

  return current;
};
