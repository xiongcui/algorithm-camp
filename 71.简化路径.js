/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let names = path.split("/");
  let stack = [];
  for (const name of names) {
    if (name == "..") {
      stack.pop();
    } else if (name && name != ".") {
      stack.push(name);
    }
  }
  return "/" + stack.join("/");
};
// @lc code=end
