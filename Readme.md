### chalk 美化命令行。

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
