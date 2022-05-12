/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * https://leetcode.cn/problems/combination-sum-ii/
 */
var combinationSum2 = function(candidates, target) {
  const res = [];

  candidates.sort((a, b) => a - b);

  const bt = (preSum, path, start) => {
    if (preSum === 0) {
      res.push([...path]);
      return;
    }

    // 再减已无意义，candidate始终大于零， 条件中只存在正整数
    if (preSum < 0) return;

    for (let i = start; i < candidates.length; i++) {

      /*
       if (candidates[i] === candidates[i-1]) ❌
       在 candidates[start-1] === candidates[start]
       会跳过本身，导致当前数不能参与计算，实则需要
       */
      // i > start 时 i-1 和 i 不能同时使用
      // i === start 时候， 可以和相同 i-1 使用
      if (i > start && candidates[i] === candidates[i-1]) {
        continue;
      }

      path.push(candidates[i]);
      // i+1 不可重复使用当前元素
      bt(preSum - candidates[i], path, i+1);
      path.pop();
    }
  }

  bt(target, [], 0);

  console.log(res);
  return res;
};

combinationSum2([10,1,2,7,6,1,5], 8);