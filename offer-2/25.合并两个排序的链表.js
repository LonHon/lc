/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 */
var mergeTwoLists = function(l1, l2) {
  // 双指针 + 新链表
  if (l1 && l2) {
    let p1 = l1, p2 = l2, res = new ListNode();
    let rd = res;
  
    while (p1 && p2) {
      if (p1.val <= p2.val) {
        rd.next = p1;
        p1 = p1.next;
      } else if (p1.val > p2.val) {
        rd.next = p2;
        p2 = p2.next;
      }
      rd = rd.next;
    }
  
    if (p1) rd.next = p1;
    if (p2) rd.next = p2;
    return res.next;
  }
  return l1 || l2;
};