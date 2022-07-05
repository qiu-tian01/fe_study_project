

HTML5中< video >标签用于嵌入媒体播放器，用于支持文档内的视频播放。



### video中可选属性

| 属性     | 值                   | 含义                                                         |
| -------- | -------------------- | ------------------------------------------------------------ |
| Autoplay | Boolean              | 声明该属性后，视频会尽快自动开始播放，不会停下来等待数据全部加载完成 |
| controls | Boolean              | 是否显示浏览器视频控件，包括视频的播放，包括音量，跨帧，暂停/恢复播放。 |
| loop     | Boolean              | 循环播放视频                                                 |
| muted    | Boolean              | 视频静音播放                                                 |
| poster   | URL                  | 海报帧图片，如果未指定该属性，则在视频第一帧可用之前不会显示任何内容，然后将视频的第一帧会作为海报（poster）帧来显示。 |
| preload  | auto\|none\|metadata | 预加载效果属性，auto ：  表示可以下载整个视频文件，即使用户不希望使用它； none ： 不预加载视频；metadata：表示仅预先获取视频的元数据（例如长度）。如果使用 "autoplay"，则忽略该属性 |
| src      | URL                  | 视频播放url                                                  |
| width    | pixels               | 视频播放器宽度                                               |
| height   | pixels               | 视频播放器长度                                               |

### video支持的视频格式与浏览器的支持

当前， <video> 元素支持三种视频格式： MP4, WebM, 和 Ogg:

| 浏览器            | MP4                  | WebM | Ogg  |
| :---------------- | :------------------- | :--- | :--- |
| Internet Explorer | YES                  | NO   | NO   |
| Chrome            | YES                  | YES  | YES  |
| Firefox           | YES                  | YES  | YES  |
| Safari            | YES                  | NO   | NO   |
| Opera             | YES (从 Opera 25 起) | YES  | YES  |

- MP4 = 带有 H.264 视频编码和 AAC 音频编码的 MPEG 4 文件
- WebM = 带有 VP8 视频编码和 Vorbis 音频编码的 WebM 文件
- Ogg = 带有 Theora 视频编码和 Vorbis 音频编码的 Ogg 文件

### 视频格式

| 格式 | MIME-type  |
| :--- | :--------- |
| MP4  | video/mp4  |
| WebM | video/webm |
| Ogg  | video/ogg  |

### video 使用踩坑

- 自动播放(autoplay)会有兼容性问题，有些需要设置静音播放(muted)，有些需要获取用户动作才能自动播放
- 微信IOS无交互时触发play()方法会报错，导致视频无法加载。 解决方法

```
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>

let that = this
if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
        video.play()
    }, false);
} else {
    document.addEventListener("WeixinJSBridgeReady", function () {
        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
            video.play()
        });
    }, false);
}
```

但是这个方法也有一个问题，关乎于WeixinJSBridge的注入时机，有时候快有时候慢。因此如果项目是像vue这种单页应用，需要额外加载js生成dom元素，才能定义以上方法，会导致定义的WeixinJSBridgeReady不一定每次都可以触发，所以不一定每次自动播放都能成功。

- video层级覆盖问题，andriod中video在最顶层，解决方法：需要将video设为内联形式，添加属性 **x5-video-player-type** 为 'h5' 或者 'h5-page'

