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
 * @param {number} target
 * @return {number[][]}
 * https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
 */
 var pathSum = function(root, target) {
  if (!root) return []
  const res = [];

  /**
   *
   *
   * @param {*} node
   * @param {*} prev
   * @param {*} path
   * @return {*} 
   */
  const dfs = (node, prev, path) => {
      if (!node) {
          return;
      }

      // baseCase 叶子节点
      if (!node.left && !node.right && prev - node.val === 0) {
          const rr = (path + ',' + node.val).split(',')
          rr.shift()
          res.push(rr.map(n => Number(n)))
          return;
      }
      dfs(node.left, prev - node.val, path + ',' + node.val);
      dfs(node.right, prev - node.val, path + ',' + node.val);
  }

  dfs(root, target, '');
  return res
};