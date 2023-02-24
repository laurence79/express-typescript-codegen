import jsonPointer from 'json-pointer';

export const pointerSub = (ptr: string, sub: string | number): string =>
  jsonPointer.compile(jsonPointer.parse(ptr).concat(String(sub)));
