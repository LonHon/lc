/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * https://leetcode-cn.com/problems/coin-change/
 */
var coinChange = function(coins, amount) {
  const dp = new Array(amount+1).fill(amount + 1);
  dp[0] = 0;
  // coins = [1,2,5]
  // dp[i] = Math.min(dp[i-1], dp[i-2], dp[i-5]) + 1;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      if (coin <= i) dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
    }
  }
  // console.log(dp);
  return dp[amount] > amount ? -1 : dp[amount];
};

coinChange([1, 2, 5], 5); // 3