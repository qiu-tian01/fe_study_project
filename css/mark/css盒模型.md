​	一个盒子由外到内分为margin，border，padding,content组成。

- 标准盒模型中，width指content部分的宽度，height也指的是content部分的高度
- IE盒模型中，width指的是content+padding+border三部分的宽度

使用box-sizing来切换盒模型

```
box-sizing:content-box//标准盒模型
box-sizing:border-box//IE盒模型
```



标准（W3C）盒子模型：`width` = 内容宽度`（content） + border + padding + margin`

低版本IE盒子模型： `width` = 内容宽度`（content + border + padding）+ margin`

图片展示:

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/30/172633c783abc1eb~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/30/17263443113eb879~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

区别： 标准盒子模型盒子的`height`和`width`是`content`（内容）的宽高，而IE盒子模型盒子的宽高则包括`content+padding+border`部分。