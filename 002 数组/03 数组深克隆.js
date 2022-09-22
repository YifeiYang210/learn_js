/*
  author: yyf
  time: 2022年9月23日02:14:55
*/

/* 知识点 
  slice()是浅拷贝，
  需要用return ...的形式创建深拷贝
*/

/* 题目
    定义一个函数可以传入一个数组和一个字符串
    这个函数执行时可以筛选出数组中分低于80分的对象
    然后给该对象设置一个属性 叫做label这个属性的值就是传入的第二个参数 字符串
    同时要创建一个新的数组 用深克隆的方式 按原数组相反的顺序 复制这些对象数据到新的数组中
    最后还要在这个新数组的最后加上一个所有对象的score总分的数据 数字类型的数据
    函数执行完之后把这个新数组返回
*/

let arr = [
  {name:'小明', score:60},
  {name:'小红', score:81},
  {name:'小亮', score:62},
  {name:'小章', score:73},
  {name:'小李', score:66},
  {name:'小胖', score:92},
]

let f = (arr, str) => {
  const low = arr.filter(v => v.score < 80).map(v => {
    v.label = str
    return v
  })
  const arr1 = low.reverse().map(obj => {
    return {
      ...obj
    }
  })
  
  arr1.push(arr1.reduce((acc, v) => acc + v.score, 0))
  return arr1
}

console.log(f(arr, 'good')) 

// [
//   { name: '小李', score: 66, label: 'good' },    
//   { name: '小章', score: 73, label: 'good' },    
//   { name: '小亮', score: 62, label: 'good' },    
//   { name: '小明', score: 60, label: 'good' },    
//   261
// ]