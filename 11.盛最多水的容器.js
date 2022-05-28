/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!height || !height.length) return 0;
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let area = Math.abs(right - left) * Math.min(height[left], height[right]);
    if (area > maxArea) {
      maxArea = area;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
// @lc code=end
