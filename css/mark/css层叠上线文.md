### 什么是层级上下文

层叠上下文(stacking context)，是HTML中一个三维的概念。或者说是网页在 Z 轴方向的一个概念。存在层级上下文时，层级高的元素会覆盖到另一个元素上面。

### 层叠上下文的形成

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)中有着相关形成条件，具体可以参考。这里简单列举

- `html` 根元素自身就会创建一个层叠上下文

- `position` 值为 `absolute` 或  `relative` 且  `z-index`  值不为 `auto` 的元素

- `position` 值为 `fixed` 或 `sticky` 的元素（注意：sticky 在老旧浏览器上不支持）

- flex` 容器的子元素，且 `z-index` 值不为 `auto
- grid` 容器的子元素，且 `z-index` 值不为 `auto

- opacity` 属性值不为 `1` 的元素

- `mix-blend-mode` 属性不为 `normal` 的元素

- `transform` 属性值不为 `none` 的元素

- `filter` 属性值不为 `none` 的元素

- `perspective` 属性值不为 `none` 的元素

- clip-path` 属性值不为 `none` 的元素

- `mask / mask-image / mask-border` 属性值不为 `none` 的元素

- `isolation` 属性值为 `isolate` 的元素

- `-webkit-overflow-scrolling` 属性值为 `touch` 的元素

- `will-change` 值设定了任一属性而该属性在非初始值（non-initial）时会创建层叠上下文

- `contain` 属性值为 `layout`、`paint` 或包含它们其中之一的合成值（比如 `contain: strict`、`contain: content`）的元素



这里总结就是

- 普通元素的层叠等级优化由所在的层叠上下文决定
- 层叠等级的比较只有在当前层叠上下文元素中才有意义。不同层叠上下文中比较层叠等级是没有意义的。



### 层叠顺序

- 统一层叠上下文，定位元素会按照z-index大小从上到下进行层叠。z-index一样时后面的元素等级大于前面的元素

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/8/30/1658910c5cb364b6~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)