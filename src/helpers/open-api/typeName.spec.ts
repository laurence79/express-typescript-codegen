import { typeName } from './typeName';

describe('typeName', () => {
  it('underscored', () => {
    expect(typeName('WIDGET_BUILDER')).toEqual('WidgetBuilder');
  });

  it('snaked', () => {
    expect(typeName('widget-builder')).toEqual('WidgetBuilder');
  });

  it('camel', () => {
    expect(typeName('widgetBuilder')).toEqual('WidgetBuilder');
  });

  it('pascal', () => {
    expect(typeName('WidgetBuilder')).toEqual('WidgetBuilder');
  });
});
