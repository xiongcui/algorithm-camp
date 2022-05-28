/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
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
 * @return {number[]}
 */
// 递归
var postorderTraversal1 = function (root, arr = []) {
  if (root) {
    postorderTraversal(root.left, arr);
    postorderTraversal(root.right, arr);
    arr.push(root.val);
  }
  return arr;
};
// 迭代
var postorderTraversal = function (root) {
  let stack = [];
  let result = [];
  let cur = root;
  let prev = null;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    // 记录是否已经被遍历过
    if (cur.right == null || cur.right == prev) {
      result.push(cur.val);
      prev = cur;
      cur = null;
    } else {
      stack.push(cur);
      cur = cur.right;
    }
  }
  return result;
};
// @lc code=end
