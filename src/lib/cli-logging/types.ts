export type LogFn = (message: string) => void;

export interface Logger {
  error: LogFn;
  log: LogFn;
  create: (message: string) => LogFn;
}
