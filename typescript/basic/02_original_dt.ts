//数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
//字符串
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

//空值
//函数void 
function alertName():void {
    alert('My name is Tom');
}
//变量void
let unusable: void =undefined;

//Null和Undefined
let u: undefined=undefined;
let n: null=null;

//布尔类型
let isDone:boolean =false;
//注意，使用构造函数 Boolean 创造的对象不是布尔值：new Boolean(1)是一个对象


