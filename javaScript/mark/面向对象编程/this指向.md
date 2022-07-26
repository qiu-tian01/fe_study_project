this指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，指向的就是调用它的对象。

this指向分为以下几种情况：

1. 在构造函数中，使用new关键字，this将永远指向实例化的对象

   ```js
   class People {
       constructor (name,age){
           this.name = name
           this.age = age
       }
   }
   
   const obj = new  People('qt',18)
   console.log(obj.name) // qt
   ```

   

2. 当this在一个函数中时，函数直接被调用，此时this指向的是window，严格模式下是undefind

   ```
   function fn() {
       console.log(this)
   }
   fn() // window
   window.fn() //window
   ```

3. 箭头函数

   箭头函数没有自己的 this，当在内部使用了 this时，它会指向最近一层作用域内的 this。

   无论嵌套多少层箭头函数中的this与最外层非箭头函数this相同，最外层非箭头函数为fun()，其中的this指向window所以里面两个箭头函数也一样。

   call，apply，bind无法改变箭头函数的this

   ```
   var name='hkj'
   function fun(){
     var name="hkj1"
     return ()=>{
       var name='hkj2'
       console.log(this.name)          //hkj
       return ()=>{
         var name='hkj3'
         console.log(this.name)        //hkj
       }
     }
   }
    fun()()()
   ```

4. 当做属性调用时，函数中this指向对最后一个调用函数的对象。这里指向obj,所以name为hkj

   ```
   var name='window'
   function fun(){
     var name='fun'
     console.log(this.name)
   }
   let obj={
     fun:fun,
     name:'hkj'
   }
   obj.fun()       //hkj
   ```

   

5. 定时器内this指向，setTimeout中的this都指向window。

   ```
   var name='window'
   function hello(){
     setTimeout(function(){
       console.log(this.name)
     }, 100);
   }
   let obj={
     name:'obj',
     hello
   }
   obj.hello()     //widow
   
   var name='window'
   function hello(){
     console.log(this.name)
   }
   let obj={
     name:'obj',
     hello
   }
   setTimeout(obj.hello,1000)          //window
   
   ```

绑定优先级：

​	new>call及其他两个函数>属性调用>直接调用