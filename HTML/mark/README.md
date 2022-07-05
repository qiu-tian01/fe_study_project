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

详见： [iframe笔记](./iframe.md)

### 5. 新增存储方法
详见： [存储笔记](./storage.md)

### 6. indexDB

详见 ： [indexDB](./indexDB.md)

### 7. Drag

HTML5标准中，增加了元素可拖动的元素，Drag。在元素标签中设置draggable为true、

```
 <div class="drag" draggable="true">拖动元素</div>
```

拖放会经历拖动开始(ondragstart)，拖动(drag)，拖动结束(dragend)

当元素节点或选中的文本被拖拉时，就会持续触发拖拉事件，包括以下一些事件。

- `drag`：拖拉过程中，在被拖拉的节点上持续触发（相隔几百毫秒）。
- `dragstart`：用户开始拖拉时，在被拖拉的节点上触发，该事件的`target`属性是被拖拉的节点。通常应该在这个事件的监听函数中，指定拖拉的数据。
- `dragend`：拖拉结束时（释放鼠标键或按下 ESC 键）在被拖拉的节点上触发，该事件的`target`属性是被拖拉的节点。它与`dragstart`事件，在同一个节点上触发。不管拖拉是否跨窗口，或者中途被取消，`dragend`事件总是会触发的。
- `dragenter`：拖拉进入当前节点时，在当前节点上触发一次，该事件的`target`属性是当前节点。通常应该在这个事件的监听函数中，指定是否允许在当前节点放下（drop）拖拉的数据。如果当前节点没有该事件的监听函数，或者监听函数不执行任何操作，就意味着不允许在当前节点放下数据。在视觉上显示拖拉进入当前节点，也是在这个事件的监听函数中设置。
- `dragover`：拖拉到当前节点上方时，在当前节点上持续触发（相隔几百毫秒），该事件的`target`属性是当前节点。该事件与`dragenter`事件的区别是，`dragenter`事件在进入该节点时触发，然后只要没有离开这个节点，`dragover`事件会持续触发。
- `dragleave`：拖拉操作离开当前节点范围时，在当前节点上触发，该事件的`target`属性是当前节点。如果要在视觉上显示拖拉离开操作当前节点，就在这个事件的监听函数中设置。
- `drop`：被拖拉的节点或选中的文本，释放到目标节点时，在目标节点上触发。注意，如果当前节点不允许`drop`，即使在该节点上方松开鼠标键，也不会触发该事件。如果用户按下 ESC 键，取消这个操作，也不会触发该事件。该事件的监听函数负责取出拖拉数据，并进行相关处理。

```
/* HTML 代码如下
 <div class="dropzone">
   <div id="draggable" draggable="true">
     该节点可拖拉
   </div>
 </div>
 <div class="dropzone"></div>
 <div class="dropzone"></div>
 <div class="dropzone"></div>
*/

// 被拖拉节点
var dragged;

document.addEventListener('dragstart', function (event) {
  // 保存被拖拉节点
  dragged = event.target;
  // 被拖拉节点的背景色变透明
  event.target.style.opacity = 0.5;
}, false);

document.addEventListener('dragend', function (event) {
  // 被拖拉节点的背景色恢复正常
  event.target.style.opacity = '';
}, false);

document.addEventListener('dragover', function (event) {
  // 防止拖拉效果被重置，允许被拖拉的节点放入目标节点
  event.preventDefault();
}, false);

document.addEventListener('dragenter', function (event) {
  // 目标节点的背景色变紫色
  // 由于该事件会冒泡，所以要过滤节点
  if (event.target.className === 'dropzone') {
    event.target.style.background = 'purple';
  }
}, false);

document.addEventListener('dragleave', function( event ) {
  // 目标节点的背景色恢复原样
  if (event.target.className === 'dropzone') {
    event.target.style.background = '';
  }
}, false);

document.addEventListener('drop', function( event ) {
  // 防止事件默认行为（比如某些元素节点上可以打开链接），
  event.preventDefault();
  if (event.target.className === 'dropzone') {
    // 恢复目标节点背景色
    event.target.style.background = '';
    // 将被拖拉节点插入目标节点
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild( dragged );
  }
}, false);
```

参考 ：https://juejin.cn/post/6998672428020793358

支持情况

![image-20220628164431417](/Users/qiutian/Library/Application Support/typora-user-images/image-20220628164431417.png)



### 8. Video

详见 ：[Video](./video.md)

### 9. audio

详见 ： [audio](./audio.md)

### 10. canvas与SVG

