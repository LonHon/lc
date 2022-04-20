/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
 */
// 双指针
var findLengthOfLCIS1 = function(nums) {
  let max = 1, i = 0, j = 1;
  while (j < nums.length) {
    if (nums[j] > nums[j-1]) {
      max = Math.max(max, j-i+1);
      j++;
    } else {
      i = j;
      j++;
    }
  }
  return max;
};

// 动态规划
var findLengthOfLCIS2 = function(nums) {
  let max = 1;
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i-1]) {
      dp[i] = dp[i-1] + 1; 
      max = Math.max(dp[i], max);
    }
  }
  return max;
};


console.log(
  findLengthOfLCIS1([1,3,5,1,2,4,7]), // 4
  findLengthOfLCIS2([1,3,5,1,2,4,7]) // 4
)