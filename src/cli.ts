import fs from 'fs';
import commander from 'commander';
import chalk from 'chalk';
import { processLogger } from './lib/cli-logging';
import { generateCode } from './generateCode';

const packageJsonContent = fs.readFileSync(
  `${__dirname}/../package.json`,
  'utf-8'
);
const packageJson = JSON.parse(packageJsonContent) as { version: string };
const { version } = packageJson;

const cmd = new commander.Command('generate')
  .description('Generates Express types and functions from the spec.')
  .arguments('<spec-filename> <output-directory>')
  .action((specFilename: string, outputDirectory: string) => {
    const logger = processLogger();

    try {
      generateCode({
        openApiDocumentFilename: specFilename,
        outputDirectory,
        logger
      });

      logger.log(chalk.green('\nCompleted successfully!\n\n'));
    } catch (e: unknown) {
      logger.error(
        `\nFAILED. ${e instanceof Error ? e.message : 'Unknown error'}\n\n`
      );
    }
  });

commander.program.version(version).addCommand(cmd).parse();
