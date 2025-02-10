import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import parseFile from '../src/fileParse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('parse JSON file correctly', () => {
  const filepath = getFixturePath('host1.json');
  const expectedData = JSON.parse(fs.readFileSync(filepath, 'utf-8'));

  expect(parseFile(filepath)).toEqual(expectedData);
});

test('parse YAML file correctly', () => {
  const filepath = getFixturePath('host1.yaml');
  const expectedData = yaml.load(fs.readFileSync(filepath, 'utf-8'));

  expect(parseFile(filepath)).toEqual(expectedData);
});

test('throws error for unsupported file format', () => {
  const unsupportedFile = getFixturePath('text.txt');

  expect(() => parseFile(unsupportedFile)).toThrowError('Unsupported file format: .txt');
});
