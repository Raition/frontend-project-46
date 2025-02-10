#!/usr/bin/env node

import { program } from 'commander';
import path from 'path';
import * as parsers from '../src/fileParse.js';
import diff from '../src/diff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'output usage', 'default')
  .arguments('<file1> <file2>')
  .action((file1, file2) => {
    console.log('{');
    if ((path.extname(file1) === '.yaml' || path.extname(file1) === '.yml') && (path.extname(file2) === '.yaml' || path.extname(file2) === '.yml')) {
      diff(parsers.getFileYaml(file1), parsers.getFileYaml(file2));
    } else if ((path.extname(file1) === '.yaml' || path.extname(file1) === '.yml') && path.extname(file2) === '.json') {
      diff(parsers.getFileYaml(file1), parsers.getFileJSON(file2));
    } else if (path.extname(file1) === '.json' && (path.extname(file2) === '.yaml' || path.extname(file2) === '.yml')) {
      diff(parsers.getFileJSON(file1), parsers.getFileYaml(file2));
    }	else {
      diff(parsers.getFileJSON(file1), parsers.getFileJSON(file2));
    }
    console.log('}');
  });

program.parse(process.argv);
