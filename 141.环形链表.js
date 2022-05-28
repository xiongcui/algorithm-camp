/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle1 = function (head) {
  let count = 0;
  while (head) {
    if (count > 10000) {
      return true;
    }
    head = head.next;
    count++;
  }
  return false;
};

var hasCycle2 = function (head) {
  let map = new Set();
  while (head) {
    if (map.has(head)) {
      return true;
    } else {
      map.add(head);
    }
    head = head.next;
  }
  return false;
};

var hasCycle = function (head) {
  // 操场跑圈，只要是个圈，跑的快的，一定会把跑的慢的套圈
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
};
// @lc code=end
