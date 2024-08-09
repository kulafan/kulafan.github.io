---
title: LUX 在mac下载bilibili视频的方法
date: 2024-08-09 19:34:29
categories: 折腾
tags: [折腾,Mac,媒体,视频]



---

方法来源于：https://github.com/iawia002/lux

# Lux



*Let there be Lux!*

[![Codecov](https://camo.githubusercontent.com/78a4fa10247f678eb291145bc53ffe48e290eea0faf32f364e44071d4c4bb225/68747470733a2f2f696d672e736869656c64732e696f2f636f6465636f762f632f6769746875622f69617769613030322f6c75782e7376673f7374796c653d666c61742d737175617265) ](https://codecov.io/gh/iawia002/lux)[![GitHub Workflow Status](https://camo.githubusercontent.com/33e6b3d746fa4acb064906ca94bbd91feb7d938859c5cf3ce4c0bbf87920fb81/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f616374696f6e732f776f726b666c6f772f7374617475732f69617769613030322f6c75782f63692e796d6c3f7374796c653d666c61742d737175617265) ](https://github.com/iawia002/lux/actions)[![Go Report Card](https://camo.githubusercontent.com/3a7da29d4ad5d1b7a566828e453e6c71084da8eb69827ed453e6bc21eb403e66/68747470733a2f2f676f7265706f7274636172642e636f6d2f62616467652f6769746875622e636f6d2f69617769613030322f6c75783f7374796c653d666c61742d737175617265) ](https://goreportcard.com/report/github.com/iawia002/lux)[![GitHub release](https://camo.githubusercontent.com/ef82aa4e1f8861c74f0c15a23fb774548b4b860be47ae9193d39d1ee7663f794/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f72656c656173652f69617769613030322f6c75782e7376673f7374796c653d666c61742d737175617265) ](https://github.com/iawia002/lux/releases)[![Homebrew](https://camo.githubusercontent.com/727ba5de2520019687823e23cddd97bcb50f46e05e69a7e620b821c858225f3a/68747470733a2f2f696d672e736869656c64732e696f2f686f6d65627265772f762f6c75782e7376673f7374796c653d666c61742d737175617265)](https://formulae.brew.sh/formula/lux)

👾 Lux is a fast and simple video downloader built with Go.

- Installation
  - [Prerequisites](https://github.com/iawia002/lux/blob/master/README.md#prerequisites)
  - [Install via `go install`](https://github.com/iawia002/lux/blob/master/README.md#install-via-go-install)
  - [Homebrew (macOS only)](https://github.com/iawia002/lux/blob/master/README.md#homebrew-macos-only)
  - [Arch Linux](https://github.com/iawia002/lux/blob/master/README.md#arch-linux)
  - [Void Linux](https://github.com/iawia002/lux/blob/master/README.md#void-linux)
  - [Scoop on Windows](https://github.com/iawia002/lux/blob/master/README.md#scoop-on-windows)
  - [Chocolatey on Windows](https://github.com/iawia002/lux/blob/master/README.md#chocolatey-on-windows)
  - [Cask on Windows/macOS/Linux](https://github.com/iawia002/lux/blob/master/README.md#cask-on-windowsmacoslinux)
- Getting Started
  - [Download a video](https://github.com/iawia002/lux/blob/master/README.md#download-a-video)
  - [Download anything else](https://github.com/iawia002/lux/blob/master/README.md#download-anything-else)
  - [Download playlist](https://github.com/iawia002/lux/blob/master/README.md#download-playlist)
  - [Multiple inputs](https://github.com/iawia002/lux/blob/master/README.md#multiple-inputs)
  - [Resume a download](https://github.com/iawia002/lux/blob/master/README.md#resume-a-download)
  - [Auto retry](https://github.com/iawia002/lux/blob/master/README.md#auto-retry)
  - [Cookies](https://github.com/iawia002/lux/blob/master/README.md#cookies)
  - [Proxy](https://github.com/iawia002/lux/blob/master/README.md#proxy)
  - [Multi-Thread](https://github.com/iawia002/lux/blob/master/README.md#multi-thread)
  - Short link
    - [bilibili](https://github.com/iawia002/lux/blob/master/README.md#bilibili)
  - [Use specified Referrer](https://github.com/iawia002/lux/blob/master/README.md#use-specified-referrer)
  - [Specify the output path and name](https://github.com/iawia002/lux/blob/master/README.md#specify-the-output-path-and-name)
  - [Debug Mode](https://github.com/iawia002/lux/blob/master/README.md#debug-mode)
  - [Reuse extracted data](https://github.com/iawia002/lux/blob/master/README.md#reuse-extracted-data)
  - Options
    - [Download:](https://github.com/iawia002/lux/blob/master/README.md#download)
    - [Network:](https://github.com/iawia002/lux/blob/master/README.md#network)
    - [Playlist:](https://github.com/iawia002/lux/blob/master/README.md#playlist)
    - [Filesystem:](https://github.com/iawia002/lux/blob/master/README.md#filesystem)
    - [Subtitle:](https://github.com/iawia002/lux/blob/master/README.md#subtitle)
    - [Youku:](https://github.com/iawia002/lux/blob/master/README.md#youku)
    - [aria2:](https://github.com/iawia002/lux/blob/master/README.md#aria2)
- [Supported Sites](https://github.com/iawia002/lux/blob/master/README.md#supported-sites)
- Known issues
  - [优酷](https://github.com/iawia002/lux/blob/master/README.md#优酷)
  - [西瓜/头条视频](https://github.com/iawia002/lux/blob/master/README.md#西瓜头条视频)
- [Contributing](https://github.com/iawia002/lux/blob/master/README.md#contributing)
- [Authors](https://github.com/iawia002/lux/blob/master/README.md#authors)
- [Similar projects](https://github.com/iawia002/lux/blob/master/README.md#similar-projects)
- [License](https://github.com/iawia002/lux/blob/master/README.md#license)

## Installation



### Prerequisites



The following dependencies are required and must be installed separately.

- **[FFmpeg](https://www.ffmpeg.org/)**

> **Note**: FFmpeg does not affect the download, only affects the final file merge.

### Install via `go install`



To install Lux, use `go install`, or download the binary file from [Releases](https://github.com/iawia002/lux/releases) page.

```
$ go install github.com/iawia002/lux@latest
```



### Homebrew (macOS only)



For macOS users, you can install `lux` via:

```
$ brew install lux
```



### Arch Linux



For Arch Users [AUR](https://aur.archlinux.org/packages/lux-dl/) package is available.

### Void Linux



For Void linux users, you can install `lux` via:

```
$ xbps-install -S lux
```



### [Scoop](https://scoop.sh/) on Windows



```
$ scoop install lux
```



### [Chocolatey](https://chocolatey.org/) on Windows



```
$ choco install lux
```



### [Cask](https://github.com/axetroy/cask.rs) on Windows/macOS/Linux



```
$ cask install github.com/iawia002/lux
```



## Getting Started



Usage:

```
lux [OPTIONS] URL [URL...]
```



### Download a video



```
$ lux "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

 Site:      YouTube youtube.com
 Title:     Rick Astley - Never Gonna Give You Up (Video)
 Type:      video
 Stream:
     [248]  -------------------
     Quality:         1080p video/webm; codecs="vp9"
     Size:            63.93 MiB (67038963 Bytes)
     # download with: lux -f 248 ...

 41.88 MiB / 63.93 MiB [=================>-------------]  65.51% 4.22 MiB/s 00m05s
```



The `-i` option displays all available quality of video without downloading.

```
$ lux -i "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

 Site:      YouTube youtube.com
 Title:     Rick Astley - Never Gonna Give You Up (Video)
 Type:      video
 Streams:   # All available quality
     [248]  -------------------
     Quality:         1080p video/webm; codecs="vp9"
     Size:            49.29 MiB (51687554 Bytes)
     # download with: lux -f 248 ...

     [137]  -------------------
     Quality:         1080p video/mp4; codecs="avc1.640028"
     Size:            43.45 MiB (45564306 Bytes)
     # download with: lux -f 137 ...

     [398]  -------------------
     Quality:         720p video/mp4; codecs="av01.0.05M.08"
     Size:            37.12 MiB (38926432 Bytes)
     # download with: lux -f 398 ...

     [136]  -------------------
     Quality:         720p video/mp4; codecs="avc1.4d401f"
     Size:            31.34 MiB (32867324 Bytes)
     # download with: lux -f 136 ...

     [247]  -------------------
     Quality:         720p video/webm; codecs="vp9"
     Size:            31.03 MiB (32536181 Bytes)
     # download with: lux -f 247 ...
```



Use `lux -f stream "URL"` to download a specific stream listed in the output of `-i` option.

### Download anything else



If Lux is provided the URL of a specific resource, then it will be downloaded directly:

```
$ lux "https://img9.bcyimg.com/drawer/15294/post/1799t/1f5a87801a0711e898b12b640777720f.jpg"

lux doesn't support this URL right now, but it will try to download it directly

 Site:      Universal
 Title:     1f5a87801a0711e898b12b640777720f
 Type:      image/jpeg
 Stream:
     [default]  -------------------
     Size:            1.00 MiB (1051042 Bytes)
     # download with: lux -f default "URL"

 1.00 MiB / 1.00 MiB [===================================] 100.00% 1.21 MiB/s 0s
```



### Download playlist



The `-p` option downloads an entire playlist instead of a single video.

```
$ lux -i -p "https://www.bilibili.com/bangumi/play/ep198061"

 Site:      哔哩哔哩 bilibili.com
 Title:     Doctor X 第四季：第一集
 Type:      video
 Streams:   # All available quality
     [default]  -------------------
     Quality:         高清 1080P
     Size:            845.66 MiB (886738354 Bytes)
     # download with: lux -f default "URL"


 Site:      哔哩哔哩 bilibili.com
 Title:     Doctor X 第四季：第二集
 Type:      video
 Streams:   # All available quality
     [default]  -------------------
     Quality:         高清 1080P
     Size:            930.71 MiB (975919195 Bytes)
     # download with: lux -f default "URL"

......
```



You can use the `-start`, `-end` or `-items` option to specify the download range of the list:

```
-start
    	Playlist video to start at (default 1)
-end
    	Playlist video to end at
-items
    	Playlist video items to download. Separated by commas like: 1,5,6,8-10
```



For bilibili playlists only:

```
-eto
  File name of each bilibili episode doesn't include the playlist title
```



### Multiple inputs



You can also download multiple URLs at once:

```
$ lux -i "https://www.bilibili.com/video/av21877586" "https://www.bilibili.com/video/av21990740"

 Site:      哔哩哔哩 bilibili.com
 Title:     【莓机会了】甜到虐哭的13集单集MAD「我现在什么都不想干,更不想看14集」
 Type:      video
 Streams:   # All available quality
     [default]  -------------------
     Quality:         高清 1080P
     Size:            51.88 MiB (54403767 Bytes)
     # download with: lux -f default "URL"


 Site:      哔哩哔哩 bilibili.com
 Title:     【莓救了】甜到虐哭！！！国家队单集MAD-当熟悉的bgm响起，眼泪从脸颊滑下
 Type:      video
 Streams:   # All available quality
     [default]  -------------------
     Quality:         高清 1080P
     Size:            77.63 MiB (81404093 Bytes)
     # download with: lux -f default "URL"
```



These URLs will be downloaded one by one.

You can also use the `-F` option to read URLs from file:

```
$ lux -F ~/Desktop/u.txt

 Site:      微博 weibo.com
 Title:     在Google，我们设计什么？ via@阑夕
 Type:      video
 Stream:
     [default]  -------------------
     Size:            19.19 MiB (20118196 Bytes)
     # download with: lux -f default "URL"

 19.19 MiB / 19.19 MiB [=================================] 100.00% 9.69 MiB/s 1s

......
```



You can use the `-start`, `-end` or `-items` option to specify the download range of the list:

```
-start
    	File line to start at (default 1)
-end
    	File line to end at
-items
    	File lines to download. Separated by commas like: 1,5,6,8-10
```



### Resume a download



Ctrl+C interrupts a download.

A temporary `.download` file is kept in the output directory. If `lux` is ran with the same arguments, then the download progress will resume from the last session.

### Auto retry



lux will auto retry when the download failed, you can specify the retry times by `-retry` option (default is 100).

### Cookies



Cookies can be provided to `lux` with the `-c` option if they are required for accessing the video.

Cookies can be the following format or [Netscape Cookie](https://curl.haxx.se/rfc/cookie_spec.html) format:

```
name=value; name2=value2; ...
```



Cookies can be a string or a text file, supply cookies in one of the two following ways.

As a string:

```
$ lux -c "name=value; name2=value2" "https://www.bilibili.com/video/av20203945"
```



As a text file:

```
$ lux -c cookies.txt "https://www.bilibili.com/video/av20203945"
```



### Proxy



You can set the HTTP/SOCKS5 proxy using environment variables:

```
$ HTTP_PROXY="http://127.0.0.1:1087/" lux -i "https://www.youtube.com/watch?v=Gnbch2osEeo"
```



```
$ HTTP_PROXY="socks5://127.0.0.1:1080/" lux -i "https://www.youtube.com/watch?v=Gnbch2osEeo"
```



### Multi-Thread



Use `--multi-thread` or `-m` multiple threads to download single video.

Use `--thread` or `-n` option to set the number of download threads(default is 10).

> Note: If the video has multi fragment, the number of actual download threads will increase.
>
> For example:
>
> - If `-n` is set to 10, and the video has 2 fragments, then 20 threads will actually be used.
> - If the video has 20 fragments, only 10 fragments are downloaded in the same time, the actual threads count is 100.

> **Special Tips:** Use too many threads in **mgtv** download will cause HTTP 403 error, we recommend setting the number of threads to **1**.

### Short link



#### bilibili



You can just use `av` or `ep` number to download bilibili's video:

```
$ lux -i ep198381 av21877586

 Site:      哔哩哔哩 bilibili.com
 Title:     狐妖小红娘：第79话 南国公主的吃货本色
 Type:      video
 Streams:   # All available quality
     [default]  -------------------
     Quality:         高清 1080P
     Size:            485.23 MiB (508798478 Bytes)
     # download with: lux -f default "URL"


 Site:      哔哩哔哩 bilibili.com
 Title:     【莓机会了】甜到虐哭的13集单集MAD「我现在什么都不想干,更不想看14集」
 Type:      video
 Streams:   # All available quality
     [default]  -------------------
     Quality:         高清 1080P
     Size:            51.88 MiB (54403767 Bytes)
     # download with: lux -f default "URL"
```



### Use specified Referrer



A Referrer can be used for the request with the `-r` option:

```
$ lux -r "https://www.bilibili.com/video/av20383055/" "http://cn-scnc1-dx.acgvideo.com/"
```



### Specify the output path and name



The `-o` option sets the path, and `-O` option sets the name of the downloaded file:

```
$ lux -o ../ -O "hello" "https://example.com"
```



### Debug Mode



The `-d` option outputs network request messages:

```
$ lux -i -d "http://www.bilibili.com/video/av20088587"

URL:         http://www.bilibili.com/video/av20088587
Method:      GET
Headers:     http.Header{
    "Referer":         {"http://www.bilibili.com/video/av20088587"},
    "Accept":          {"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"},
    "Accept-Charset":  {"UTF-8,*;q=0.5"},
    "Accept-Encoding": {"gzip,deflate,sdch"},
    "Accept-Language": {"en-US,en;q=0.8"},
    "User-Agent":      {"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36"},
}
Status Code: 200

URL:         https://interface.bilibili.com/v2/playurl?appkey=84956560bc028eb7&cid=32782944&otype=json&qn=116&quality=116&type=&sign=fb2e3f261fec398652f96d358517e535
Method:      GET
Headers:     http.Header{
    "Accept-Charset":  {"UTF-8,*;q=0.5"},
    "Accept-Encoding": {"gzip,deflate,sdch"},
    "Accept-Language": {"en-US,en;q=0.8"},
    "User-Agent":      {"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36"},
    "Referer":         {"https://interface.bilibili.com/v2/playurl?appkey=84956560bc028eb7&cid=32782944&otype=json&qn=116&quality=116&type=&sign=fb2e3f261fec398652f96d358517e535"},
    "Accept":          {"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"},
}
Status Code: 200

 Site:      哔哩哔哩 bilibili.com
 Title:     燃油动力的遥控奥迪R8跑赛道
 Type:      video
 Streams:   # All available quality
     [default]  -------------------
     Quality:         高清 1080P
     Size:            64.38 MiB (67504795 Bytes)
     # download with: lux -f default "URL"
```



### Reuse extracted data



The `-j` option will print the extracted data in JSON format.

```
$ lux -j "https://www.bilibili.com/video/av20203945"

{
    "site": "哔哩哔哩 bilibili.com",
    "title": "【2018拜年祭单品】相遇day by day",
    "type": "video",
    "streams": {
        "15": {
            "urls": [
                {
                    "url": "...",
                    "size": 18355205,
                    "ext": "flv"
                }
            ],
            "quality": "流畅 360P",
            "size": 18355205
        },
        "32": {
            "urls": [
                {
                    "url": "...",
                    "size": 40058632,
                    "ext": "flv"
                }
            ],
            "quality": "清晰 480P",
            "size": 40058632
        },
        "64": {
            "urls": [
                {
                    "url": "...",
                    "size": 82691087,
                    "ext": "flv"
                }
            ],
            "quality": "高清 720P",
            "size": 82691087
        },
        "80": {
            "urls": [
                {
                    "url": "...",
                    "size": 121735559,
                    "ext": "flv"
                }
            ],
            "quality": "高清 1080P",
            "size": 121735559
        }
    }
}
```



### Options



```
  -i	Information only
  -F string
    	URLs file path
  -d	Debug mode
  -j	Print extracted data
  -s	Minimum outputs
  -v	Show version
```



#### Download:



```
  -f string
    	Select specific stream to download
  -p	Download playlist
  -n int
    	The number of download thread (only works for multiple-parts video) (default 10)
  -c string
    	Cookie
  -r string
    	Use specified Referrer
  -cs int
    	HTTP chunk size for downloading (in MB) (default 1)
```



#### Network:



```
  -retry int
    	How many times to retry when the download failed (default 10)
```



#### Playlist:



```
  -start int
    	Playlist video to start at (default 1)
  -end int
    	Playlist video to end at
  -items string
    	Playlist video items to download. Separated by commas like: 1,5,6,8-10
```



#### Filesystem:



```
  -o string
    	Specify the output path
  -O string
    	Specify the output file name
```



#### Subtitle:



```
  -C	Download captions
```



#### Youku:



```
  -ccode string
    	Youku ccode (default "0502")
  -ckey string
    	Youku ckey (default "7B19C0AB12633B22E7FE81271162026020570708D6CC189E4924503C49D243A0DE6CD84A766832C2C99898FC5ED31F3709BB3CDD82C96492E721BDD381735026")
  -password string
    	Youku password
```



#### aria2:



> Note: If you use aria2 to download, you need to merge the multi-part videos yourself.

```
  -aria2
    	Use Aria2 RPC to download
  -aria2addr string
    	Aria2 Address (default "localhost:6800")
  -aria2method string
    	Aria2 Method (default "http")
  -aria2token string
    	Aria2 RPC Token
```



## Supported Sites



| Site             | URL                                                          | 🎬 Videos | 🌁 Images | 🔊 Audio | 📚 Playlist | 🍪 VIP adaptation | Build Status                                                 |
| ---------------- | ------------------------------------------------------------ | -------- | -------- | ------- | ---------- | ---------------- | ------------------------------------------------------------ |
| 抖音             | [https://www.douyin.com](https://www.douyin.com/)            | ✓        | ✓        |         |            |                  | [![douyin](https://github.com/iawia002/lux/actions/workflows/stream_douyin.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_douyin.yml) |
| 哔哩哔哩         | [https://www.bilibili.com](https://www.bilibili.com/)        | ✓        |          |         | ✓          | ✓                | [![bilibili](https://github.com/iawia002/lux/actions/workflows/stream_bilibili.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_bilibili.yml) |
| 半次元           | [https://bcy.net](https://bcy.net/)                          |          | ✓        |         |            |                  | [![bcy](https://github.com/iawia002/lux/actions/workflows/stream_bcy.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_bcy.yml) |
| pixivision       | [https://www.pixivision.net](https://www.pixivision.net/)    |          | ✓        |         |            |                  | [![pixivision](https://github.com/iawia002/lux/actions/workflows/stream_pixivision.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_pixivision.yml) |
| 优酷             | [https://www.youku.com](https://www.youku.com/)              | ✓        |          |         |            | ✓                | [![youku](https://github.com/iawia002/lux/actions/workflows/stream_youku.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_youku.yml) |
| YouTube          | [https://www.youtube.com](https://www.youtube.com/)          | ✓        |          |         | ✓          |                  | [![youtube](https://github.com/iawia002/lux/actions/workflows/stream_youtube.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_youtube.yml) |
| 西瓜视频（头条） | [https://m.toutiao.com](https://m.toutiao.com/), [https://v.ixigua.com](https://v.ixigua.com/), [https://www.ixigua.com](https://www.ixigua.com/) | ✓        |          |         |            |                  | [![ixigua](https://github.com/iawia002/lux/actions/workflows/stream_ixigua.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_ixigua.yml) |
| 爱奇艺           | [https://www.iqiyi.com](https://www.iqiyi.com/)              | ✓        |          |         |            |                  | [![iqiyi](https://github.com/iawia002/lux/actions/workflows/stream_iqiyi.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_iqiyi.yml) |
| 新片场           | [https://www.xinpianchang.com](https://www.xinpianchang.com/) | ✓        |          |         |            |                  | [![xinpianchang](https://github.com/iawia002/lux/actions/workflows/stream_xinpianchang.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_xinpianchang.yml) |
| 芒果 TV          | [https://www.mgtv.com](https://www.mgtv.com/)                | ✓        |          |         |            |                  | [![mgtv](https://github.com/iawia002/lux/actions/workflows/stream_mgtv.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_mgtv.yml) |
| 糖豆广场舞       | [https://www.tangdou.com](https://www.tangdou.com/)          | ✓        |          |         |            |                  | [![tangdou](https://github.com/iawia002/lux/actions/workflows/stream_tangdou.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_tangdou.yml) |
| Tumblr           | [https://www.tumblr.com](https://www.tumblr.com/)            | ✓        | ✓        |         |            |                  | [![tumblr](https://github.com/iawia002/lux/actions/workflows/stream_tumblr.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_tumblr.yml) |
| Vimeo            | [https://vimeo.com](https://vimeo.com/)                      | ✓        |          |         |            |                  | [![vimeo](https://github.com/iawia002/lux/actions/workflows/stream_vimeo.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_vimeo.yml) |
| Facebook         | [https://facebook.com](https://facebook.com/)                | ✓        |          |         |            |                  | [![facebook](https://github.com/iawia002/lux/actions/workflows/stream_facebook.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_facebook.yml) |
| 斗鱼视频         | [https://v.douyu.com](https://v.douyu.com/)                  | ✓        |          |         |            |                  | [![douyu](https://github.com/iawia002/lux/actions/workflows/stream_douyu.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_douyu.yml) |
| 秒拍             | [https://www.miaopai.com](https://www.miaopai.com/)          | ✓        |          |         |            |                  | [![miaopai](https://github.com/iawia002/lux/actions/workflows/stream_miaopai.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_miaopai.yml) |
| 微博             | [https://weibo.com](https://weibo.com/)                      | ✓        |          |         |            |                  | [![weibo](https://github.com/iawia002/lux/actions/workflows/stream_weibo.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_weibo.yml) |
| Instagram        | [https://www.instagram.com](https://www.instagram.com/)      | ✓        | ✓        |         |            |                  | [![instagram](https://github.com/iawia002/lux/actions/workflows/stream_instagram.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_instagram.yml) |
| Threads          | [https://www.threads.net](https://www.threads.net/)          | ✓        | ✓        |         |            |                  | [![threads](https://github.com/iawia002/lux/actions/workflows/stream_threads.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_threads.yml) |
| Twitter          | [https://twitter.com](https://twitter.com/)                  | ✓        |          |         |            |                  | [![twitter](https://github.com/iawia002/lux/actions/workflows/stream_twitter.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_twitter.yml) |
| 腾讯视频         | [https://v.qq.com](https://v.qq.com/)                        | ✓        |          |         |            |                  | [![qq](https://github.com/iawia002/lux/actions/workflows/stream_qq.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_qq.yml) |
| 网易云音乐       | [https://music.163.com](https://music.163.com/)              | ✓        |          |         |            |                  | [![netease](https://github.com/iawia002/lux/actions/workflows/stream_netease.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_netease.yml) |
| 音悦台           | [https://yinyuetai.com](https://yinyuetai.com/)              | ✓        |          |         |            |                  | [![yinyuetai](https://github.com/iawia002/lux/actions/workflows/stream_yinyuetai.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_yinyuetai.yml) |
| 极客时间         | [https://time.geekbang.org](https://time.geekbang.org/)      | ✓        |          |         |            |                  | [![geekbang](https://github.com/iawia002/lux/actions/workflows/stream_geekbang.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_geekbang.yml) |
| Pornhub          | [https://pornhub.com](https://pornhub.com/)                  | ✓        |          |         |            |                  | [![pornhub](https://github.com/iawia002/lux/actions/workflows/stream_pornhub.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_pornhub.yml) |
| XVIDEOS          | [https://xvideos.com](https://xvideos.com/)                  | ✓        |          |         |            |                  | [![xvideos](https://github.com/iawia002/lux/actions/workflows/stream_xvideos.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_xvideos.yml) |
| 聯合新聞網       | [https://udn.com](https://udn.com/)                          | ✓        |          |         |            |                  | [![udn](https://github.com/iawia002/lux/actions/workflows/stream_udn.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_udn.yml) |
| TikTok           | [https://www.tiktok.com](https://www.tiktok.com/)            | ✓        |          |         |            |                  | [![tiktok](https://github.com/iawia002/lux/actions/workflows/stream_tiktok.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_tiktok.yml) |
| Pinterest        | [https://www.pinterest.com](https://www.pinterest.com/)      | ✓        |          |         |            |                  | [![pinterest](https://github.com/iawia002/lux/actions/workflows/stream_pinterest.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_pinterest.yml) |
| 好看视频         | [https://haokan.baidu.com](https://haokan.baidu.com/)        | ✓        |          |         |            |                  | [![haokan](https://github.com/iawia002/lux/actions/workflows/stream_haokan.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_haokan.yml) |
| AcFun            | [https://www.acfun.cn](https://www.acfun.cn/)                | ✓        |          |         | ✓          |                  | [![acfun](https://github.com/iawia002/lux/actions/workflows/stream_acfun.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_acfun.yml) |
| Eporner          | [https://eporner.com](https://eporner.com/)                  | ✓        |          |         |            |                  | [![eporner](https://github.com/iawia002/lux/actions/workflows/stream_eporner.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_eporner.yml) |
| StreamTape       | [https://streamtape.com](https://streamtape.com/)            | ✓        |          |         |            |                  | [![streamtape](https://github.com/iawia002/lux/actions/workflows/stream_streamtape.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_streamtape.yml) |
| 虎扑             | [https://hupu.com](https://hupu.com/)                        | ✓        |          |         |            |                  | [![hupu](https://github.com/iawia002/lux/actions/workflows/stream_hupu.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_hupu.yml) |
| 虎牙视频         | [https://v.huya.com](https://v.huya.com/)                    | ✓        |          |         |            |                  | [![huya](https://github.com/iawia002/lux/actions/workflows/stream_huya.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_huya.yml) |
| 喜马拉雅         | [https://www.ximalaya.com](https://www.ximalaya.com/)        |          |          | ✓       |            |                  | [![ximalaya](https://github.com/iawia002/lux/actions/workflows/stream_ximalaya.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_ximalaya.yml) |
| 快手             | [https://www.kuaishou.com](https://www.kuaishou.com/)        | ✓        |          |         |            |                  | [![kuaishou](https://github.com/iawia002/lux/actions/workflows/stream_kuaishou.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_kuaishou.yml) |
| Reddit           | [https://www.reddit.com](https://www.reddit.com/)            | ✓        | ✓        |         |            |                  | [![reddit](https://github.com/iawia002/lux/actions/workflows/stream_reddit.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_reddit.yml) |
| VKontakte        | [https://vk.com](https://vk.com/)                            | ✓        |          |         |            |                  | [![vk](https://github.com/iawia002/lux/actions/workflows/stream_vk.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_vk.yml/) |
| 知乎             | [https://zhihu.com](https://zhihu.com/)                      | ✓        |          |         |            |                  | [![zhihu](https://github.com/iawia002/lux/actions/workflows/stream_zhihu.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_zhihu.yml/) |
| Rumble           | [https://rumble.com](https://rumble.com/)                    | ✓        |          |         |            |                  | [![rumble](https://github.com/iawia002/lux/actions/workflows/stream_rumble.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_rumble.yml/) |
| 小红书           | [https://xiaohongshu.com](https://xiaohongshu.com/)          | ✓        |          |         |            |                  | [![xiaohongshu](https://github.com/iawia002/lux/actions/workflows/stream_xiaohongshu.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_xiaohongshu.yml/) |
| Zing MP3         | [https://zingmp3.vn](https://zingmp3.vn/)                    | ✓        |          | ✓       |            |                  | [![zingmp3](https://github.com/iawia002/lux/actions/workflows/stream_zingmp3.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_zingmp3.yml/) |
| Bitchute         | [https://www.bitchute.com](https://www.bitchute.com/)        | ✓        |          |         |            |                  | [![bitchute](https://github.com/iawia002/lux/actions/workflows/stream_bitchute.yml/badge.svg)](https://github.com/iawia002/lux/actions/workflows/stream_bitchute.yml/) |

## Known issues



### 优酷



优酷的 `ccode` 经常变化导致 lux 不可用，如果你知道有新的可用的 `ccode`，可以直接使用 `lux -ccode ...` 而不用等待 lux 更新（当然，也欢迎你给我们提一个 Pull request 来更新默认的 `ccode`）

最好是每次下载都附带登录过的 Cookie 以避免部分 `ccode` 的问题

### 西瓜/头条视频



西瓜/头条视频必须带 Cookie 才能下载成功，西瓜和头条可共用西瓜视频的 Cookie，Cookie 的有效期可能较短，下载失败就更新 Cookie 尝试：

```
$ lux -c "msToken=yoEh0-qLUq4obZ8Sfxsem_CxCo9R3NM6ViTrWaRcM1...; ttwid=1%7C..." "https://m.toutiao.com/is/iYbTfJ79/"
```



## Contributing



Lux is an open source project and built on the top of open-source projects. Check out the [Contributing Guide](https://github.com/iawia002/lux/blob/master/CONTRIBUTING.md) to get started.

## Authors



Code with ❤️ by [iawia002](https://github.com/iawia002) and lovely [contributors](https://github.com/iawia002/lux/graphs/contributors)

## Similar projects



- [youtube](https://github.com/kkdai/youtube)
- [youtube-dl](https://github.com/rg3/youtube-dl)
- [you-get](https://github.com/soimort/you-get)
- [ytdl](https://github.com/rylio/ytdl)

## License



MIT

Copyright (c) 2018-present, iawia002