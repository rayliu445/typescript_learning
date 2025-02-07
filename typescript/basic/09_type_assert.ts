//语法，值 as 类型
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

//注:类型断言只能够通过编译，但是运行该报错还是报错
//注:instanceof只能用来判断类
interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

// function isApiError(error: Error) {
//     if (error instanceof ApiError) {
//         return true;
//     }
//     return false;
// }
// index.ts:9:26 - error TS2693: 'ApiError' only refers to a type, but is being used as a value here.
interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}

//任意一个类型可以被断言为any
//window.foo = 1; js中对对象添加属性
(window as any).foo = 1;
//我不知道这样有什么好处，脱了裤子放屁


//那么我们在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作：

function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom1 = getCacheData('tom') as Cat;
tom1.run();

//联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型
export { }