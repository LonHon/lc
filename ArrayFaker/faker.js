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
console.log([1,2,3,4].__filter((x) => x > 2))
// arr.__concat()
// arr.__every(callback)
// arr.__some()
// arr.__reduce(callback, initialValue)
// arr.__reduce()
// arr.__reduceRight(callback, initialValue)
// arr.__lastIndexOf()
// arr.__copyWithin()
// arr.__find(callback)
// arr.__findIndex(callback)
// arr.__fill(target, start, end)
// arr.__at(index)