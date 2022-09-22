/*
  author: yyf
  time: 2022年9月23日01:57:13
*/

/* 知识点 
  数组的查找
    find(callback)返回数组中满足使回调为真的第一个元素
    includes(v)返回数组是否包含v值
*/

/* 题目
    定义一个函数，函数有两个参数
    第一个和第二个参数传入有数据的数组
    会比较这传入的两个数组中是否有相同（严格相等）的数据
    有 函数返回true 没有返回false
*/

let f = (arr1, arr2) => {
  return arr1.some(v => arr2.includes(v) === true)
}

console.log(f([1,2,3],[4,5,6]))  // false
console.log(f([1,2,3],[4,5,1]))  // true