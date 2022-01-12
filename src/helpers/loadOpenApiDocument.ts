import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { Logger, success } from '../lib/cli-logging';
import * as OpenApi from '../types/OpenApi';

export const loadOpenApiDocument = ({
  openApiDocumentFilename,
  logger
}: {
  openApiDocumentFilename: string;
  logger?: Logger;
}): OpenApi.Document => {
  const log = logger?.create(`Loading swagger file ${openApiDocumentFilename}`);

  if (!fs.existsSync(openApiDocumentFilename)) {
    throw new Error(`File ${openApiDocumentFilename} does not exist`);
  }

  const extension = path.extname(openApiDocumentFilename);
  const data = fs.readFileSync(openApiDocumentFilename, 'utf-8');

  const doc = (() => {
    if (['.yaml', '.yml'].includes(extension)) {
      return yaml.parse(data) as OpenApi.Document;
    }

    if (extension === '.json') {
      return JSON.parse(data) as OpenApi.Document;
    }

    throw new Error(`Unsupported extension ${extension}`);
  })();

  log?.(success());

  return doc;
};
