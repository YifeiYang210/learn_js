/*
  author: yyf
  time: 2022年10月2日01:02:04
*/

/* 知识点 
   类的创建，使用class关键字
   类中原型函数的创建，可以不用使用function
        原型函数定义在[[Prototype]]下
        如果想定义静态函数，需要加static关键字
   字符串分隔，split()原型方法
*/

/* 题目
    定义一个类，这个类在创建实例的时候可以传一个参数，
    是任意长度的字符串（最好是一段长文字有逗号），
    这个参数值会保存在实例上的text属性上，
    这个类的每个实例都能调用原型上的一个叫做splitStr的方法，
    只要调用这个方法，就能把这个text属性中的字符串
    按照逗号分隔成一个数组返回
*/

class StrHandler{
    constructor(text){
        this.text = text
    }
    splitStr(){
        return this.text.split(',')
    }
}

let strh = new StrHandler('1,2,3,4')
console.log(strh.splitStr())