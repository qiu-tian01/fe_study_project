### 1. css引入方法与优先级

css引入方式有 内联引入，内嵌引入，外链引入。同权重情况下 ，内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）

##### 通过link和@import引入有什么区别？

1. link 是html中的标签，不仅可以加载样式，还可以定义ref等属性，并且没有兼容性问题，支持使用javascript改变样式。页面加载的同时，link会被同时加载
2. @import是css提供语法规则，只用于加载css，并且@import是css2.1才有的语法，兼容ie5+（话说ie已经落下帷幕了。。）不支持通过javascript改变样式。需要等到页面加载完成后再加载，可能出现无样式网页。

### 2. css层叠上下文
[css层叠上线文](./css层叠上线文.md)

### 3. css选择器
[css选择器](./css选择器.md)

### 4. css盒模型
[css盒模型](./css盒模型.md)

### 5. BFC
[BFC](./BFC.md)

### 6. position,float,overflow,display
[常用css属性](./常用css属性.md)






https://juejin.cn/post/6854573212337078285



https://juejin.cn/post/6844904185847087111