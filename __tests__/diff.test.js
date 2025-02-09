import path from 'path';
import { fileURLToPath } from 'url';
import parseFile from '../src/fileParse.js';
import diff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

// eslint-disable-next-line no-unused-vars
let res;
beforeEach(() => {
  res = '';
});

test('Добавленные значения', () => {
  const file1 = parseFile(getFixturePath('value1.json'));
  const file2 = parseFile(getFixturePath('value2.json'));

  res = diff(file1, file2);

  expect(res).toBe('=+');
});

test('Удаленные значения', () => {
  const file1 = parseFile(getFixturePath('empty1.json'));
  const file2 = parseFile(getFixturePath('empty2.json'));

  res = diff(file1, file2);

  expect(res).toBe('=-');
});

test('Одинаковые значения', () => {
  const file1 = parseFile(getFixturePath('same1.json'));
  const file2 = parseFile(getFixturePath('same2.json'));

  res = diff(file1, file2);

  expect(res).toBe('==');
});

test('Разные значения', () => {
  const file1 = parseFile(getFixturePath('add1.json'));
  const file2 = parseFile(getFixturePath('add2.json'));

  res = diff(file1, file2);

  expect(res).toBe('=-+');
});

test('Множественные значения', () => {
  const file1 = parseFile(getFixturePath('host1.json'));
  const file2 = parseFile(getFixturePath('host2.json'));

  res = diff(file1, file2);

  expect(res).toBe('=-+--+');
});
