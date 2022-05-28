/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let low = 1;
  let high = x;
  if (x < 0) return -1;
  while (low <= high) {
    // mid 取值
    let mid = Math.floor(low + (high - low) / 2);
    // 判断平方是否小于等于
    if (Math.pow(mid, 2) <= x) {
      // 如果小于等于，如果下一值大于 x 则当前值为 x 平方根的最小整数值
      if (Math.pow(mid + 1, 2) > x || mid === high) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else {
      high = mid - 1;
    }
  }
  return 0;
};
// @lc code=end
