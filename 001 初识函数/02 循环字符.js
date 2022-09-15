/*
  author: yyf
  time: 2022年9月15日18:34:24
*/

/* 知识点 
  两层循环
  let防止同一个变量被另外初始化
*/

/* 题目
   声明一个函数可以根据的参数传入的数字大小（两个参数）循环输出不同的字符组合
   比如输入1,3. 按字母序，最大输出1-3 (外层循环最大到1，内层循环最大到3)

   上一个案例，多一个参数控制其可否倒倒序输出
*/

let f = (a, b, isReverse) => {
    if(isReverse === false)
      for(let i = 0; i <= a; i ++ )  // 最好用let
        for(let j = 0; j <= b; j ++ )
            console.log(i + '-' + j)
    else
      for(let p = a; p >= 0; p -- )
        for(let q = b; q >= 0; q -- )
          console.log(p + '-' + q)
}

// 测试
f(2, 3, false)
console.log('f over')
f(2, 3, true)

// 0-0
// 0-1
// 0-2
// 0-3
// 1-0
// 1-1
// 1-2
// 1-3
// 2-0
// 2-1
// 2-2
// 2-3

// 2-3
// 2-2
// 2-1
// 2-0
// 1-3
// 1-2
// 1-1
// 1-0
// 0-3
// 0-2
// 0-1
// 0-0
