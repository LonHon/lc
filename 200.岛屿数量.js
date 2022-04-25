/**
 * @param {character[][]} grid
 * @return {number}
 * https://leetcode-cn.com/problems/number-of-islands/
 */
var numIslands = function(grid) {
  const expand = (r, c) => {
    if (r > -1 && c > -1 && r < grid.length && c < grid[r].length) {
      if (grid[r][c] === '1') {
        // 标记
        grid[r][c] = '2';

        // DFS
        expand(r-1,c);
        expand(r+1,c);
        expand(r,c-1);
        expand(r,c+1);
      }
    }
  }
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        expand(i, j);
        res += 1;
      }
    }
  }
  console.log(res);
  return res;
};

numIslands([["1","0","1","1","0","1","1"]])