/**
 * bind实现要点
 * 1.返回一个函数
 * 2.可以传递多个参数,第一个参数指示上下文,剩下的作为函数调用时参数
 * 3.bind后函数可作为构造函数
 */

// 函数也是对象的一种,这里使用的时Function对象的功能
// 我们为什么要在Function的原型上定义_bind方法?
// 因为每个JavaScript函数实际上都是一个Function对象,Function是所有函数对象的基础。
// Function
// 运行(function () { }).constructor === Function 便可以得到这个结论。
// _bind方法 <-- Function(构造器) --> foo(目标函数)

Function.prototype._bind = function (context) {
  // @2 拿到剩余参数，为了传给调用者
  const args = Array.prototype.slice.call(arguments, 1),
    // 保存 this,这里的this指向Function构造器,构造器指向foo函数对象,所以this是foo
    that = this,
    // 绑定的函数,最终返回的新函数
    bound = function () {
      // 若作为构造函数,this的构造器应该为bound
      if (this instanceof bound) {
        // 预设参数和新传递参数合并,预设参数一定是 args 在前拼接
        return that.apply(this, args.concat(Array.prototype.slice.call(arguments)));
      }
      return that.apply(context, args.concat(Array.prototype.slice.call(arguments)));
    }
  // 箭头函数没有 prototype，箭头函数this永远指向它所在的作用域
  if (this.prototype) {
    bound.prototype = this.prototype;
  }
  return bound;
}

