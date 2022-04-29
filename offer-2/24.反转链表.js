/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 */
var reverseList = function(head) {
  // 迭代
  /*
  let prev = null, curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  // return curr;   curr最后null  不可取
  return prev;
  */

  // 递归
  function recur (node, prev) {
    // node.next === null;
    if (!node.next) {
      node.next = prev;
      return node;
    }
    const r = recur(node.next, node);
    node.next = prev;
    return r;
  }

  return recur(head, null);
};
