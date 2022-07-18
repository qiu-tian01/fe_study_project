

### iframe

iframe 是HTML的一个标签，默认存在宽高，存在边界，是一个行内块元素，可以通过display更改。**每个iframe里维护一套自己的window对象。只有同域才能进行`iframe`之间的读改写，跨域时，只能进行简单的路由跳转**。

简单来说iframe 标签的作用是：在文档中嵌套文档，或者说在网页中嵌套网页



### iframe 属性

| 属性值         | 含义                                                         |
| -------------- | ------------------------------------------------------------ |
| allow          | 用于为`<iframe>`指定其[特征策略](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Feature_Policy). |
| csp            | 对嵌入的资源配置[内容安全策略](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)。 |
| height         | iframe的高度，默认150px                                      |
| importance     | iframe上`src` 属性指定的资源的加载优先级。值分别为**auto**：不指定优先级。浏览器根据自身情况决定资源的加载顺序。**high**；资源的加载优先级较高。**low **：资源的加载优先级较低 |
| name           | iframe的名称                                                 |
| referrerpolicy | 表示在获取 iframe 资源时如何发送 [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) 首部。默认是**no-referrer-when-downgrade**，向不受 [TLS](https://developer.mozilla.org/zh-CN/docs/Glossary/TLS) ([HTTPS](https://developer.mozilla.org/zh-CN/docs/Glossary/https)) 保护的 [origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin) 发送请求时，不发送 [`Referer`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer) 首部。 |
| sandbox        | 该属性对呈现在 iframe 框架中的内容启用一些额外的限制条件     |

详细信息参考MDN ： [传送门](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe#attr-referrerpolicy)



### iframe的优缺点

#### 优点 ： 

1. iframe可以将一个页面在另一个页面原封展示
2. 如有多个页面嵌套一个iframe页面，只需要需改一处，增加复用性
3. 重载不需要浏览器整体，只需要重载其中的一个小页面

#### 缺点 ：

1. 不安全
2. SEO不友好
3. 产生过多页面，不利于管理
4. 增加HTTP请求
5. 移动端有兼容问题，有些无法显示
6. iframe加载是同步的，会阻塞主页面window.onload事件（避免方法就是在主页面onlaod完成后动态加载iframe页面）
7. iframe和主页面共享连接池，浏览器对同域连接有限制，会影响主页面的并行加载
8. 在ifrmae中浏览器的后退按钮会失效



另外iframe加载完成后都会触发iframe的onload事件，所以一般使用try catch或者window.onerror来捕获错误



### iframe的父子之间通信

#### 非跨域通信

##### 父页面获取子页面值和方法

利用**ifrmae.contentWindow** 获取

```
//parent.html
<body>
<iframe id="iframeExample" src="./iframe_son.html" title="iframe Example" name="iframeExample" frameborder="0" onload="load()">
<div>
   <p>iframe非跨域通信通信</p>
   <P>父页面调用子页面方法和元素:</P>
   <button onclick="getSonFun()">获取子元素方法和变量</button>
</div>
</body>
```

```
// parent.js
<script>
window.parent = 'this parent'

function getSonFun() {
  const ifrmae = document.querySelector('#iframeExample')
  console.log(`ifrmae`, ifrmae.contentWindow.son_val)
  ifrmae.contentWindow.sonFun('hello son func')
}		
		....
</script>
```

```
//son.html
<body onload="loadSon()">
    <div id="sonid" style="background: green;">
        <button id="getVar" type="button" onclick="getParentVar()">获取父窗口变量</button>
        <button id="getFun" type="button" onclick="getParentFun()">获取父窗口方法</button>
        <br>
    </div>
</body>
```

```
//son.js
window.son_val = 'this son'

function loadSon() {}

function sonFun(data) {
    console.log(data);
}
```

#####  子页面获取父页面的变量和方法

利用**window.parent**获取

```
//son.js
function getParentVar() {
   console.log(window.parent.parentTest);
}

function getParentFun() {
   window.parent.parentFun()
}
```



#### 跨域通信

利用postmessage来进行通信。详见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage#specification)。

发送时：

```
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

| 值           | 含义                                                         |
| ------------ | ------------------------------------------------------------ |
| otherWindow  | 目标窗口（要发送信息的窗口）,比如 iFrame.contentWindow       |
| message      | 要发送的数据                                                 |
| targetOrigin | 目标窗口的地址（URL），或者字符串'*'表示无限制、任何URL都允许发送 |
| transfer     | 可选参数，是一串和 message 同时传递的 [`Transferable`](https://developer.mozilla.org/zh-CN/docs/Web/API/Transferable) 对象。这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。 |

接收方监听message，来接收传递数据

```
demo
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  // For Chrome, the origin property is in the event.originalEvent
  // object.
  // 这里不准确，chrome 没有这个属性
  // var origin = event.origin || event.originalEvent.origin;
  var origin = event.origin
  if (origin !== "http://example.org:8080")
    return;

  // ...
}
```

##### messgae的值

| 值     | 含义                                                         |
| ------ | ------------------------------------------------------------ |
| data   | 从其他 window 中传递过来的对象。                             |
| origin | 调用postmessage时发送方的origin                              |
| source | 对发送消息的[窗口](https://developer.mozilla.org/en-US/docs/Web/API/Window)对象的引用; 您可以使用此来在具有不同 origin 的两个窗口之间建立双向通信。 |



### iframe的一些用法

1. 通过iframe进行跨域请求
2. 通过iframe进行页面变量隔离存储



#### iframe跨域请求

利用iframe与form表单进行跨域请求

```
// ijax.js

/**
 * 
 * @param {*} url : 接口地址
 * @param {*} data : 请求参数
 * @param {*} cb : 成功回调
 * @param {*} errcb : 失败回调
 */
export function ijax(url, data, cb, errcb) {
    var body = document.getElementsByTagName("body")[0];
    // suffix 定义唯一标识
    var suffix = Math.abs((new Date()).getTime()) + '_' + Math.round(Math.random() * 1e8);
    var id = "ijax_iframe_" + suffix;
    // 动态添加iframe并设置iframe样式
    var ifm = document.createElement("iframe")
    ifm.style.height = '0px';
    ifm.style.position = 'absolute';
    ifm.style.top = '-9999px';
    ifm.style.overflow = 'hidden';
    ifm.style.display = "none";
    ifm.name = id;
    ifm.id = id;
    ifm.frameborder = 0;
    // 添加input用于form通信
    data.callback = 'ijax_' + suffix;
    var inputHtml = (function(data) {
        var html = [];
        for (var name in data) {
            if (name != 'file_el') {
                var val = data[name];
                html.push('<textarea type="hidden" name="' + name + '" >' + val + '</textarea>');
            }
        }
        return html.join('');
    })(data);

    var mmss = data.file_el ? 30000 : 6000;
    var timer = setTimeout(function() {
        errcb && errcb({ status: { code: 400, msg: "timeout" } });
        window['ijax_' + suffix] = null;
        body.removeChild(ifm);
        if (!data.file_el) {
            body.removeChild(form);
        } else {
            body.removeChild(form);
        }
        clearTimeout(timer);
    }, mmss);

    window['ijax_' + suffix] = function(msg) {
        if (typeof cb === 'function') {
            if (msg.result && msg.result.data && msg.result.data.code == '10011') {
                this.window.location.href = 'http://' + msg.result.data.url
            } else {
                cb(msg);
            }
        }
        clearTimeout(timer);
        setTimeout(function() {
            body.removeChild(ifm);
            if (!data.file_el) {
                body.removeChild(form);
            } else {
                body.removeChild(form);
            }
        }, 1e3);
    };

    var form = document.createElement("form");
    form.style.height = '0px';
    form.style.position = 'absolute';
    form.style.top = '-9999px';
    form.style.display = "none";
    form.method = "post";
    form.action = url + "?callback=" + 'ijax_' + suffix;
    form.target = id;
    form.innerHTML = inputHtml;
    body.appendChild(ifm);
    if (data.file_el) {
        var el = data.file_el;
        form.enctype = "multipart/form-data";
        form.encoding = "multipart/form-data";
        body.appendChild(form);
        form.appendChild(el.cloneNode(true));
    } else {
        body.appendChild(form);
    }
    form.submit();
}
```



#### iframe对页面变量隔离存储

主要场景是在页面组件化开发中，每个组件是独立开发的，并且相对于页面随意插拔的，这样的话里面的一些全局变量，特别是全局的store会有重复的风险，可以利用iframe独立存储的特点，把每个组件中的变量存储到子iframe的window中，使用的时候在ifrmaw中存储。相当于做了个沙箱隔离。
