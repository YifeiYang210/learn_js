/*
  author: yyf
  time: 2022年10月2日03:49:33
*/

/* 知识点 
   {} instanceOf Object // true
   检测Object的原型是否在{}的原型链上，
   显然Object的原型是{}，在{}的原型链上

   [] instanceOf Object  // true
   检测Object的原型是否在{}的原型链上，
   显然Object的原型是{}， 在[]的原型链上（箭头指向的对）
*/

/* 题目
    用构造函数的方式定义三个类同时让这三个类成依次的继承关系，
    即父类，子类，子子类
    （提示修改构造函数的prototype属性为其他类型的实例）
*/

function A(){}  // 父类
function B(){}  // 子类
function C(){}  // 子子类

B.prototype = new A()
C.prototype = new B()

let c = new C()
console.log(c instanceof C)  // true
console.log(c instanceof B)  // true
console.log(c instanceof A)  // true


