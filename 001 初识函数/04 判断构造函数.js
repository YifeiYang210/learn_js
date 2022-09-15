/*
  author: yyf
  time: 2022年9月16日01:08:38
*/

/* 知识点 
  构造函数
  构造函数使用new时，如果return了一个非空对象，会返回该对象
  否则返回this指向的对象
*/

/* 题目
    定义一个构造图数，有两个参数，可以任意设置成属性或方法，
    当通过new调用时，它会返回对象，但是如果不是通过new调用，
    它会把传入的两个参数拼接成一个字符串然后返回
*/

let F = function(a, b){
    this.a = a
    this.b = b
    return this.a + '' +  this.b
}

// 测试
console.log(new F(1, 2))  // F { a: 1, b: 2 }
console.log(F(1, 2))      // 12

// 推荐写法：new.target会返回构造函数自身
let G = function(a, b){
  if(typeof new.target === 'function'){
    this.a = a
    this.b = b
  }
  else
    return this.a + '' +  this.b
}

// 测试
console.log(new G(1, 2))  // G { a: 1, b: 2 }
console.log(G(1, 2))      // 12
