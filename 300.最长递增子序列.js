/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 */

// DP
var lengthOfLIS_plain = function(nums) {
  const dp = new Array(nums.length).fill(1);
  let max = 1;
  /*
  * F(i) = Math.max(F(i-*)) + 1 且 i > i-*
  */  
  for (let i = 1; i < nums.length; i++) {
    for (let j = i-1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        // 提前退出内循环
        if (dp[i] > max) {
          max = dp[i]
          break;
        }
      }
    }
  }
  return max;
};

// DP + 二分
var lengthOfLIS = function(nums) {
  const tails = new Array(nums.length)
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let l = 0, r = res;
    while (l < r) {
      let m = Math.floor((l+r) / 2);
      if (tails[m] < nums[i]) l = m + 1
      else r = m
    }
    tails[l] = nums[i];
    if (res === r) res++;
  }
  console.log(tails, res)
  return res;
}

lengthOfLIS([10,9,2,5,3,7,101,18])
