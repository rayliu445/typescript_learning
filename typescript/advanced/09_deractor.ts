class Animal {
    type: string;
    constructor(type: string) {
        this.type = type;
    }

    @yelling
    greet() {
        console.log(`Hello, I'm a(n) ${this.type}!`);
    }
}

// 定义 typeToYellingMap 的类型
interface TypeToYellingMap {
    [key: string]: string;
}

const typeToYellingMap: TypeToYellingMap = {
    cat: 'meow~ meow~'
};

function yelling(originalMethod: any, context: ClassMethodDecoratorContext) {
    return function(this: Animal, ...args: any[]) {
        // 检查是否存在对应的叫声
        if (typeToYellingMap[this.type]) {
            console.log(typeToYellingMap[this.type]);
        } else {
            console.log('Unknown animal sound');
        }
        originalMethod.call(this, ...args);
    };
}

const xcat = new Animal('cat');
xcat.greet(); // meow~ meow~
              // Hello, I'm a(n) cat!