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
/**
 如序列是78912345，前三个遍历完以后tail是789，
 这时候遍历到1，就得把1放到合适的位置，
 于是在tail二分查找1的位置，变成了189（如果序列在此时结束，因为res不变，所以依旧输出3），
 再遍历到2成为129，然后是123直到12345
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2/
 * 
 */
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
