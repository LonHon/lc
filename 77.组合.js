/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * https://leetcode.cn/problems/combinations/
*/
var combine = function(n, k) {
  const res = [];
  if (k < 1 || n < k) return res;

  function dfs (begin, path) {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = begin; i <= n; i++) {
      path.push(i);
      dfs(i + 1, path);
      path.pop();
    }
  }

  dfs(1, []);
  console.log(res);
  return res;

};


combine(4, 3)
combine(1, 1)