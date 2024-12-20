import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { Logger, progress, success, warn } from '../lib/cli-logging';

const prettierStyle = {
  arrowParens: 'avoid',
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 80
} as const;

export const writeFile = async ({
  content,
  logger,
  filename
}: {
  content: string;
  logger?: Logger;
  filename: string;
}): Promise<void> => {
  const log = logger?.create('Writing file');

  log?.(progress('Creating output directory'));

  fs.mkdirSync(path.dirname(filename), { recursive: true });

  log?.(progress('Formatting content'));

  const extension = path.extname(filename);

  const parser = ((): prettier.Options['parser'] => {
    switch (extension) {
      case '.ts':
        return 'typescript';
      case '.json':
        return 'json';
      default:
        return undefined;
    }
  })();

  const formattedContent = await (async () => {
    try {
      return await prettier.format(content, {
        ...prettierStyle,
        parser
      });
    } catch (e) {
      if (e instanceof Error) {
        log?.(warn(e.message));
      }
      return content;
    }
  })();

  fs.writeFileSync(filename, formattedContent);

  log?.(success());
};
