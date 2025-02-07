// 03_any_value.ts
// 普通类型不允许修改类型
let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

// any类型允许修改类型
let myFavoriteNumber2: any = 'seven';
myFavoriteNumber2 = 7;

// 任意运行访问任何属性
let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);

// 变量如果没有在声明的时候指定类型，那么其就是任意类型
let something;
something = 'seven';
something = 7;

// 导出变量以便在其他文件中使用
export { myFavoriteNumber, myFavoriteNumber2, anyThing, something };