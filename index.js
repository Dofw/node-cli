#!/usr/bin/env node

// 1. 命令定义
const { Command } = require("commander") // 定义指令
const chalk = require("chalk") // 字体颜色
const ora = require("ora") // loading动效
const inquirer = require("inquirer") // 采集用户输入
// const handlerbars = require("handlerbars") // xxxx
const download = require("download-git-repo") // 下载仓库模板工具
const program = new Command()

console.log(chalk("12313221"))

// 命令的描述
program
  .name(chalk.greenBright("mycli"))
  .description("study build myself Cli Tool !!!")
  .version("1.0.0", "-V, --version", "版本号")
  .option("-h, --help", "帮助选项")

// 添加 组件模板（子命令）
const tempComps = {
  component: {
    url: ,
    description: 'common component template!'
  }
}

program
  .command("add")
  .description("add common component!!!")
  .argument("<name>", "component name")
  .action((str, options, command) => {
    console.log("打印结果！", str, options, command)
  })
  .on("--help", () => {
    console.log("输入指令后，跟上--help，提示子命令使用方式。")
  })

program.parse()
