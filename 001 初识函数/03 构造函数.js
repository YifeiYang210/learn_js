/*
  author: yyf
  time: 2022年9月15日18:58:00
*/

/* 题目
  见代码，判断这个obj的loop方法这样执行之后，控制台输出的什么
  然后用构造函数的方式改变 创建这个对象的代码  可以方便创造出不同name属性和age属性值的对象
  但他们都有一样的可以传入函数的loop方法
  每一个构造函数执行loop方法输出的变成是属性值，而不是属性名，要通过传入的函数实现
*/

/* 知识点
  this的指向：
  函数通过对象来调用，this会指向对象本身
  如果没有对象调用，this会指向全局对象window
  箭头函数中的this，与最近一层的非箭头函数中的this是绑定的

  构造函数不能用箭头函数实现

  假如我们不需要再其它地方再使用函数了，则可以使用匿名函数
  匿名函数在定义时，可以不用给出标识符
*/

var obj = {
    name: 'a',
    age: 18,
    loop(fn){
        for (let x in this){
            if(typeof obj[x] !== 'function'){
                fn(x)
            }
        }
    }
};
obj.loop((item)=>{
    console.log(item) 
})

/* 解答
  输出的是对象中键值对为非函数的键
  name
  age
*/

let F = function(n, a, fn){
    this.name = n;
    this.age = a;
    this.loop = fn;
}

let f = new F('abc', 30, function loop(gn){  // 这里也可以省略loop标识符，定义匿名函数
    for(let x in this){
        if(typeof this[x] !== 'function'){  // 应使用this[x]而非this.x
            gn(this[x])
        }
    }
});
console.log(f)
f.loop(item=>{console.log(item)})  // abc 30





