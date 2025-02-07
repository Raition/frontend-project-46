#!/usr/bin/env node

import { program } from 'commander';
import parseFile from '../src/fileParse.js';
import diff from '../src/diff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'output usage')
  .argument('<file1>')
  .argument('<file2>')
  .action((file1, file2, options) => {
    if (options.format) {
      console.log(file1.split('.').at(-1));
      console.log(file2.split('.').at(-1));
    }
    diff(parseFile(file1), parseFile(file2));
  });

program.parse(process.argv);
