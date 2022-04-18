/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */
 var removeNthFromEnd = function(head, n) {
  if (!head) return head;
  let dummy = new ListNode();
  dummy.next = head;
  let l = dummy, r = dummy, distance = 0;
  while (r.next !== null) {
      if (distance < n) {
          distance++;
          r = r.next;
      } else {
          r = r.next;
          l = l.next;
      }
  }
  l.next = l.next.next;
  return dummy.next;
};
