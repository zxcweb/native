/**
 * new实现要点
 * 1.创建一个新对象
 * 2.将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）
 * 3.执行构造函数中的代码（为这个新对象添加属性）
 * 4.返回新函数
 */

function _new(obj, ...args) {
    // 创建一个空对象，指定期原型为构造函数原型
    const _obj = Object.create(obj.prototype)
    // 指定函数作用域并执行函数
    obj.apply(_obj, args)
    // 返回对象
    return _obj
}
/*
function Test() {
   this.a = 10
}
Test.prototype.add = function () {
   console.log(this.a)
}
console.log(new Test())
console.log(_new(Test))
*/