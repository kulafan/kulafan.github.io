---
title: Cloudflare加速GitHub部署hexo博客后无法访问
categories:
  - 折腾
  - Hexo
tags:
  - 折腾
  - HEXO
abbrlink: 94edb7d2
date: 2024-08-04 20:05:29
---

 

在cloudflare启用proxy加速之后主博客无法访问后来才发现 原来只要在cloud flare上把github的ip添加a记录解析就好了。之前我的@解析和www都是解析到cname上。

![1](./2024-08-04Cloudflare加速GitHub部署hexo博客后无法访问/1.jpg)
