/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 * https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
 */
var isSubStructure = function(A, B) {
  if (!A || !B) return false;

  // 同时先序遍历进行对比
  function helper(node1, node2) {
    // A树到头但B未到末
    if (!node1 && node2) return false;
    // B树到末
    if (!node2) return true;
    if (node1.val !== node2.val) {
      return false;
    }
    // 同时对比左右子树
    return helper(node1.left, node2.left) && helper(node1.right, node2.right);
  }
  
  // O(a*b)
  function recur (node) {
    if (!node) return false;
    // 1. 递归A找到匹配ROOT并开始对比
    if (node.val === B.val && helper(node, B)) {
      return true;
    } else {
      // 未找到root 或 对比失败，递归node子节点
      return recur(node.left) ||
      recur(node.right)
    }
  }

  return recur(A);
};