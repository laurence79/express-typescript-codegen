import fetch from 'cross-fetch';
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { Logger, success } from '../lib/cli-logging';
import * as OpenApi from '../types/OpenApi';

const loadFromFile = (source: string, logger?: Logger): OpenApi.Document => {
  const log = logger?.create(`Loading swagger file ${source}`);

  if (!fs.existsSync(source)) {
    throw new Error(`File ${source} does not exist`);
  }

  const extension = path.extname(source);
  const data = fs.readFileSync(source, 'utf-8');

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

const loadFromUrl = async (
  source: string,
  logger?: Logger
): Promise<OpenApi.Document> => {
  const log = logger?.create(`Loading swagger file from url ${source}`);

  const response = await fetch(source);

  if (!response.ok) {
    throw new Error(`Invalid URL ${source}. Status ${response.status}`);
  }

  const doc = (await response.json()) as OpenApi.Document;

  log?.(success());

  return doc;
};

export const loadOpenApiDocument = async ({
  openApiDocumentFilenameOrUrl: source,
  logger
}: {
  openApiDocumentFilenameOrUrl: string;
  logger?: Logger;
}): Promise<OpenApi.Document> => {
  if (source.toLowerCase().startsWith('http')) {
    return loadFromUrl(source, logger);
  }

  return loadFromFile(source, logger);
};
