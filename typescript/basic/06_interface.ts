//和Java中非常相似，接口interface是对于行为的抽象，具体实现交给类去实现
interface Person {
    name: string;
    age: number;
}

let tom: Person={
    name:'Tom',
    age:25
}

console.log(tom);

//注:普通接口对应的类的属性必须和接口保持一致。

//可选属性
interface Person2 {
    name: string;
    age?: number;
}

let tom2: Person2={
    name:'Tom'
}
//可选属性可以存在可以不存在

//任意属性
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom3: Person3={
    name:'Tom',
    age:25,
    gender:'male'
}

// interface Person4 {
//     name: string;
//     age?: number;
//     [propName: string]: string;
// }

// let tom4: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.
//注:一个接口中一旦有任意属性，那么确定(普通)属性和可选属性的类型则必须是任意属性的类型的子集
// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom: Person = {
//     id: 89757,
//     name: 'Tom',
//     gender: 'male'
// };

// tom.id = 9527;
//同一个对象readonly首次赋值之后就不能再修改了

export{tom}