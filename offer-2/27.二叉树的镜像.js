/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/solution/mian-shi-ti-27-er-cha-shu-de-jing-xiang-di-gui-fu-/
 */
var mirrorTree = function(root) {
  if (!root) return roor;
  function dfs (node) {
    if (!node) return;
    const l = node.left;
    node.left = node.right;
    node.right = l;
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return root;
};