#!/usr/bin/env node

import { program } from 'commander';

const command = () => {
  console.log('Compares two configuration files and shows a difference.');
};

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .action(command)
  .parse(process.argv);
