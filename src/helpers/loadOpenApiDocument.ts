import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { Logger, success } from '../lib/cli-logging';
import * as OpenApi from '../types/OpenApi';

export const loadOpenApiDocument = ({
  openAPIDocumentFilename,
  logger
}: {
  openAPIDocumentFilename: string;
  logger?: Logger;
}): OpenApi.Document => {
  const log = logger?.create(`Loading swagger file ${openAPIDocumentFilename}`);

  if (!fs.existsSync(openAPIDocumentFilename)) {
    throw new Error(`File ${openAPIDocumentFilename} does not exist`);
  }

  const extension = path.extname(openAPIDocumentFilename);
  const data = fs.readFileSync(openAPIDocumentFilename, 'UTF-8');

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
