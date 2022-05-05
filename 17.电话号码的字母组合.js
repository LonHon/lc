/**
 * @param {string} digits
 * @return {string[]}
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */
var letterCombinations = function(digits) {
  // 建表
  const keyMap = {
    1: [''],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }

  // 简化dp，不需要dp[i-1]之前的数据， 仅依赖dp[i-1]
  let prev = [''], res = [];

  for (var di = 0; di < digits.length; di++) {
    const digitKeys = keyMap[digits[di]];
    res = [];
    for (let ps of prev) {
      for (let key of digitKeys) {
        // 生成新的结果
        res.push(ps + key)
      }
    }
    prev = res;
  }
  return res;
};