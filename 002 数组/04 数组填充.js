/*
  author: yyf
  time: 2022年9月23日04:17:51
*/

/* 知识点 
  数组清空：arr.length = 0
  数组填充：arr.fill(v)
*/

/* 题目
    定义一个函数可以传入一个数组和一个类型字符串
    执行时，如果数组中有该类型
    那么就把数组中的全部元素变成该类型的字符串名称
    没有该类型 就把数组清空
    最后返回该数组
*/

let f = (arr, ts) => {
    let own = arr.some(v => typeof v === ts)
    if(own)
        arr.fill(ts)
    else
        arr.length = 0
    return arr
}

console.log(f([1,true,false],'boolean'))
// [ 'boolean', 'boolean', 'boolean' ]
console.log(f([1,true,false],'number'))
// [ 'number', 'number', 'number' ]
console.log(f([1,true,false],'string'))
// []
