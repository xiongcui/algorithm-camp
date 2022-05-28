/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 递归
  if (root == null) {
    return root;
  }
  // let tep = root.left;
  // root.left = root.right;
  // root.right = tep;

  // // 左右子节点继续翻转
  // invertTree(root.left);
  // invertTree(root.right);

  // 解构方式
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
// @lc code=end
