//如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：

interface Alarm {
    price: number;
}
interface Alarm {
    // price: string;  // 类型不一致，会报错
    weight: number;
}

// index.ts(5,3): error TS2403: Subsequent variable declarations must have the same type.  Variable 'price' must be of type 'number', but here has type 'string'.
