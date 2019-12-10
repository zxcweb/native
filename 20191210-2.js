/**
 * apply实现要点
 * 1.返回一个函数并执行
 * 2.可以传递多个参数,第一个参数指示上下文,第二个参数为参数数组,否则为undefined
 */
Function.prototype._apply = function (thisArg) {
    // 声明一个Symbol属性，保证fn唯一，防止fn被占用
    const fn = Symbol('fn')
    // 获取第二个参数
    let args = [...arguments].slice(1, 2)[0]
    if (!args || !(args instanceof Array) || args.length === 0) {
        args = [undefined]
    }
    // 当前this不存在则指向window
    thisArg = thisArg || window;
    // 将调用call函数的对象添加到thisArg的属性中,这里的this其实就是要调用的原来函数
    thisArg[fn] = this;
    // 执行该属性
    const result = thisArg[fn](...args);
    // 删除该属性
    delete thisArg[fn];
    // 返回函数执行结果
    return result;
}

// 举个例子
const obj1 = {
    a: 1,
    fn1(p) {
        console.log(this.a,p)
    }
}
const obj2 = {
    a: 2,
    fn2() {
        obj1.fn1('test')
        obj1.fn1._apply(this, null)
    }
}
obj2.fn2()
