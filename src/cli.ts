#!/usr/bin/env node

import fs from 'fs';
import commander from 'commander';
import chalk from 'chalk';
import { processLogger } from './lib/cli-logging';
import { generateCode } from './generateCode';
import { GenerateCodeOptions } from './types/GenerateCodeOptions';

const packageJsonContent = fs.readFileSync(
  `${__dirname}/../package.json`,
  'utf-8'
);
const packageJson = JSON.parse(packageJsonContent) as { version: string };
const { version } = packageJson;

const cmd = new commander.Command('generate')
  .description('Generates typescript code from the spec.')
  .arguments('<spec-filename-or-url>')
  .option(
    '--template <template>',
    'the type to output. client, server or stubs. Default client'
  )
  .option(
    '--filename <filename>',
    'the file to output. Defaults to <service-name><output-type>.generated.ts'
  )
  .option(
    '--service-name <name>',
    'the name of the service. Defaults to info.title from the open api document'
  )
  .option(
    '--not-required-type <nullable|optional|both>',
    'what type fields should be if they are not in the required list. Defaults to undefined',
    'optional'
  )
  .action(
    async (
      specFilenameOrUrl: string,
      options: {
        template: string | undefined;
        filename: string | undefined;
        serviceName: string | undefined;
        notRequiredType: 'nullable' | 'optional' | 'both';
      }
    ) => {
      const logger = processLogger();

      if (
        options.template &&
        !['client', 'server', 'stubs'].includes(options.template.toLowerCase())
      ) {
        commander.help({ error: true });
      }

      if (
        !(['nullable', 'optional', 'both'] as const).includes(
          options.notRequiredType
        )
      ) {
        commander.help({ error: true });
      }

      const output = (options.template
        ? options.template.toUpperCase()
        : 'CLIENT') as GenerateCodeOptions['output'];

      try {
        await generateCode({
          openApiDocumentFilenameOrUrl: specFilenameOrUrl,
          output,
          outputFilename: options.filename,
          serviceName: options.serviceName,
          logger,
          nonRequiredType: options.notRequiredType
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
