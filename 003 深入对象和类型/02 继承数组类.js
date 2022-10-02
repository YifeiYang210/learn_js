/*
  author: yyf
  time: 2022年10月2日03:49:33
*/

/* 知识点 
   类的继承 extends和super关键字
*/

/* 题目
    建一个新的类型，继承自数组的构造函数，
    这个类型的实例有一个原型方法push，
    每个实例调用这个方法可以把传入的参数存入实例的cache属性中，
    cache指向的是一个普通的对象，每次存入的数据以数字为键，
    从零开始，依次递增
*/

class ArrayHandler extends Array{
    constructor(arr){
        super(arr)
        this.tempArr = arr
        this.cache = {...this.tempArr}
    }
    push(v){
        this.tempArr.push(v)
        this.cache[this.tempArr.length - 1] = v
    }
}

let arrayHandler = new ArrayHandler([1,2])
arrayHandler.push(3)
arrayHandler.push(4)
console.log(arrayHandler)

/* 输出：
ArrayHandler(1) [
  [ 1, 2, 3, 4 ],
  tempArr: [ 1, 2, 3, 4 ],
  cache: { '0': 1, '1': 2, '2': 3, '3': 4 }
]
*/
