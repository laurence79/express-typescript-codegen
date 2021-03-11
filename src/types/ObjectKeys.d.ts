/* eslint-disable @typescript-eslint/ban-types */
type ObjectKeys<T> = T extends object
  ? (keyof T)[]
  : T extends number
  ? []
  : T extends Array<any> | string
  ? string[]
  : never;

declare namespace globalThis {
  interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
  }
}
