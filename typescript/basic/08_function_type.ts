//函数声明
function sum(x: number, y: number): number {
    return x + y;
}

//注意：不能想js那样输入多余的参数
//sum(1,2,3);

//函数表达式
let mySum = function (x: number, y: number): number {
    return x + y;
};

//用接口进行定义
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

//可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
//可选参数必须跟在必需参数的后面

//参数默认值
function buildName1(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat1 = buildName1('Tom', 'Cat');
let tom1 = buildName1('Tom');

//此时就不受「可选参数必须接在必需参数后面」的限制了，按照其默认顺序来就可以
function buildName2(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('Tom', 'Cat');
let cat2 = buildName2(undefined, 'Cat');

//剩余参数
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a:any = [];
push(a, 1, 2, 3);

//重载，和Java的差不多
// function reverse(x: number | string): number | string | void {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

export {
    sum,
    mySum,
    mySearch,
    buildName,
    buildName1,
    buildName2,
    push,
    reverse
}