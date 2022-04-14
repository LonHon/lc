/**
 * @param {number} n
 * @return {number}
 */
//  https://leetcode-cn.com/problems/perfect-squares/
var numSquares = function(n) {

  // dp[i] 为 i 的完全平方数和的最小个数
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      // dp[i] = dp[i - square] + 1;
      const sub = i - j * j;
      // dp[sub] + 平方数 = dp[i]
      dp[i] = Math.min(dp[i], dp[sub] + 1);
    }
  }
  return dp[n];
};

numSquares(9); // 1