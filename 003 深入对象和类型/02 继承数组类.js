/*
  author: yyf
  Create time: 2022年10月2日03:49:33
  Update time: 2022年10月3日21:57:08
*/

/* 知识点 
   类的继承 extends和super关键字
   super()过后，会把this关键字赋值给子类构造函数[[Prototype]]指向的对象，也就是父类对象
   一个例子，子类继承数组，super([1,2,3])， this会被赋值一个二维数组
     1. arr = new Array([1,2,3])  // arr是二维数组[[1, 2, 3]]
     2. super([1,2,3]) tips：因为父类是数组，因此会创建一个二维数组，赋值给this
*/

/* 题目
    建一个新的类型，继承自数组的构造函数，
    这个类型的实例有一个原型方法push，
    每个实例调用这个方法可以把传入的参数存入实例的cache属性中，
    cache指向的是一个普通的对象，每次存入的数据以数字为键，
    从零开始，依次递增
*/

// 参考写法
class ArrayHandler1 extends Array{
    constructor(pre1, pre2){  // 如果要传不定长的数据，不能这样写
        super(pre1, pre2)
        this.cache = {...this}
    }
    push(v){
        super.push(v)
        this.cache[this.length - 1] = v
    }
}

let arrayHandler1 = new ArrayHandler1(1, 2)
arrayHandler1.push(3)
arrayHandler1.push(4)
console.log(arrayHandler1)

/* 输出：
ArrayHandler1(1) [
  1, 2, 3, 4
  cache: { '0': 1, '1': 2, '2': 3, '3': 4 }
]
*/

// 误区写法（写着玩的，练super关键字）
class ArrayHandler2 extends Array{
    constructor(arr){
        super(arr)  // this被赋值为二维数组，第一个元素是arr
        this.tempArr = arr  // 这个原生数组arr只能用别名调用
        this.cache = {...this.tempArr}  // 二维数组具有arr，tempArr，cache三属性
    }
    push(v){
        this.tempArr.push(v)  // 对二维数组的第一个元素arr和第二个元素tempArr（其实两数组）push
        this.cache[this.tempArr.length - 1] = v
    }
}

let arrayHandler = new ArrayHandler2([1,2])
arrayHandler.push(3)
arrayHandler.push(4)
console.log(arrayHandler)

/* 输出：
ArrayHandler2(1) [
  [ 1, 2, 3, 4 ],
  tempArr: [ 1, 2, 3, 4 ],
  cache: { '0': 1, '1': 2, '2': 3, '3': 4 }
]
*/
