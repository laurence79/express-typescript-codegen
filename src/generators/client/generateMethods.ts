/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
import { mapOperations, typeDefForSchema } from '../../helpers/v2';
import * as OpenApiV2 from '../../types/OpenApiV2';
import { LogFn, progress } from '../../lib/cli-logging';
import { generateResponseType } from './generateResponseType';
import { generateMethodArguments } from './generateMethodArguments';

export const generateMethods = (
  document: OpenApiV2.Document,
  log?: LogFn
): string[] => {
  return mapOperations(document).map(
    ({ method, parameters, path, operationId, responses }) => {
      log?.(progress(`Adding ${method} ${path}`));

      const argsType = generateMethodArguments(parameters);
      const responseType = generateResponseType(responses);

      const functionArguments = argsType ? `args: ${argsType}` : '';

      const bodyArg = parameters.first(p => p.in === 'body');
      const queryArgs = parameters.filter(p => p.in === 'query');
      const headerArgs = parameters.filter(p => p.in === 'header');
      const formDataArgs = parameters.filter(p => p.in === 'formData');

      const paramNames = parameters.map(p => p.name);

      const interpolationPath =
        '`${this.baseUrl}' +
        path.replace(/\{(?:.*?)\}/g, x => '$' + x) +
        (queryArgs.any() ? '?${query}' : '') +
        '`';

      const decomposeParameters = argsType
        ? `const {${paramNames.join(', ')}} = args;`
        : '';

      const composeFormData = formDataArgs.none()
        ? ''
        : `
          const formData = new FormData();
          ${formDataArgs
            .map(f => `formData.append('${f.name}', ${f.name});`)
            .join('\n')}
        `;

      const composeQuery = queryArgs.none()
        ? ''
        : `const query = qs.stringify({ ${queryArgs
            .map(q => q.name)
            .join(', ')} });`;

      const fetchOpts = `{
        ${[
          'method',
          ...(headerArgs.any()
            ? [`headers: {${headerArgs.map(h => h.name).join(',')}}`]
            : []),
          ...(bodyArg ? [`body: JSON.stringify(${bodyArg.name})`] : []),
          ...(formDataArgs.any() ? ['body: formData'] : [])
        ].join(',\n')}
      }`;

      return `public async ${operationId}(${functionArguments}): 
          Promise<${responseType}> {

          ${decomposeParameters}

          ${composeQuery}

          ${composeFormData}

          const method = '${method.toUpperCase()}',
          const url = ${interpolationPath};

          const response = await fetch(url, ${fetchOpts});

          const { status: $status } = response;

          this.logger?.('REST API Call', { method, url, status: $status });

          switch ($status) {
            ${responses
              .map(
                r => `
            ${
              r.statusCode === 'default' ? `default` : `case ${r.statusCode}`
            }: return {
              status: $status,
              body: ${
                r.response.schema?.type === 'file'
                  ? 'await response.blob()'
                  : `(await response.json()) as ${
                      r.response.schema
                        ? typeDefForSchema(r.response.schema)
                        : 'unknown'
                    }`
              }
            }
            `
              )
              .join('\n')}

            ${
              responses.some(r => r.statusCode === 'default')
                ? ``
                : `
                default:
                  throw new Error(` +
                  '`Unexpected status ${$status}`' +
                  `)
              `
            }
          }
        }`;
    }
  );
};
