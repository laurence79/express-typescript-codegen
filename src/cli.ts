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
    'the type to output. client, express, express-di or types. Default "client". "server" is an alias for express-di.'
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
  .option(
    '--readonly-dtos',
    'specifies that fields in DTOs, and array types therein should be prefixed with `readonly`. Defaults to false',
    false
  )
  .option(
    '--empty-type <unknown|never|{}>',
    'what type should be generated for objects with no properties. Defaults to unknown for all templates expect msw-handlers where the default is never',
    ''
  )
  .action(
    async (
      specFilenameOrUrl: string,
      options: {
        template: string | undefined;
        filename: string | undefined;
        serviceName: string | undefined;
        notRequiredType: 'nullable' | 'optional' | 'both';
        readonlyDtos: boolean;
        emptyType: 'never' | 'unknown' | '{}' | '';
      }
    ) => {
      const logger = processLogger();

      if (
        options.template &&
        ![
          'client',
          'server',
          'express',
          'express-di',
          'types',
          'msw-handlers'
        ].includes(options.template.toLowerCase())
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
        ? options.template
        : 'client') as GenerateCodeOptions['output'];

      try {
        await generateCode({
          openApiDocumentFilenameOrUrl: specFilenameOrUrl,
          output,
          outputFilename: options.filename,
          serviceName: options.serviceName,
          logger,
          nonRequiredType: options.notRequiredType,
          readonlyDTOs: options.readonlyDtos,
          emptyType:
            options.emptyType || options.template === 'msw-handlers'
              ? 'never'
              : 'unknown'
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
