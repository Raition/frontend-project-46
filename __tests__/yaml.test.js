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
  const file1 = parsers.getFileYaml(getFixturePath('value1.yml'));
  const file2 = parsers.getFileYaml(getFixturePath('value2.yml'));

  res = diff(file1, file2);

  expect(res).toBe('=+');
});

test('Удаленные значения', () => {
  const file1 = parsers.getFileYaml(getFixturePath('empty1.yml'));
  const file2 = parsers.getFileYaml(getFixturePath('empty2.yml'));

  res = diff(file1, file2);

  expect(res).toBe('=-');
});

test('Одинаковые значения', () => {
  const file1 = parsers.getFileYaml(getFixturePath('same1.yml'));
  const file2 = parsers.getFileYaml(getFixturePath('same2.yml'));

  res = diff(file1, file2);

  expect(res).toBe('==');
});

test('Разные значения', () => {
  const file1 = parsers.getFileYaml(getFixturePath('add1.yml'));
  const file2 = parsers.getFileYaml(getFixturePath('add2.yml'));

  res = diff(file1, file2);

  expect(res).toBe('=-+');
});

test('Множественные значения', () => {
  const file1 = parsers.getFileYaml(getFixturePath('host1.yml'));
  const file2 = parsers.getFileYaml(getFixturePath('host2.yml'));

  res = diff(file1, file2);

  expect(res).toBe('=-+--+');
});
