###  1. HTML标签

- 块元素

特点 ： 

1. 独占一行
2. 宽度默认是父元素的宽度，高度默认由内容撑开
3. 可以设置宽高

```
div,p,h1,h2,h3,h4,h5,ul,ol,li，dl、dt、dd、form、header、nav、footer,table.
```

- 行内元素

特点 ： 

1. 一行可以显示多个
2. 宽度和高度默认由内容撑开
3. 不可以设置宽高（替换元素除外）

```
a、span 、b、u、i、s、strong、ins、em、del.
```

- 行内块元素

特点 ： 

1. 一行显示多个
2. 默认宽度就是它本身内容的宽度（行内元素）
3. 宽度、高度、行高和边距可以设置（块级元素特点）

```
input , img
```



### 2. HTML5语义化标签

![img](https://wangbaiyuan.cn/wp-content/uploads/2019/03/20190311153605118.jpg)

	

| 标签    | 含义                               |
| ------- | ---------------------------------- |
| header  | 定义了文档的头部区域               |
| footer  | 定义了文档的尾部区域               |
| nav     | 定义文档的导航                     |
| section | 定义文档中的节                     |
| article | 定义文章                           |
| aside   | 定义页面以外的内容                 |
| details | 定义用户可以看到或者隐藏的额外细节 |
| summary | 标签包含details元素的标题          |
| dialog  | 定义对话框                         |
| figure  | 定义自包含内容                     |
| main    | 定义文档主内容                     |
| mark    | 定义文档的主内容                   |
| time    | 定义日期/时间                      |

- 语义化标签的作用
  - 有利于SEO
  - 利于代码理解与维护
  - 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页



### 3. HTML5新的表单功能

#### 新增输入类型

| 新增输入类型                  | 含义                     |
| ----------------------------- | ------------------------ |
| <input type="email">          | 限制用户输入email类型    |
| <input type="url">            | 限制用户输入url地址      |
| <input type="range">          | 滑动控制条               |
| <input type="number">         | 限制用户输入number类型   |
| <input type="search">         | 产生一个搜索意义的表单   |
| <input type="color">          | 选择颜色                 |
| <input type="time">           | 限制用户必须输入时间类型 |
| <input type="month">          | 限制用户必须输入月类型   |
| <input type="week">           | 限制用户必须输入周类型   |
| <input type="datetime-local"> | 选取本地时间             |
| <input type="date">           | 限制用户输入时间类型     |

#### 新增属性

| 新增属性                                   | 含义                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| <input type="text" required="required">    | required为必填字段                                           |
| <input type="text" placeholder="输入内容"> | placeholder为文本框处于未输入状态时，文本框中显示的输入提示  |
| <input type="text" autofocus>              | autofocus为自动聚焦，全文仅存在一个，多个存在时下面的autofocus会覆盖上面的autofocus属性 |
| <input type="text" pattern="[0-9]{5}">     | pattern将属性值设为某个格式的正则表达式                      |
| novalidate                                 | form表单中取消验证，如即使添加required也可不填               |



### 4. iframe

iframe 是HTML的一个标签，默认存在宽高，存在边界，是一个行内块元素，可以通过display更改。**每个iframe里维护一套自己的window对象。只有同域才能进行`iframe`之间的读改写，跨域时，只能进行简单的路由跳转**。

详见： [iframe笔记](./iframe.md)

