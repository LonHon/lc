/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
 */
var isSymmetric = function(root) {
  if (!root) return true;
  function dfs (a, b) {
    if (a === b) return true;
    if (!a || !b) return false;
    if (a.val !== b.val) return false;
    // 左子树和右子树对比
    return dfs(a.left, b.right) && dfs(a.right, b.left);
  }

  return dfs(root.left, root.right);
};