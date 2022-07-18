/*
 * @author: qiutian
 * @Date: 2022-07-14 16:24:35
 * @Description: 作用域相关代码
 * @params: Do not edit
 */

// 全局作用域
// 1. 最外层定义的函数和变量可以在任意地方被访问
var test;

function scope() {

}
//2. 未经声明直接
// console.log(a)

// 3. window上挂载的属性
window.test3 = 'test3'


//局部作用域
function func() {
    var a = 0 // a的作用域就仅为函数内部，外部无法访问到
}

if (true) {
    var b = 10 // 这个还是全局作用域，外部可以访问到b
}

// for (var i = 0; i < 1; i++) {
//     var c = i
//     console.log(`内部打印`, i, c)
// }
// console.log(`外部打印`, i, c)

// 块级作用域
for (let i = 0; i < 1; i++) {
    let j = 0;
    console.log(i, j)
}
console.log(i, j) // i is not defined