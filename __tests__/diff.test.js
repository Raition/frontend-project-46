import { fileURLToPath } from 'url';
import path from 'path';
import buildDiffTree from '../src/diff.js';
import parseFile from '../src/fileParse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('buildDiffTree should work correctly', () => {
  const obj1 = parseFile(getFixturePath('host1.json'));
  const obj2 = parseFile(getFixturePath('host2.json'));

  const expectedDiff = [
    { key: 'follow', type: 'removed', value: false },
    { key: 'host', type: 'unchanged', value: 'hexlet.io' },
    { key: 'proxy', type: 'removed', value: '123.234.53.22' },
    { key: 'rid', type: 'added', value: false },
    // eslint-disable-next-line object-curly-newline
    { key: 'timeout', type: 'changed', oldValue: 50, newValue: 20 },
    { key: 'verbose', type: 'added', value: true },
  ];

  expect(buildDiffTree(obj1, obj2)).toEqual(expectedDiff);
});

test('builds diff tree for nested structures', () => {
  const file1 = parseFile(getFixturePath('nested1.json'), 'utf-8');
  const file2 = parseFile(getFixturePath('nested2.json'), 'utf-8');

  const expectedDiff = [
    { key: 'key1', type: 'unchanged', value: 'value1' },
    {
      key: 'key2', type: 'changed', oldValue: 'value2', newValue: 'newValue',
    },
    {
      key: 'nested',
      type: 'nested',
      children: [
        { key: 'subkey1', type: 'unchanged', value: 'subvalue1' },
        { key: 'subkey2', type: 'removed', value: 'subvalue2' },
        { key: 'subkey3', type: 'added', value: 'subvalue3' },
      ],
    },
  ];

  expect(buildDiffTree(file1, file2)).toEqual(expectedDiff);
});
