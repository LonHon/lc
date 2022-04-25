/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 */
var reversePrint = function(head) {
  const res = [];
  // if (!head) return res;
  // while (head.next !== null) {
  //   res.unshift(head.val);
  //   head = head.next;
  // }

  /** 此处递归体现调用栈的先进后出 */
  function recur (node) {
    if (node === null) return;
    recur(node.next);
    // 先进后出
    res.push(node.val)
  }
  recur(head);
  return res;
};