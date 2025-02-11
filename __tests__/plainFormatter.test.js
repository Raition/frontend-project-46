import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import parseFile from '../src/fileParse.js';
import buildDiffTree from '../src/diff.js';
import { formatPlain } from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('Plain formatter should correctly format differences', () => {
  const file1 = parseFile(getFixturePath('file1.json'));
  const file2 = parseFile(getFixturePath('file2.json'));

  const diffTree = buildDiffTree(file1, file2);
  const formattedOutput = formatPlain(diffTree);

  const expectedOutput = fs.readFileSync(getFixturePath('expected_plain.txt'), 'utf-8').trim();

  expect(formattedOutput).toBe(expectedOutput);
});
