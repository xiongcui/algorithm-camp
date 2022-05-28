/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   if (s.length % 2 == 1) return false;
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     const str = s[i];
//     if (str == "(" || str == "{" || str == "[") {
//       stack.push(str);
//     } else {
//       const top = stack[stack.length - 1];
//       if (
//         (top == "(" && str == ")") ||
//         (top == "{" && str == "}") ||
//         (top == "[" && str == "]")
//       ) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return stack.length == 0;
// };

// 使用Map解法
var isValid = function (s) {
  if (s.length % 2 == 1) return false;
  let stack = [];
  let map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else if (s[i] == map.get(top)) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length == 0;
};
// @lc code=end
