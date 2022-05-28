/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
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
 */
var detectCycle1 = function (head) {
  let cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return head;
    } else {
      cache.add(head);
    }
    head = head.next;
  }
  return null;
};

var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  let start = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) {
      while (slow && start) {
        if (slow == start) {
          return slow;
        }
        slow = slow.next;
        start = start.next;
      }
    }
  }
  return null;
};
// @lc code=end
