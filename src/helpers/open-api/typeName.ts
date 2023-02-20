/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
const initCap = (value: string) => {
  return value
    .toLowerCase()
    .replace(/(?:^|\s)[a-z]/g, (m: string) => m.toUpperCase());
};

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

export const typeName = (schemaName: string): string => {
  return [...getWords(schemaName)].map(initCap).join('');
};
