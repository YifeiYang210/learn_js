/*
  author: yyf
  time: 2022年9月23日01:45:47
*/

/* 知识点 
  数组排序的比较函数
  数组的映射方法map在元素个数不改变是很实用
  数组的链式方法
*/

/* 题目
    定义一个构造函数 一个参数
    使用该构造函数 配合new 会产生有一个属性age的实例对象
    利用上面数组中的数据，产出一个数组
    数组中都是该构造函数的实例，实例的age值依次分别是arr这个数组中的数据
    同时最终的数组中的对象顺序要按age属性的值从小到大排列
*/

let arr = [12,41,20,66,35,70]
let F = function(age){
    this.age = age
}

console.log(arr.map(v => new F(v))
               .sort((a, b) => a.age - b.age));

// [
// F { age: 12 },
// F { age: 20 },
// F { age: 35 },
// F { age: 41 },
// F { age: 66 },
// F { age: 70 }
// ]