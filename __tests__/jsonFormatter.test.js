import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import parseFile from '../src/fileParse.js';
import buildDiffTree from '../src/diff.js';
import { formatJson } from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('Plain formatter should correctly format differences', () => {
  const file1 = parseFile(getFixturePath('js1.json'));
  const file2 = parseFile(getFixturePath('js2.json'));

  const diffTree = buildDiffTree(file1, file2);
  const formattedOutput = formatJson(diffTree);

  const expectedOutput = fs.readFileSync(getFixturePath('expected_json.txt'), 'utf-8').trim();

  expect(formattedOutput).toBe(expectedOutput);
});
