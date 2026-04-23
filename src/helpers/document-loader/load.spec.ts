import 'ts-array-extensions';
import type { JsonMap } from '@laurence79/ts-json';
import path from 'path';
import { load } from './load';

const fixture = (name: string) => path.join(__dirname, '__fixtures__', name);

describe('load', () => {
  describe('multi-file $ref resolution', () => {
    it('inlines cross-file schemas into the root document', async () => {
      const doc = (await load(fixture('multi-file-api.yaml'))) as JsonMap;
      const components = doc.components as JsonMap;
      const schemas = components.schemas as JsonMap;

      expect(schemas.Company).toBeDefined();
      expect(schemas.CompanyList).toBeDefined();
      expect(schemas.Address).toBeDefined();
      expect(schemas.CompanyStatus).toBeDefined();
    });

    it('rewrites $ref to point to local schemas', async () => {
      const doc = (await load(fixture('multi-file-api.yaml'))) as JsonMap;
      const paths = doc.paths as JsonMap;
      const companies = paths['/companies'] as JsonMap;
      const get = companies.get as JsonMap;
      const responses = get.responses as JsonMap;
      const ok = responses['200'] as JsonMap;
      const content = ok.content as JsonMap;
      const json = content['application/json'] as JsonMap;
      const schema = json.schema as JsonMap;

      expect(schema.$ref).toMatch(/#\/components\/schemas\/CompanyList$/);
    });

    it('does not create nested components trees under inlined schemas', async () => {
      const doc = (await load(fixture('multi-file-api.yaml'))) as JsonMap;
      const components = doc.components as JsonMap;
      const schemas = components.schemas as JsonMap;

      for (const [, schema] of Object.entries(schemas)) {
        expect(schema).not.toHaveProperty('components');
      }
    });

    it('inlines each external schema only once regardless of reference count', async () => {
      const doc = (await load(fixture('multi-file-api.yaml'))) as JsonMap;
      const components = doc.components as JsonMap;
      const schemas = components.schemas as JsonMap;

      const schemaNames = Object.keys(schemas).sort();
      expect(schemaNames).toEqual([
        'Address',
        'Company',
        'CompanyList',
        'CompanyStatus'
      ]);
    });
  });

  describe('cross-file PathItemObject $ref resolution', () => {
    const entry = fixture('path-item-refs/main.yaml');

    it('preserves path keys verbatim, including path-parameter tokens', async () => {
      const doc = (await load(entry)) as JsonMap;
      const paths = doc.paths as JsonMap;

      expect(Object.keys(paths).sort()).toEqual([
        '/things',
        '/things/{thingId}'
      ]);
    });

    it('inlines the referenced PathItemObject in place rather than relocating it under components', async () => {
      const doc = (await load(entry)) as JsonMap;
      const paths = doc.paths as JsonMap;

      const listPath = paths['/things'] as JsonMap;
      const getPath = paths['/things/{thingId}'] as JsonMap;

      expect(listPath.$ref).toBeUndefined();
      expect(getPath.$ref).toBeUndefined();

      expect(listPath.get).toBeDefined();
      expect(getPath.get).toBeDefined();
    });

    it('does not leak PathItemObjects into components.schemas', async () => {
      const doc = (await load(entry)) as JsonMap;
      const components = doc.components as JsonMap | undefined;
      const schemas = (components?.schemas as JsonMap | undefined) ?? {};

      expect(schemas).not.toHaveProperty('listThings');
      expect(schemas).not.toHaveProperty('getThing');
    });

    it('continues to resolve nested $refs inside the inlined PathItemObject', async () => {
      const doc = (await load(entry)) as JsonMap;
      const paths = doc.paths as JsonMap;
      const getPath = paths['/things/{thingId}'] as JsonMap;
      const get = getPath.get as JsonMap;
      const responses = get.responses as JsonMap;
      const ok = responses['200'] as JsonMap;
      const content = ok.content as JsonMap;
      const json = content['application/json'] as JsonMap;
      const schema = json.schema as JsonMap;

      expect(schema.$ref).toMatch(/#\/components\/schemas\/Thing$/);

      const components = doc.components as JsonMap;
      const schemas = components.schemas as JsonMap;
      expect(schemas.Thing).toBeDefined();
    });

    it('preserves path-level parameters through the inlined PathItemObject', async () => {
      const doc = (await load(entry)) as JsonMap;
      const paths = doc.paths as JsonMap;
      const getPath = paths['/things/{thingId}'] as JsonMap;
      const get = getPath.get as JsonMap;
      const parameters = get.parameters as JsonMap[];

      expect(parameters).toHaveLength(1);
      expect(parameters[0]?.name).toBe('thingId');
      expect(parameters[0]?.in).toBe('path');
    });
  });
});
