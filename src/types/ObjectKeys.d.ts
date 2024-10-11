/* eslint-disable @typescript-eslint/no-explicit-any */
type ObjectKeys<T> = T extends object
  ? (keyof T)[]
  : T extends number
    ? []
    : T extends any[] | string
      ? string[]
      : never;

declare namespace globalThis {
  interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
  }
}
