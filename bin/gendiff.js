#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/gendiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<file1>')
  .argument('<file2>')
  .action((file1, file2, options) => {
    console.log(genDiff(file1, file2, options.format));
  });

program.parse(process.argv);
