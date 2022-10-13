import { initUpper } from './initUpper';

export const inferOperationId = (method: string, path: string): string => {
  const varsRegex = /\{.*?\}/gm;

  const vars = path
    .match(varsRegex)
    ?.map(m => m.substring(1, m.length - 1))
    .map(initUpper);

  const suffix = vars?.any() ? `By${vars.join('And')}` : '';

  const remainingPath = path
    .replace(varsRegex, '')
    .replace(/\/|-|_/g, ' ')
    .split(' ')
    .map(initUpper)
    .join('');

  return `${method}${remainingPath}${suffix}`;
};
