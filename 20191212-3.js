/**
 * instanceof实现要点
 * L的__proto__是不是等于R.prototype，不等于再找L.__proto__.__proto__直到__proto__为null
 */

// L 表示左表达式，R 表示右表达式
function _instanceof(L, R) {
    let _R = R.prototype
    let _L = L.__proto__
    while (true) {
        if (_L === null) return false
        // 这里重点：当 O 严格等于 L 时，返回 true
        if (_L === _R) return true;
        _L = _L.__proto__
    }
}

/*
console.log(_instanceof([], Array))
console.log([] instanceof Array)
*/