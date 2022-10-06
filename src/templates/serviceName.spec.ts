import { serviceNameTemplate } from './serviceName';

describe('serviceName', () => {
  it('removes spaces', () => {
    const result = serviceNameTemplate('A Wonderful Service');
    expect(result.includes(' ')).toBe(false);
  });

  it('removes full stops', () => {
    const result = serviceNameTemplate('funkyname.com service');
    expect(result.includes('.')).toBe(false);
  });

  it('produces the expected output', () => {
    const result = serviceNameTemplate(
      `funkyname.com's dollar$ service by @laurence79 [dev]`
    );
    expect(result).toEqual('funkynameComSDollarServiceByLaurence79Dev');
  });
});
