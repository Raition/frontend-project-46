import path from 'path';
import { fileURLToPath } from 'url';
import * as parsers from '../src/fileParse.js';
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
  const file1 = parsers.getFileJSON(getFixturePath('value1.json'));
  const file2 = parsers.getFileJSON(getFixturePath('value2.json'));

  res = diff(file1, file2);

  expect(res).toBe('=+');
});

test('Удаленные значения', () => {
  const file1 = parsers.getFileJSON(getFixturePath('empty1.json'));
  const file2 = parsers.getFileJSON(getFixturePath('empty2.json'));

  res = diff(file1, file2);

  expect(res).toBe('=-');
});

test('Одинаковые значения', () => {
  const file1 = parsers.getFileJSON(getFixturePath('same1.json'));
  const file2 = parsers.getFileJSON(getFixturePath('same2.json'));

  res = diff(file1, file2);

  expect(res).toBe('==');
});

test('Разные значения', () => {
  const file1 = parsers.getFileJSON(getFixturePath('add1.json'));
  const file2 = parsers.getFileJSON(getFixturePath('add2.json'));

  res = diff(file1, file2);

  expect(res).toBe('=-+');
});

test('Множественные значения', () => {
  const file1 = parsers.getFileJSON(getFixturePath('host1.json'));
  const file2 = parsers.getFileJSON(getFixturePath('host2.json'));

  res = diff(file1, file2);

  expect(res).toBe('=-+--+');
});
