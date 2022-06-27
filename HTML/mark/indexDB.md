### IndexDB

- #### 概念

indexedDB是用在浏览器内持久化存储数据的方法。IndexDB是一种非关系型数据库。可以存储文件/二进制大型对象(blobs)。存储空间一般不小于250M没有上限。



- #### 特点

  - 存储在浏览器，持久化存储，需要手动清除
  - 存储大小不小于250M，一般没有上限
  - 异步操作数据，这样可以避免阻塞浏览器
  - 作用域为同源的不同浏览器窗口下共享数据
  - 采用对象仓库存放数据。所有类型数据都可以直接存入。数据用键值对形式存储，每个数据都需要有一个独立的主键，否则会报错
  - 受同源限制，每个数据库会创建对应它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。
  - 支持二进制存储。



- #### API

  - 打开indexDB

  

https://juejin.cn/post/7088885239447027719



https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API



https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB



https://juejin.cn/post/6891550867938508813



https://juejin.cn/post/6989864443546959879



https://juejin.cn/post/6844903714822553614



https://blog.kisnows.com/2017/12/06/step-into-indexdb/



https://blog.csdn.net/qq_41579192/article/details/121605983



https://www.jianshu.com/p/77ee2cd9b634



https://blog.csdn.net/qq_37974755/article/details/123690708

  