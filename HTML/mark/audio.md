Audio提供了在 Web 上控制音频的一个非常有效通用的系统。



### audio 属性

| 属性     | 值                   | 描述                                                         |
| -------- | -------------------- | ------------------------------------------------------------ |
| autoplay | Boolean              | 音频在就绪后自动播放                                         |
| controls | Boolean              | 是否展示控件                                                 |
| loop     | Boolean              | 是否循环播放                                                 |
| muted    | Boolean              | 是否静音播放                                                 |
| preload  | auto\|none\|metadata | 预加载效果属性，auto ：  表示可以下载整个文件，即使用户不希望使用它； none ： 不预加载；metadata：表示仅预先获取音频的元数据（例如长度）。如果使用 "autoplay"，则忽略该属性 |
| src      | URL                  | 音频链接                                                     |



### audio支持的音频格式与浏览器的支持

| 浏览器            | MP3  | Wav  | Ogg  |
| :---------------- | :--- | :--- | :--- |
| Internet Explorer | YES  | NO   | NO   |
| Chrome            | YES  | YES  | YES  |
| Firefox           | YES  | YES  | YES  |
| Safari            | YES  | YES  | NO   |
| Opera             | YES  | YES  | YES  |

