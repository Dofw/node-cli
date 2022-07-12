#!/usr/bin/env node

// 1. 命令定义
const { Command } = require('commander');
const program = new Command();

// 命令的描述
program
  .name('MyCli')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

// 命令
program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();
