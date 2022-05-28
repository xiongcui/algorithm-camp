/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function (x, n) {
//   if (n == 0) return 1;
//   let flag = true;
//   if (n < 0) {
//     flag = false;
//     n = -n;
//   }
//   let total = 1;
//   if (n > 0) {
//     while (n) {
//       total = total * x;
//       n--;
//     }
//   }
//   if (flag) {
//     return total;
//   } else {
//     return 1 / total;
//   }
// };

// var myPow = function (x, n) {
//   if (n < 0) return 1 / (x * myPow(x, -(n + 1)));
//   if (n === 0) return 1;
//   if (n === 1) return x;

//   if (n % 2 === 1) {
//     return x * myPow(x, n - 1);
//   } else {
//     return myPow(x * x, n / 2);
//   }
// };

var myPow = function (x, n) {
  if (n < 0) return 1 / (x * myPow(x, -(n + 1)));
  if (n === 0) return 1;
  if (n === 1) return x;
  let res = 1;
  while (n > 1) {
    if (n % 2 === 1) {
      n--;
      res = res * x;
    }
    x = x * x;
    n = n / 2;
  }
  return res * x;
};
// @lc code=end
