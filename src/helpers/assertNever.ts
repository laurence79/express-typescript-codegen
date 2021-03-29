/* eslint-disable @typescript-eslint/restrict-template-expressions */
export function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
}
