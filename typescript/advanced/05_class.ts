/**
 * 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
对象（Object）：类的实例，通过 new 生成
面向对象（OOP）的三大特性：封装、继承、多态
 */

//存取器
class Animal {
    constructor(name:any) {
      this.name = name;
    }
    get name() {
      return 'Jack';
    }
    set name(value) {
      console.log('setter: ' + value);
    }

    sayHi() {
        return `My name is ${this.name}`;
    }
  }
  
  let a = new Animal('Kitty'); // setter: Kitty
  a.name = 'Tom'; // setter: Tom
  console.log(a.name); // Jack

  //继承
class Cat extends Animal {
    constructor(name:string) {
      super(name); // 调用父类的 constructor(name)
      console.log(this.name);
    }
    sayHi() {
      return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
  }
  
  let c = new Cat('Tom'); // Tom
  console.log(c.sayHi()); // Meow, My name is Tom
  //静态方法
 // 静态方法
class Animal1 {
    static isAnimal(a: any) {
        return a instanceof Animal;
    }
}

let animal1Instance = new Animal1();
console.log(Animal1.isAnimal(animal1Instance)); // true
//console.log(animal1Instance.isAnimal(animal1Instance)); //// TypeError: a.isAnimal is not a function

export {}