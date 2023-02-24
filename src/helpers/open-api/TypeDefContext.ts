export class TypeDefContext {
  private readonly typeIndex: string[] = [];
  private readonly types: Record<string, string> = {};

  public emitType(name: string, definition: string): void {
    this.types[name] = definition;
  }

  public shouldEmitType(name: string): boolean {
    return !this.typeIndex.includes(name);
  }

  public willEmitType(name: string): void {
    this.typeIndex.push(name);
  }

  public generateCode(): string {
    return Object.entries(this.types)
      .map(([name, def]) => `export type ${name} = ${def};`)
      .join('\n\n');
  }
}
