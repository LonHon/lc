/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/maximum-subarray/ 
 */
var maxSubArray_old = function(nums) {
  if (nums.length === 1) return nums[0];
  const dp = new Array(nums.length).fill(-Infinity);
  // dp[i]: 第i位上的最大和
  dp[0] = nums[0]
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    // 遇到0则自立门户
    if (dp[i-1] < 0) dp[i] = nums[i];
    else dp[i] = nums[i] + dp[i-1];
    max = Math.max(max, dp[i]);
  }
  return max;
};


// dp[i] 仅和 dp[i-1]进行计算，故通过prev来保留dp[i-1]，节省dp数组空间
var maxSubArray = function(nums) {
  let prev = nums[0], max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let s = nums[i];
    if (prev > -1) s += prev;
    max = Math.max(max, s);
    prev = s;
  }
  return max;
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) // 6