type Emission =
  | { kind: 'type'; definition: string }
  | { kind: 'enum'; literals: string[]; nullable: boolean };

export class TypeDefContext {
  private readonly typeIndex: string[] = [];
  private readonly emissions: Record<string, Emission> = {};

  public emitType(name: string, definition: string): void {
    this.emissions[name] = { kind: 'type', definition };
  }

  public emitEnum(name: string, literals: string[], nullable: boolean): void {
    this.emissions[name] = { kind: 'enum', literals, nullable };
  }

  public shouldEmitType(name: string): boolean {
    return !this.typeIndex.includes(name);
  }

  public willEmitType(name: string): void {
    this.typeIndex.push(name);
  }

  public generateCode(): string {
    return Object.entries(this.emissions)
      .map(([name, emission]) => {
        if (emission.kind === 'type') {
          return `export type ${name} = ${emission.definition};`;
        }
        const constLine = `export const ${name} = [${emission.literals.join(
          ', '
        )}] as const;`;
        const typeLine = `export type ${name} = (typeof ${name})[number]${
          emission.nullable ? ' | null' : ''
        };`;
        return `${constLine}\n${typeLine}`;
      })
      .join('\n\n');
  }
}
