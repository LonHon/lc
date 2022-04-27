/**
 * @param {number} n
 * @return {number}
 * https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
 */
var cuttingRope = function(n) {
  const dp = [0, 0, 1, 2];

  if (n < 4) return dp[n];

  // dp[i] = Math.max(j*(i-j), j*dp[i-j])

  /*****
   * j要么 * (i-j) 
   * 要么 * dp[i-j]
   * 意味着得看(i-j)分段之后乘积是否更大
   */

  for (let i = 4; i <= n; i++) {
    // for (let j = 1; j <= i; j++)
    // 超过 i/2 其实已计算过，故优化
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(dp[i] || i, j*(i-j), j*dp[i-j]);
    }
  }

  // console.log(dp.map((v, i) => `${i}:${v}`));
  console.log(dp[n] % 1000000007);
  return dp[n];
};

cuttingRope(1000);