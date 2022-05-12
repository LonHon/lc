/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * https://leetcode.cn/problems/combination-sum-iii/
 */
var combinationSum3 = function(k, n) {
  const res = [];
  const backtrack = (preSum, path, start) => {
    const len = path.length;
    // 剪枝
    if (len > k || preSum > n) return;
    // basecase
    if (preSum === 0 && len === k) {
      res.push([...path]);
      return;
    }
    // 1-9
    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtrack(preSum - i, path, i + 1);
      path.pop();
    }
  }

  backtrack(n, [], 1);
  console.log(res)
  return res;
};

combinationSum3(5, 21);
