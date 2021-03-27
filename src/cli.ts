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
  .option('--client', 'output client modules')
  .option('--server', 'output server modules')
  .option('--stubs', 'output server stub modules')
  .action(
    (
      specFilename: string,
      outputDirectory: string,
      options: { client: boolean; server: boolean; stubs: boolean }
    ) => {
      const logger = processLogger();

      try {
        generateCode({
          openApiDocumentFilename: specFilename,
          output: [
            ...(options.client ? (['CLIENT'] as const) : []),
            ...(options.server ? (['SERVER'] as const) : []),
            ...(options.stubs ? (['STUBS'] as const) : [])
          ],
          outputDirectory,
          logger
        });

        logger.log(chalk.green('\nCompleted successfully!\n\n'));

        process.exit(0);
      } catch (e: unknown) {
        logger.error(
          `\nFAILED. ${
            e instanceof Error
              ? `${e.message}\n${e.stack ?? ''}`
              : 'Unknown error'
          }\n\n`
        );

        process.exit(1);
      }
    }
  );

commander.program.version(version).addCommand(cmd).parse();
