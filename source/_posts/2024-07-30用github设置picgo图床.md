---
title: 用github设置picgo图床
abbrlink: '30182913'
date: 2024-07-30 19:00:55
tags: 折腾
---



本方法来自：https://zhuanlan.zhihu.com/p/638224211

### github创建仓库

![img](https://cdn.jsdelivr.net/gh/kulafan/myPic/upload/v2-00e94f6eb8a93783b898fbb8e7bfffd5_1440w.webp)

github创建仓库管理图片

![img](https://cdn.jsdelivr.net/gh/kulafan/myPic/upload/v2-aeb09ef8052aa72c78b2f8df9c79e013_1440w.webp)

github仓库创建完成

**如果不想使用main分支，可以新建分支**

![img](https://cdn.jsdelivr.net/gh/kulafan/myPic/upload/v2-674ae3a13e13d17ad3284d995be795c7_1440w.png)

github仓库切换分支



### github获取个人token

生成一个token用于PicGo访问图床仓库。

> 访问：[https://github.com/settings/tokens](https://link.zhihu.com/?target=https%3A//github.com/settings/tokens) 然后点击**Generate new token**。

注意

> 这个token生成后只会显示一次！你要把这个token复制一下存到其他地方以备以后要用。

![img](https://cdn.jsdelivr.net/gh/kulafan/myPic/upload/v2-e34d517e923c3dead0ea82c0c933b688_1440w.png)

创建个人token

![img](https://raw.githubusercontent.com/kulafan/myPic/master/uoload/v2-1d41f4c4e844ee31a1b2881a23258755_1440w-20240730190259371.webp)

创建个人token成功



## 配置PicGo

下载地址：[https://github.com/Molunerfinn/PicGo](https://link.zhihu.com/?target=https%3A//github.com/Molunerfinn/PicGo)

官方文档：[https://picgo.github.io/PicGo-Doc/zh/guide](https://link.zhihu.com/?target=https%3A//picgo.github.io/PicGo-Doc/zh/guide)



![img](https://cdn.jsdelivr.net/gh/kulafan/myPic/upload/v2-80c35f4302e2bda387b4917473665056_1440w.webp)

下载



### PicGo配置github图床

> 仓库名的格式是用户名/仓库，比如创建一个叫做cdn_img的仓库，在PicGo里要设定的仓库名就是Sbwillbealier/cdn_img。一般选择main分支(如若选择其他分支，注意文件链接多了一级 */blob*)。

![img](https://cdn.jsdelivr.net/gh/kulafan/myPic/upload/v2-783cab87ea32f34c3ec56b44f97554c6_1440w.webp)

PicGo设置github图床选择main分支

如果需要上传到其他分支，需如下配置，此处使用了 **jsdelivr** 的CDN加速，使用见下一节

![img](https://cdn.jsdelivr.net/gh/kulafan/myPic/upload/v2-dfbe11b2e28b28e794a83b6836a228bc_1440w.png)

PicGo设置github图床选择其他分支

### PicGo设置

![img](https://cdn.jsdelivr.net/gh/kulafan/myPic/upload/v2-31d0058e3169fb4fd18a11e308cec2a9_1440w.webp)

PicGo设置

### PicGo上传测试

![img](https://raw.githubusercontent.com/kulafan/myPic/master/uoload/v2-9946e93bc2e43f2a8e979b0737c3027a_1440w.webp)

PicGo上传测试

### PicGo相册

![img](https://cdn.jsdelivr.net/gh/kulafan/myPic/upload/v2-d1021e4146566c0746eb4e94eb82709a_1440w.webp)

PicGo相册
