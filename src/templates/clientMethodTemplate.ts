/* eslint-disable no-template-curly-in-string */
import { objectTemplate } from './objectTemplate';

export type ClientMethodTemplateArgs = {
  httpMethod: string;
  methodName: string;
  openApiPath: string;
  queryParams: {
    name: string;
    required: boolean;
    type: string;
  }[];
  headerParams: {
    name: string;
    required: boolean;
    type: string;
  }[];
  pathParams: {
    name: string;
    type: string;
  }[];
  body:
    | {
        type: 'json';
        jsonType: string;
        required: boolean;
      }
    | {
        type: 'form';
        fields: { name: string; required: boolean; binary: boolean }[];
        required: boolean;
      }
    | null;
  responses: ({
    statusCode: 'default' | string;
  } & ({ type: 'json'; jsonType: string } | { type: 'binary' | 'none' }))[];
};

export const clientMethodTemplate = ({
  httpMethod,
  methodName,
  openApiPath,
  pathParams,
  queryParams,
  headerParams,
  body,
  responses
}: ClientMethodTemplateArgs): string => {
  const bodyArg = (() => {
    if (!body) return undefined;

    const typeDef =
      body.type === 'json'
        ? body.jsonType
        : objectTemplate(
            body.fields.map(f => ({
              name: f.name,
              required: f.required,
              type: f.binary ? 'Blob' : 'string'
            }))
          );

    return {
      name: 'body',
      required: body.required,
      type: typeDef
    };
  })();

  const functionArguments = queryParams
    .concat(headerParams)
    .concat(
      pathParams.map(({ name, type }) => ({ name, required: true, type }))
    )
    .concat(bodyArg ? [bodyArg] : []);

  const functionArgumentSignature = functionArguments.any()
    ? `args: ${objectTemplate(functionArguments)}`
    : '';

  const responseType = responses
    .map(r => {
      const statusCodeType =
        r.statusCode === 'default' ? 'number' : r.statusCode;

      const dataType = (() => {
        if (r.type === 'binary') return 'Blob';
        if (r.type === 'json') return r.jsonType;
        return 'undefined';
      })();

      return `ResponseWithData<${statusCodeType}, ${dataType}>`;
    })
    .join(' | ');

  const paramNames = headerParams
    .concat(queryParams)
    .concat(
      pathParams.map(({ name, type }) => ({ name, required: true, type }))
    )
    .map(({ name }) => name)
    .concat(bodyArg ? [bodyArg.name] : []);

  const decomposeParameters = paramNames.any()
    ? `const {${paramNames.join(', ')}} = args;`
    : '';

  const composeQuery = queryParams.any()
    ? `const query = qs.stringify({ ${queryParams
        .map(q => q.name)
        .join(', ')} });`
    : '';

  const composeFormData =
    body?.type === 'form'
      ? `const formData = new FormData();
      ${body.fields
        .map(f => `formData.append('${f.name}', body.${f.name});`)
        .join('\n')}
    `
      : '';

  const url = `\`\${this.baseUrl}${openApiPath.replace(
    /\{(?:.*?)\}/g,
    x => `$${x}`
  )}${queryParams.any() ? '?${query}' : ''}\``;

  const headers = headerParams
    .map(h => h.name)
    .concat(
      body?.type === 'json' ? ["'Content-Type': 'application/json'"] : []
    );

  const fetchOpts = `{
      ${[
        'method',
        ...(headers.any() ? [`headers: {${headers.join(',')}}`] : []),

        ...(body?.type === 'json' ? ['body: JSON.stringify(body)'] : []),

        ...(body?.type === 'form' ? ['body: formData'] : [])
      ].join(',\n')}
    }`;

  const responseSwitch = `
    switch ($status) {
      ${responses
        .map(r => {
          const bodyExpression = (() => {
            if (r.type === 'json') {
              return `(await response.json()) as ${r.jsonType}`;
            }

            if (r.type === 'binary') return 'await response.blob()';

            return 'undefined';
          })();

          return `
              ${
                r.statusCode === 'default' ? `default` : `case ${r.statusCode}`
              }: return {
                status: $status,
                body: ${bodyExpression}
              }
            `;
        })
        .join('\n')}

      ${
        responses.every(r => r.statusCode !== 'default')
          ? `
          default:
            throw new Error(` +
            '`Unexpected status ${$status}`' +
            `)
        `
          : ''
      }
    }
  `;

  return `public async ${methodName}(${functionArgumentSignature}): 
    Promise<${responseType}> {

    ${decomposeParameters}

    ${composeQuery}

    ${composeFormData}

    const method = '${httpMethod.toUpperCase()}',
    const url = ${url};

    const response = await fetch(url, ${fetchOpts});

    const { status: $status } = response;

    this.logger?.('REST API Call', { method, url, status: $status });

    ${responseSwitch}
  }`;
};
