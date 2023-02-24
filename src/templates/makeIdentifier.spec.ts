import { IdentifierFormat, makeIdentifier } from './makeIdentifier';
import 'ts-array-extensions';

describe('typeName', () => {
  it('underscored', () => {
    expect(makeIdentifier('WIDGET_BUILDER')).toEqual('WidgetBuilder');
  });

  it('snaked', () => {
    expect(makeIdentifier('widget-builder')).toEqual('WidgetBuilder');
  });

  it('camel', () => {
    expect(makeIdentifier('widgetBuilder')).toEqual('WidgetBuilder');
  });

  it('pascal', () => {
    expect(makeIdentifier('WidgetBuilder')).toEqual('WidgetBuilder');
  });

  it('mixed', () => {
    expect(makeIdentifier('default_widget-builder')).toEqual(
      'DefaultWidgetBuilder'
    );
  });

  it('removes illegal chargs', () => {
    expect(makeIdentifier('default!#widget builder$')).toEqual(
      'DefaultWidgetBuilder'
    );
  });
});

describe('formally serviceName', () => {
  it('removes spaces', () => {
    const result = makeIdentifier('A Wonderful Service');
    expect(result.includes(' ')).toBe(false);
  });

  it('removes full stops', () => {
    const result = makeIdentifier('funkyname.com service');
    expect(result.includes('.')).toBe(false);
  });

  it('produces the expected output', () => {
    const result = makeIdentifier(
      `funkyname.com's dollar$ service by @laurence79 [dev]`
    );
    expect(result).toEqual('FunkynameComSDollarServiceByLaurence79Dev');
  });
});

describe('Camel case', () => {
  it('lowercase the first word', () => {
    const result = makeIdentifier('X-Request-Id', IdentifierFormat.camelCase);
    expect(result).toEqual('xRequestId');
  });
});
