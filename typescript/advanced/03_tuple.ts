//数组合并相同类型的对象，而元组合并了不同类型的对象
let tom: [string, number] = ['Tom', 25];
tom[0] = 'Tom';
tom[1] = 25;

tom[0].slice(1);
tom[1].toFixed(2);
