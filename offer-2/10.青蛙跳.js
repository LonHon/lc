/**
 * @param {number} n
 * @return {number}
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 */
var numWays = function(n) {

  /*************** O(n) / O(n) */
  // dp[i]表示第i级的跳法
  // const dp = [1, 1, 2];
  // if (n < 3) return dp[n];

  // for (let i = 3; i <= n; i++) {
  //   // 需要跳1步 or 2步到达i
  //   const s = dp[i-1] + dp[i-2];
  //   dp[i] = s % 1000000007;
  // }

  // return dp[n];

  /*************** O(n) / O(1) */
  if (n === 0 || n ===1) return 1
  if (n === 2) return 2;

  let prev2 = 1, prev1 = 2, res = 1
  for (let i = 3; i <= n; i++) {
    res = prev2 + prev1;
    prev2 = prev1;
    prev1 = res;
  }
  return res;
};