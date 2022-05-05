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
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/
 */
 var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  let max = 0;
  const dfs = (node) => {
      // 叶子节点 -1
      if (!node) return -1;
      const leftHeight = dfs(node.left) + 1;
      const rightHeight = dfs(node.right) + 1;
      // width即当前节点直径
      const width = leftHeight + rightHeight;
      max = Math.max(width, max);
      // 当前节点下最大高度
      return Math.max(leftHeight, rightHeight);
  }

  dfs(root);
  return max;
};