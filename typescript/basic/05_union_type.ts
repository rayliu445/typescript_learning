import { myFavoriteNumber2 } from "./03_any_value";

console.log(myFavoriteNumber2);


//访问变量
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

console.log(myFavoriteNumber);

//访问联合类型的属性或方法
function getString(something: string | number): string {
  return something.toString();
}