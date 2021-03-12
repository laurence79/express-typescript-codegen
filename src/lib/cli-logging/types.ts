export type LogFn = (message: string) => void;

export type Logger = {
  error: LogFn;
  log: LogFn;
  create: (message: string) => LogFn;
};
