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



- #### indexDB中的常用API

  首先需要了解这几个API ： 

  - **IDBFactory**: 这个提供数据库的访问，`window.indexedDB` 对象实现了这个接口，所以这也是APi的入口。里面有[`IDBFactory.open`](https://developer.mozilla.org/zh-CN/docs/Web/API/IDBFactory/open) 和 [`IDBFactory.deleteDatabase` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/deleteDatabase) 两个方法，分别对应打开和删除数据库。具体参考：[`IDBFactory`](https://developer.mozilla.org/zh-CN/docs/Web/API/IDBFactory)
  
  ```
  window.indexedDB // 这个就可理解为IDBFactory
  ```
  
  - **IDBOpenDBRqeuest** : 这个接口提供了访问打开或删除数据库的请求的结果。具体参考：[`IDBOpenDBRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/IDBOpenDBRequest)
  - **IDBRequest**：处理数据库请求并提供对结果访问的通用接口。具体参考[`IDBRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/IDBRequest)
  
  - **IDBDatabase**： 接口提供一个到 [数据库的连接](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API#database_connection); 你可以使用 `IDBDatabase` 对象在数据库中打开一个[transaction](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API#gloss_transaction) , 然后进行操作或者删除数据库中的对象。这是唯一一个能够访问和管理数据库版本的接口。具体参考：[`IDBDatabase`](https://developer.mozilla.org/zh-CN/docs/Web/API/IDBDatabase) 
  - **IDBTransaction** ：事务，数据记录的读写和删改，都要通过事务完成。事务对象提供error、abort和complete三个事件监听操作结果。具体参考：https://developer.mozilla.org/zh-CN/docs/Web/API/IDBTransaction
  - **IDBIndex** ：索引，为了加速数据的检索，可以在对象仓库里面，为不同的属性建立索引，具体参考：[`IDBIndex`](https://developer.mozilla.org/zh-CN/docs/Web/API/IDBIndex)
  
  还有一些其他的API，可以参考：[indexDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API)
  
  
  
  这里是操作数据库的api ： 
  
  - **IDBFactory.open **: 打开数据库连接。本方法立即返回一个 [`IDBOpenDBRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/IDBOpenDBRequest) 对象，但打开数据库的操作是异步执行的。传入两个参数，第一个参数为数据库名称，第二个参数为版本。如果有次名称的数据库就比较版本，没有就新建一个数据库。具体参考：[IDBFactory.open](https://developer.mozilla.org/zh-CN/docs/Web/API/IDBFactory/open)
  
  ```javascript
  const IDBRequest = window.indexedDB.open('todoList', 1)
  ```
  
  - **IDBFactory.deleteDataBase**：删除数据库
  
  ```
   let deleteRequest = window.indexedDB.deleteDatabase('todoList'	)
  ```
  
  
  
  - **IDBRequest.onupgradeneeded** 数据仓库升级事件
  
  ```
  IDBRequest.onupgradeneeded = (res) => {
      // 处理升级事件     
  }
  ```
  
  - 获取表
  
  ```
  // 事务 第二个参数read 为只读权限 , readwrite 为读写权限
  const transaction = IDBRequest.transaction('tableName','readwrite' ); 
  const table = transaction.objectStore('tableName'); // 仓库对象
  ```
  
  - 添加数据
  
  ```javascript
  /**
  	data = {
  		id : 1,
  		name : 'test',
  		age : 18
  	}
  */
  const addResult = table.add(dara)
  addresult.onsuccess = (e)=>{ 
   console.log('数据写入成功')
  }
  addresult.onerror = (e)=>{
     console.log('数据写入失败')
  }
  ```
  
  - 删除数据
  
  ```
  const deleteResult = table.delete(id);
  deleteResult.onsuccess = (e)=>{ 
   console.log('数据删除成功')
  }
  deleteResult.onerror = (e)=>{
     console.log('数据删除失败')
  }
  ```
  
  - 查找数据
  
  ```
  const getResult = table.get(id)
  getResult.onsuccess = (e)=>{ 
   console.log('数据获取成功')
  }
  getResult.onerror = (e)=>{
     console.log('数据获取失败')
  }
  
  ```
  
  - 修改数据
  
  ```
  const putResult = table.put(data)
  getResult.onsuccess = (e)=>{ 
   console.log('数据更新成功')
  }
  getResult.onerror = (e)=>{
     console.log('数据更新失败')
  }
  ```
  
  - 查询存储空间
  
  ```
  const listResult = table.openCursor();
  listResult.onsuccess = (e)=>{ 
   console.log('数据更新成功',e.target.result)
  }
  listResult.onerror = (e)=>{
     console.log('数据更新失败')
  }
  ```
  
  



### 参考 ：

https://juejin.cn/post/7088885239447027719

https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API

https://blog.csdn.net/qq_41579192/article/details/121605983

https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB

https://juejin.cn/post/6891550867938508813

https://juejin.cn/post/6989864443546959879

https://juejin.cn/post/6844903714822553614

https://blog.kisnows.com/2017/12/06/step-into-indexdb/

https://blog.csdn.net/qq_41579192/article/details/121605983

https://www.jianshu.com/p/77ee2cd9b634

https://blog.csdn.net/qq_37974755/article/details/123690708

  