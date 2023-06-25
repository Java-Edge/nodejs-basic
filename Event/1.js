var Events = require('events');

// 定义了一个Dog类，继承了Node.js中的Events模块
class Dog extends Events {
    constructor(name) {
        super();
        this.name = name;
        this.age = 0;
        this.growup();
    };

	/**
	 * 使用setInterval函数，每隔1s对age属性+1，并触发事件(change)，通过emit方法实现。
	 */
    growup() {
        setInterval(() => {
            this.age++;
            this.emit('change');
        }, 1000)
    }
}
// 创建一个名为dog1的Dog实例
const dog1 = new Dog('汪汪');
// 绑定change事件，并定义回调函数
dog1.addListener('change', function () {
	// 当age属性改变时，会自动触发change事件并打印“我长大了一岁，汪汪”
    console.log("我长大了一岁，汪汪")
})
