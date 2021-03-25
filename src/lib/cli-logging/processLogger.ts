/* eslint-disable no-console */
import chalk from 'chalk';
import { LogFn, Logger } from './types';

const o = process.stdout;
const e = process.stdout;

const progressLogger = (start: number): LogFn => {
  let last = 0;

  return m => {
    o.cursorTo(start);
    o.write(m);

    if (m.length < last) {
      o.write(' '.repeat(last - m.length));
    }

    last = m.length;
  };
};

export const success = (): string => chalk.green(' -> SUCCESS');

export const warn = (message: string): string =>
  chalk.yellow(` -> WARNING: ${message}`);

export const progress = (message: string): string =>
  chalk.blue(` -> ${message}`);

export const processLogger = (): Logger => {
  const log: LogFn = m => {
    o.write(`\n${m}`);
  };

  return {
    error: m => {
      e.write(`\n${chalk.red(m)}`);
    },
    log,
    create: m => {
      log(m);
      const l = progressLogger(m.length);

      l(progress('...'));

      return l;
    }
  };
};
