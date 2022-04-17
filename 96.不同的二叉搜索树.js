/**
 * @param {number} n
 * @return {number}
 */
//  https://leetcode-cn.com/problems/unique-binary-search-trees/
var numTrees = function(num) {
  if (num === 0 || num === 1) return 1;
  const map = new Map();
  const helper = (n) => {
    if (n === 0 || n === 1) return 1;
    if (map.get(n)) return map.get(n);
    let count = 0;
    for (let i = 1; i <= n; i++) {
      const left = helper(i-1);
      const right = helper(n-i);
      count += (left * right);
    }
    map.set(n, count);
    return count;
  }

  return helper(num);
};

console.log(numTrees(1));
console.log(numTrees(2));
console.log(numTrees(3));
console.log(numTrees(4));