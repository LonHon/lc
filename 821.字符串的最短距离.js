/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 * https://leetcode-cn.com/problems/shortest-distance-to-a-character/
 */
 var shortestToChar = function(s, c) {
  const n = s.length;
  const ans = new Array(n).fill(n + 1);

  // 从左往右遍历，找到i左边最近c的距离
  for (let i = 0, j = -1; i < n; i++) {
      if (s.charAt(i) == c) j = i;
      if (j != -1) ans[i] = i - j;
  }

  // 从右往左遍历，找到i右边最近c的距离并与上次的结果比较
  for (let i = n - 1, j = -1; i >= 0; i--) {
      if (s.charAt(i) == c) j = i;
      if (j != -1) ans[i] = Math.min(ans[i], j - i);
  }
  // console.log(ans);
  return ans;
};

shortestToChar('loveleetcode', 'e')