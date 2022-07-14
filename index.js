#!/usr/bin/env node

// 1. 命令定义
const { Command } = require("commander") // 定义指令
const chalk = require("chalk")
const program = new Command()

console.log(chalk("12313221"))

// 命令的描述
program
  .name(chalk.greenBright("mycli"))
  .description("study build myself Cli Tool !!!")
  .version("1.0.0", "-V, --version", "版本号")
  .option("-h, --help", "帮助选项")
  .option("-d, --id <value>")
  .action((a, b) => {
    console.log(program.opts())
  })

// 子命令
program
  .command("split")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    const limit = options.first ? 1 : undefined
    console.log(str.split(options.separator, limit))
  })
  .on("--help", () => {
    console.log("输入指令后，跟上--help，提示子命令使用方式。")
  })

program.parse()
