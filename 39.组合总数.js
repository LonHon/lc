/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * https://leetcode.cn/problems/combination-sum/
 */

// 回溯
var combinationSum = function(candidates, target) {
  const res = [];

  candidates.sort((a, b) => a - b);

  /**
   *
   *
   * @param {*} preSum 上次计算的sum
   * @param {*} path 组合
   * @param {*} start 不用前面的数参与计算
   * @return {*} 
   */
  const bt = (preSum, path, start) => {
    if (preSum === 0) {
      res.push([...path]);
      return;
    }

    // 再减已无意义，candidate始终大于零， 条件中只存在正整数
    if (preSum < 0) return;

    for (let i = start; i < candidates.length; i++) {
      // 配合前面的排序，此处才能剪枝
      if (preSum - candidates[i] < 0) break;
      path.push(candidates[i]);
      // i不加1 因为可以重复使用当前
      bt(preSum - candidates[i], path, i);
      path.pop();
    }
  }

  bt(target, [], 0);

  console.log(res);
  return res;
};

combinationSum([2,3,6,7], 7);