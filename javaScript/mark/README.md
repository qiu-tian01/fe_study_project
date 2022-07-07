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
    ```

    
