/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * https://leetcode-cn.com/problems/edit-distance/
 */
var minDistance = function(s1, s2) {

  // dp[i][j] 存储 s1[0 ~ i-1] 变为 s2[0 ~ j-1] 的最小编辑距离
  const memo = new Array(s1.length + 1).fill(1);
  memo.forEach((el, i) => memo[i] = new Array(s2.length + 1))

  for (let out = 0; out < memo.length; out++) {
    memo[out][0] = out
  }
  for (let inn = 0; inn < memo[0].length; inn++) {
    memo[0][inn] = inn
  }

  // 从下往上遍历
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i-1] === s2[j-1]) {
        memo[i][j] = memo[i-1][j-1];
      } else {
        memo[i][j] = 1 + Math.min(
          memo[i-1][j-1],
          memo[i-1][j],
          memo[i][j-1]
        )
      }
    }
  }
  return memo[s1.length][s2.length];
};

minDistance("horse", "ros");
// minDistance("dinitrophenylhydrazine", "benzalphenylhydrazone");