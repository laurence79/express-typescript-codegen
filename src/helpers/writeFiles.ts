import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { Logger, progress, success } from '../lib/cli-logging';

export const prettierStyle = {
  arrowParens: 'avoid',
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 80
} as const;

export const writeFiles = ({
  files,
  outputDirectory,
  logger
}: {
  files: { filename: string; content: string }[];
  logger?: Logger;
  outputDirectory: string;
}): void => {
  const log = logger?.create('Writing files');

  log?.(progress('Creating output directory'));

  fs.mkdirSync(outputDirectory, { recursive: true });

  files.forEach(({ filename, content }) => {
    log?.(progress(filename));
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

    const fullFileName = path.join(outputDirectory, filename);

    const formattedContent = prettier.format(content, {
      ...prettierStyle,
      parser
    });

    fs.writeFileSync(fullFileName, formattedContent);
  });

  log?.(success());
};
