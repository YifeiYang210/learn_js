/*
  author: yyf
  time: 2022年9月15日18:11:50
*/

/* 知识点 
  this指向
    箭头函数没有this，但可以通过作用域查找this
    任何函数相关的作用域信息，在定义时就被记录在函数上
  立即执行函数
*/

/* 题目
   以下代码输出什么结果
*/

function A(x){
    this.name = x
    this.go = () => {
        console.log(this)
    }
    (()=>{console.log(this)})()
}

const a = new A('aa') // 箭头函数this与最近一层非箭头函数的this是绑定的，最近一层是构造函数的this，指向a对象 A{'name':'aa'}
a.go()  // 箭头函数this与最近一层非箭头函数的this是绑定的，最近一层this指向调用对象a，指向a对象 A{'name':'aa'}

const test = a.go 
test()  // 函数是引用类型的数据，a.go是一个函数，将其声明转赋值给test，再调用test()，也是调用同一个a.go()，同一个函数作用域信息是一样的，this指向也是一样的
// 因此也指向a对象 A{'name':'aa'}
A()  // 箭头函数this与最近一层非箭头函数的this是绑定的，此时用非构造函数的方式，相当于普通函数，this指向全局对象window{...}