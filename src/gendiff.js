import parseFile from './fileParse.js';
import buildDiffTree from './diff.js';
import { formatPlain, formatStylish, formatJson } from './formatters/index.js';

const genDiff = (file1, file2, format = 'stylish') => {
  const data1 = parseFile(file1);
  const data2 = parseFile(file2);
  const diffTree = buildDiffTree(data1, data2);

  switch (format) {
    case 'plain':
      return formatPlain(diffTree);
    case 'json':
      return formatJson(diffTree);
    case 'stylish':
    default:
      return formatStylish(diffTree);
  }
};

export default genDiff;
