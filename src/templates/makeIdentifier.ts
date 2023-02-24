/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */

import { initCap } from './initCap';

export class IdentifierFormat {
  private constructor(public readonly joinWords: (words: string[]) => string) {}

  public static pascalCase = new IdentifierFormat(words =>
    words.map(initCap).join('')
  );

  public static camelCase = new IdentifierFormat(words =>
    words.map((w, i) => (i !== 0 ? initCap(w) : w.toLowerCase())).join('')
  );
}

function getCharClass(char: string) {
  if (/[A-Z]/.test(char)) return 'UPPER';
  if (/[a-z]/.test(char)) return 'LOWER';
  if (/[0-9]/.test(char)) return 'NUMBER';
  return 'OTHER';
}

function* getWords(input: string) {
  let currentWord: string[] = [];

  for (const char of input) {
    const charClass = getCharClass(char);
    const lastChar = currentWord.last();

    // start of new word
    if (!lastChar) {
      if (charClass !== 'OTHER') {
        currentWord.push(char);
      }
      continue;
    }

    // non-upper to upper splits
    if (charClass === 'UPPER' && getCharClass(lastChar) !== 'UPPER') {
      yield currentWord.join('');
      currentWord = [char];
      continue;
    }

    // some other char always splits
    if (charClass === 'OTHER' && currentWord.any()) {
      yield currentWord.join('');
      currentWord = [];
      continue;
    }

    currentWord.push(char);
  }

  if (currentWord.any()) {
    yield currentWord.join('');
  }
}

export const makeIdentifier = (
  source: string,
  format = IdentifierFormat.pascalCase
): string => {
  return format.joinWords([...getWords(source)]);
};
