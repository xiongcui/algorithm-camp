/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
// 递归
var isValidBST1 = function (root) {
  return validBST(root, null, null);
};

var validBST = function (root, min, max) {
  if (root == null) return true;
  if (min != null && root.val <= min.val) return false;
  if (max != null && root.val >= max.val) return false;
  return validBST(root.left, min, root) && validBST(root.right, root, max);
};

// 非递归
var isValidBST = function (root) {
  let stack = [];
  let prevValue = -Infinity;
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    // 如果中序遍历得到的节点的值小于等于前一个 prevValue，说明不是二叉搜索树
    if (cur.val <= prevValue) return false;
    prevValue = cur.val;
    cur = cur.right;
  }
  return true;
};
// @lc code=end
