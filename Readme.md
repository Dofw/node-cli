### chalk 美化字体颜色。

安装说明：chalk@5.0.0 使用的 es6module 的方式。在 commonjs 中不支持，原因没有 webpack 这样的工具。

1. 使用内置 color、bgColor

black 黑色
red 红色
green 绿色
yellow 黄色
blue 蓝色
magenta 品红
cyan 青色
white 白色
xxxBright

bgxxx
bgxxxBright

2. 使用 rgb 和 hex 自定义字体颜色，bgRgb 和 bgHex 自定义背景颜色

```
  console.log(chalk.rgb(9, 218, 158).bold('---- Hello Chalk 21 ----'))
```

### commanders 命令、参数定义

1. option方法:
    定义参数选项
    自动生成options的doc文档，--help所展示的。

    约定：
    - a short flag (single character) and a long name, separated by a comma or space or vertical bar ('|')

    - Multi-word options such as "--template-engine" are camel-cased, becoming program.opts().templateEngine etc.

    - use -- to indicate（指示、标识） the end of the options, and any remaining（剩余） arguments will be used without being interpreted（解释、解析）

    - An option and its option-argument can be separated by a space, or combined into the same argument. The option-argument can follow the short option directly or follow an = for a long option

    ```
      serve -p 80 serve -p80
      serve --port 80 serve --port=80
    ```

    - options tow types, boolean、 --expect <value>, undefined（unless Both not defined

    - Multiple boolean short options may be combined together, and may be followed by a single short option taking a value (最后一个cheese)

    ```
      -d -s -p cheese  --> -ds -p cheese --> -dsp cheese
    ```

    - no- 使用是false, 单独使用是true, 如果首先定义 --foo， 那么在 --no-foo 不会改变默认值

    - 常用格式如下

    ```
      .option('-p, --pizza-type <type>', 'flavour of pizza', 'default');`
    ```

