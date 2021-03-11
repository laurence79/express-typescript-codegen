import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import * as OpenAPI from './types/OpenAPI';

export const loadSwagger = (filename: string): OpenAPI.Document => {
  if (!fs.existsSync(filename)) {
    throw new Error(`File ${filename} does not exist`);
  }

  const extension = path.extname(filename);
  const data = fs.readFileSync(filename, 'UTF-8');

  if (['.yaml', '.yml'].includes(extension)) {
    return yaml.parse(data) as OpenAPI.Document;
  }

  if (extension === '.json') {
    return JSON.parse(data) as OpenAPI.Document;
  }

  throw new Error(`Unsupported extension ${extension}`);
};
