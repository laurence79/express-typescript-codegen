import type { Json, JsonArray, JsonMap } from '@laurence79/ts-json';
import { pointerSub } from './pointerSub';

export class AsyncJsonWalker {
  private static async walkArray(
    obj: JsonArray,
    itemCallback: (obj: JsonMap, ptr: string) => Promise<unknown> | unknown,
    ptr?: string
  ): Promise<void> {
    await obj.forEachAsync((item, index) =>
      AsyncJsonWalker.walk(item, itemCallback, pointerSub(ptr ?? '', index))
    );
  }

  private static async walkMap(
    obj: JsonMap,
    itemCallback: (obj: JsonMap, ptr: string) => Promise<unknown> | unknown,
    ptr?: string
  ): Promise<void> {
    await Object.entries(obj).forEachAsync(async ([key, item]) =>
      AsyncJsonWalker.walk(item, itemCallback, pointerSub(ptr ?? '', key))
    );
  }

  public static async walk(
    obj: Json,
    itemCallback: (obj: JsonMap, ptr: string) => Promise<unknown> | unknown,
    ptr?: string
  ): Promise<void> {
    if (typeof obj === 'object' && obj !== null) {
      if (Array.isArray(obj)) {
        await AsyncJsonWalker.walkArray(obj, itemCallback, ptr);
      } else {
        await itemCallback(obj, ptr ?? '');
        await AsyncJsonWalker.walkMap(obj, itemCallback, ptr);
      }
    }
  }
}
