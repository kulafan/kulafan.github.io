---
title: Hexo | 给Hexo Next设置阅读全文[旧版]
date: 2024-07-31 13:13:37
categories: [折腾,Hexo]
tags: [hexo,blog,折腾]
---

Hexo 的 Next 主题默认是首页显示你每篇文章的全文内容，但这会使你的首页篇幅过于冗长，针对这个问题我们可以这么做：

用编辑器打开themes/next 目录下的_config.yml文件

找到代码：

```bash
  auto_excerpt:
      enable: false
      length: 150
```

将enable的 false改成true，length可以设定文章预览的文本长度。

修改后重启即可。

最后编辑于 ：2020.07.27 09:50:32

©著作权归作者所有,转载或内容合作请联系作者

作者：LuckyJin
链接：https://www.jianshu.com/p/d335569a6238
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
