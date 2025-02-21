import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff', () => {
  test('JSON format', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json'))
      .toEqual(readFixture('expectedJson.txt'));
  });

  test('plain format', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain'))
      .toEqual(readFixture('expectedPlain.txt'));
  });

  test('stylish format', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish'))
      .toEqual(readFixture('expectedStylish.txt'));
  });
});
