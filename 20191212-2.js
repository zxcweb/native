
/**
 * reduce实现要点
 * 1.数组不能为空
 * 2.有没有初始值是实现的关键
 */
Array.prototype._reduce = function (callback, initialValue) {
    let arr = this
    if (arr.length === 0) {
        throw new Error('Each element of the array is empty')
    }
    // 有初始值用初始值，没有则取目标数组第一项当初始值
    let accumutor = initialValue !== undefined ? initialValue : arr[0]
    let len = arr.length
    // 有初始值循环从0开始，没有则从1开始
    let start = initialValue ? 0 : 1
    for (let i = start; i < len; i++) {
        accumutor = callback(accumutor, arr[i], i, arr)
    }
    return accumutor
}

/*
[1, 2, 3]._reduce((a, b) => {
    return a + b
})
*/
