/**
 * 复刻Array中ES6+新增方法
 */

// arr.__map(callback)

/**
 *
 * @param {*} fn(currentValue[, index[, array]])
 */
Array.prototype.__map = function (fn) {
  const r = [];
  for (let i = 0; i < this.length; i++) {
    r.push(fn(this[i], i, this))
  }
  return r;
}
// console.log([1,2,3,4].__map((x, i) => x + '-' + i))

// arr.__filter(callback)
Array.prototype.__filter = function (fn, _this) {
  const r = [];
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this) && r.push(this[i]);
  }
  return r;
}
// console.log([1,2,3,4].__filter((x) => x > 2))

// arr.__every(callback)
Array.prototype.__every = function (fn, _this) {
  for (let i = 0; i < this.length; i++) {
    if(!fn(this[i], i, this)) return false;
  }
  return true;
}
// console.log([1,2,3,4].__every((x) => x > 1))
// console.log([1,2,3,4].__every((x) => x > -1))

// arr.__some()
Array.prototype.__some = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if(fn(this[i], i, this)) return true;
  }
  return false;
}
// console.log([1,2,3,4].__some((x) => x > 4))
// console.log([1,2,3,4].__some((x) => x === -1))
// arr.__reduce(callback, initialValue)
Array.prototype.__reduce = function (fn, initialValue) {
  let res = initialValue
  for (let i = 0; i < this.length; i++) {
    // TODO: 判断 this[i] 类型后给initialValue赋值
    res = fn(res, this[i])
  }
  return res;
}
// console.log([1,2,3,4].__reduce((prev, now) => prev+now)) // 11
// console.log(['a', 1].reduce((prev, now) => {
//   console.log(prev)
//   return prev+now
// })) // 11
// arr.__concat()
// arr.__reduceRight(callback, initialValue)
// arr.__lastIndexOf()
// arr.__copyWithin()
// arr.__find(callback)
// arr.__findIndex(callback)
// arr.__fill(target, start, end)
// arr.__at(index)