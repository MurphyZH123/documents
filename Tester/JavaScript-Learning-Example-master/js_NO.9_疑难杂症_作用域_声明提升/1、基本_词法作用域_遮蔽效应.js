// 是时候颠覆三观了！
// LHS 和 RHS 太复杂,不讲； 压栈 出栈  太复杂，不讲；

// -----------------独立测试区 1：----------------------
// function cc(c) 
// {
//     console.log(c+b);
// }
// console.log(b);     
// //不行 前面没有声明,但注意是undefined,不是报错
// var b = 66;     //可以  所谓的变量提升  提升到最上
// // let b = 66;     //let 不吃这套
// // const b = 66;     //const 不吃这套
// cc(66);
// // var b = 66;     //在这里是不行的


// -----------------独立测试区 2：----------------------
// // 比上面的多一个嵌套函数
// function cc(a)
// {
//     function cc(c) 
//     {
//         console.log(c+b+a);
//     }
//     cc(a);
// }
// var b = 6;     //可以  所谓的变量提升  提升到最上
// // let b = 6;     //可以
// // const b = 6;     //可以
// cc(6);


// -----------------独立测试区 3：词法作用域----------------------
// function foo(a)     //第一层  foo
// {                          
//     let b = a*2;         //第二层 a b bar
//     function bar(c)     
//     {
//         console.log(a, b, c);   //第三层  c
//     }
//     bar(b*3);
// }
// foo(2);


// -----------------独立测试区 4：遮蔽效应----------------------
// // 作用域查找从运行时所处的最内部作用域开始，逐级向上进行，直到第一个匹配的标识符为止
// // 在多层的嵌套作用域可以定义同名标识符，这叫 遮蔽效应(坑爹！)
// var a = 0;
// // var a = 10;
// // let a = 1;
// function tt() {
//     var a = 1;
//     // let a = 1;
//     console.log(a);
// }
// tt();
// // 在ES6加入let const之后，不允许再次声明

