/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */
var maxDepth = function(root) {
  // 外部计数
  let res = 0;
  function dfs(node, depth) {
    if (!node) return;
    res = Math.max(depth, res);
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0)
  return res;

  // 内部计数
  /*
  function dfs(node) {
    if (!node) return 0;
    let l = dfs(node.left);
    let r = dfs(node.right);
    return Math.max(l, r) + 1;
  }

  return dfs(root)
  */
};