/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
 */
var exist = function(board, word) {
  function dfs (i, j, k) {
    // 越界
    if (i < 0 || j < 0 || i >= board.length || j >= board[i].length) return false;
    // 不匹配
    if (board[i][j] !== word[k]) return false;
    // 已全字匹配
    if (k + 1 === word.length) return true;


    // 置空 
    board[i][j] = '';
    // 任意方向匹配到则true
    const res = (
      dfs(i-1, j, k+1) ||
      dfs(i+1, j, k+1) ||
      dfs(i, j-1, k+1) ||
      dfs(i, j+1, k+1)
    )
    // 一次调用栈结束后还原
    board[i][j] = word[k];
    return res;
  }

  for (let i = 0; i < board.length; i++) {
    
    for (let j = 0; j < board[i].length; j++) {
      if (dfs(i, j, 0)) return true;
    }

  }

  return false;
};

console.log(exist([["A","B"]], "BA"));