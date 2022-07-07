### 1. javaScript数据类型

- ##### 数据类型分类

  - 基础数据类型

    - boolean

    - null

    - undefind

    - number

    - string

    - Symbol (es6)

    - bigInt (es10)

  - 引用数据类型
    - object

- ##### 数据类型判断

  - typeof

    typeof返回一个标识数据类型的字符串，typeof可以对基本类型number，string，boolean，undefind,symbol,bigint做出精确判断，对于null返回'object',对于function typeof 返回 'function',对于object和array会返回'object'

    ```
    typeof 'test' // string
    
    typeof 1 // number
    
    typeof true // boolean
    
    typeof undefind //undefind
    
    let s = Symbol();typeof s // symbol
    
    let bigint = bigint(10);typeof bigint //'bigint'
    
    a = ()=>{}
    console.log( typeof a)//function
    
    typeof null // 'object'
    ```
    
  
  - instanceof 判断引用类型
  
    ```
    [1,2,3] instanceof Array // true
    { name : 'xxx' } instanceof Object // true
    a = () => {}
    a instanceof Function // true
    ```
  
  - Array.isArray() 判断是否为数组
  
    ```
    Array.isArray([1,2,3]) // true
    ```
  
  - Object.protoyupe.toString.call(...)
  
    ```
    Object.prototype.toString.call(1) // [object Number]
    
    Object.prototype.toString.call('1')//[object String]
    
    Object.prototype.toString.call(true)//[object Boolean]
    
    Object.prototype.toString.call(null)//[object Null]
    
    Object.prototype.toString.call(undefind)//[object Undefind]
    
    Object.prototype.toString.call(Symbol()) //[object Symbol]
    
    Object.prototype.toString.call(()=>{})//[object Function]
    
    Object.prototype.toString.call({})//[object Object]
    
    Object.prototype.toString.call([1,2,3])//[object Array]
    ```
  
- 数据类型转换

  - 强制类型转换，分别为Number(),String(),Boolean()

    - Number()

    ```
    Number('1') // 1
    Number(true) //1
    Number(false) //0
    Number(undefind) //NaN
    Number(null) 0 
    Number([1,2,3]) //NaN
    Number({'test':'test'}) // NaN
    
    // symbol 类型会报错
    let s = Symbol()
    Number(s) // Cannot convert a Symbol value to a number
    ```

    另外字符串还可以通过parseInt()和parseFloat()来将string类型值转换为number类型

    ```
    //parseInt
    parseInt('1') // 1
    parseInt('1.11') // 1
    parseInt('1qqq') // 1
    parseInt('qqq') // NaN
    ```

    ```
    //parseFloat
    parseFloat('11.11') // 11.11
    parseFloat('11') // 11
    parseFloat('11.11qqq') // 11.11
    parseFloat('qqq') // NaN
    ```

    - https://juejin.cn/post/6961982923180523550

