#### BFC(block formatting context )块级格式化上下文

​	BFC是块级格式上下文，，它是一个独立的容器，而且不会影响BFC外部元素的布局，也不会受外面布局的影响。

​	创建方式:

- 根元素html标签
- 浮动元素float值不为none
- 绝对定位元素，position值为absolute或fixed
- 行内块元素，display：inline-block
- overflow值不为visible的块级元素
- display：flow-root的元素
- display：flex或inline-flex或grid或inline-gird
- 表格单元格：display：table-cell
- 表格标题：display：table-caption

特性：

- BFC内部的块级元素会在垂直方向上一个接着一个的放置
- 同BFC内部的相邻块级元素在垂直方向上的距离由margin决定，且会发生垂直外边距重叠现象
- BFC内部每个元素的坐外边界与包含块的左外边界相接触，即时浮动元素也是如此
- BFC的区域不会与其他float元素区域重叠
- 计算BFC的高度时，浮动子元素也参与计算

应用场景:

- 浮动定位与清除浮动
- 外边距折叠（重叠）
- 阻止因为浏览器四舍五入计算宽度造成的多栏布局换行的情况，可在最后一列触发BFC来阻止换行
- 两栏布局时，当左侧盒子浮动之后，右侧盒子可以触发BFC，达到自适应