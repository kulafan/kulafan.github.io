---
title: 苹果打开picgo显示损坏解决方案
date: 2024-07-30 19:04:44
tags:
---

Mac(M2) 安装 picgo 问题

## 安装方式

```mipsasm
brew install picgo --cask 
```

安装版本为 2.3.1

## 问题1: 安装后打开 picgo 报错：xxx 已损坏，无法打开。 您应该将它移到废纸篓

解决方法：

终端输入：

```shell
sudo xattr -r -d com.apple.quarantine 你的APP路径
```

APP 路径的获取方法：

- 打开 “访达”（Finder）进入 “应用程序” 目录，找到该软件图标，将图标拖到终端窗口，最终的命令类似 `sudo xattr -r -d com.apple.quarantine '/Applications/PicGo.app'`

## 问题2: 无法从剪贴板上传

现象： 配置好 cos 之后，可以正常从本地推动到主窗口上传，但在剪贴板上的“等待上传” 则点击无效。

![等待上传](https://cdn.jsdelivr.net/gh/kulafan/myPic/upload/202306272143857.png)

排查方式： 打开picgo 的日志文件， 在 “主窗口--PicGo设置--设置日志文件（点击设置） -- 日志文件（点击打开）， 如果其中的报错是如下格式，可以检查一下对应目录 picgo-clipboard-images 是否存在，不存在手动创建一个

```shell
Error: ENOENT: no such file or directory, open '/Users/coreylin/Library/Application Support/picgo/picgo-clipboard-images/202306272131465.png.3840258425'
```

参考：https://github.com/Molunerfinn/PicGo/issues/1039#issuecomment-1368244099

转载：https://www.cnblogs.com/coreylin/p/17510023.html
