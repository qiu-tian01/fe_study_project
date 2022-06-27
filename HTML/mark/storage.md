### HTML存储方式



#### localStrorage

Localstorage存储的数据将保留到浏览器中。localStorage 里面存储的数据没有过期时间设置,`localStorage` 中的键值对总是以字符串的形式存储。 (需要注意，和 js 对象相比，键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型).



##### API

- 设置一个值: **setItem** 

```
localStorage.setItem('test','test')
```

- 读取存储值:**getItem**

```
localStorage..getItem('test');
```

- 清除某一项的值:**removeItems**

```
localStorage..removeItems('test');
```

- 清除所有localStorage存储值:**clear**

```
localStorage.clear();
```



##### 特点

- 保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。
- 大小为 5M 左右
- 仅在客户端使用，不和服务端进行通信

#### sessionStorage

sessionStorage存储的数据将保留在浏览器中，sessionStorage里面存储的数据会在页面会话结束时被清除。

- 页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。
- **在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，**这点和 session cookies 的运行方式不同。
- 打开多个相同的 URL 的 Tabs 页面，会创建各自的 `sessionStorage`。
- 关闭对应浏览器标签或窗口，会清除对应的 `sessionStorage`。 

##### API

- 设置一个值: **setItem** 

```
sessionStorage.setItem('test','test')
```

- 读取存储值:**getItem**

```
sessionStorage..getItem('test');
```

- 清除某一项的值:**removeItems**

```
sessionStorage..removeItems('test');
```

- 清除所有localStorage存储值:**clear**

```
sessionStorage.clear();
```



##### 特点

- 会话级别的浏览器存储
- 大小为5M左右
- 仅在客户端使用，不和服务端进行通信



#### Cookie

cookie的本职工作其实并不是用来存储，而是**“保持状态”** 。比如记录用户的登录状态，因为http协议是无状态的，如果想保持一个状态就必须找一个承载的地方。**单个的cookie不超过4k，大多浏览器限制一个站点不超过20个cookie**。且cookie是存储在浏览器中的。这样就使得cookie是**不安全** 的。

##### 特点

- 单个cookie不超过4k
- 一个站点cookie数量一般不超过20个
- 可以通过接口与服务器进行通信
- cookie存储在本地，session存储在服务器
- 有生命周期，可设置失效时间



##### cookie的属性

```
document.cookie = `key=value;expires=xxx ; path='/'; domain='xxx'`
```

| 值            | 含义                                     | 类型                   |
| ------------- | ---------------------------------------- | ---------------------- |
| key(必传)     | cookie键值                               | string                 |
| value(必传)   | value值                                  | string                 |
| expires(可选) | 过期时间（UTC时间）                      | Date 对象或者GMTSTring |
| path(可选)    | cookie作用路径，默认为当前文档位置的路径 | string \| null         |
| doain(可选)   | cookie作用域名                           | string \| null         |
| secure(可选)  | cookie是否只会被 https 传输              | Boolean \| null        |



##### cookie的操作

这里先列举js操作cookie的方法，cookie作为可以和服务器通信的工具肯定也有http cookie 的用法，具体参考MDN

[HTTP Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies),document cookie 参考MDN :[Document Cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)

- 创建一个cookie

```
document.cookie = "key=value"
```

这是最简单的创建一个cookie，生命周期随着页面关闭而销毁

- 修改一个cookie

修改一个cookie就直接覆盖赋值就可以

```
document.cookie = "key=value"
```

- 查找一个cookie

可以通过document.cookie查找cookie

```js
function getCookie(key) {
    const cookie = document.cookie.split(';')
    for (let i = 0; i < cookie.length; i++) {
       const c = cookie[i].trim();
       if (c.indexOf(`${key}=`) == 0) {
          return c.substring(name.length, c.length);
       }
    }
    return ""; 
}
```

- 删除cookie

```
        function removeCookie(key) {
          document.cookie = `${key}=-1;`
        }
```




