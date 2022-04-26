/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 * https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
 */
var movingCount = function(m, n, k) {
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0;
    }
  }

  // 0未访问 1不可用 2已访问

  let res = 0;

  // 求数位和 16 => 1+6 => 7
  function getSum(x) {
    let s = 0;
    while(x != 0) {
        s += x % 10;
        x = Math.floor(x / 10);
    }
    return s;
  }
  function dfs (i, j) {
    // 越界
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (dp[i][j] !== 0) return;
    const sum = getSum(i) + getSum(j);
    if (sum > k) {
      dp[i][j] = 1;
      return;
    } else {
      res++;
      dp[i][j] = 2;
      dfs(i-1, j);
      dfs(i+1, j);
      dfs(i, j-1);
      dfs(i, j+1);
    }
  }
  dfs(0,0);
  console.log(res);
  return res;
};

movingCount(16,8,4)
