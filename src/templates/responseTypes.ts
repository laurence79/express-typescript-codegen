export const responseTypesTemplate = (
  schemaTypesModuleName: string,
  types: {
    type: string;
    childTypes: {
      statusCode: string;
      bodyType: string;
    }[];
  }[]
): string => `
import * as Schema from './${schemaTypesModuleName}';

export type ResponseWithData<TStatus, TData> = {
  status: TStatus;
  body: TData;
};

${types
  .map(({ type, childTypes }) => {
    return `
export type ${type} = ${childTypes
      .map(
        ({ statusCode, bodyType }) =>
          `ResponseWithData<${statusCode}, ${
            bodyType === 'unknown' ? bodyType : `Schema.${bodyType}`
          }>`
      )
      .join(' | ')}

`;
  })
  .join('')}
`;
