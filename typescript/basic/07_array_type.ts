//类型+方括号表示法
let fibonacci1: number[] = [1, 1, 2, 3, 5];
//数组泛型
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];
//接口表示，不推荐
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
//类数组

//any在数组中的应用
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
