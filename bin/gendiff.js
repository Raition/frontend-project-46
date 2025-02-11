#!/usr/bin/env node

import { program } from 'commander';
import parseFile from '../src/fileParse.js';
import buildDiffTree from '../src/diff.js';
import { formatPlain, formatStylish } from '../src/formatters/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<file1>')
  .argument('<file2>')
  .action((file1, file2, options) => {
    const data1 = parseFile(file1);
    const data2 = parseFile(file2);
    const diffTree = buildDiffTree(data1, data2);

    if (options.format === 'stylish') {
      console.log('{');
      console.log(formatStylish(diffTree));
      console.log('}');
    } else if (options.format === 'plain') {
      console.log(formatPlain(diffTree));
    } else {
      console.log('Unsupported format');
    }
  });

program.parse(process.argv);
