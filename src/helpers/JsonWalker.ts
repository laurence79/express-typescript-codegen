import type { Json, JsonArray, JsonMap } from '@laurence79/ts-json';
import { pointerSub } from './pointerSub';

export class JsonWalker {
  private static walkArray(
    obj: JsonArray,
    itemCallback: (obj: JsonMap, ptr: string) => void,
    ptr?: string
  ): void {
    obj.forEach((item, index) =>
      JsonWalker.walk(item, itemCallback, pointerSub(ptr ?? '', index))
    );
  }

  private static walkMap(
    obj: JsonMap,
    itemCallback: (obj: JsonMap, ptr: string) => void,
    ptr?: string
  ): void {
    Object.entries(obj).forEach(([key, item]) =>
      JsonWalker.walk(item, itemCallback, pointerSub(ptr ?? '', key))
    );
  }

  public static walk(
    obj: Json,
    itemCallback: (obj: JsonMap, ptr: string) => void,
    ptr?: string
  ): void {
    if (typeof obj === 'object' && obj !== null) {
      if (Array.isArray(obj)) {
        JsonWalker.walkArray(obj, itemCallback, ptr);
      } else {
        itemCallback(obj, ptr ?? '');
        JsonWalker.walkMap(obj, itemCallback, ptr);
      }
    }
  }
}
