/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let list = [];
  backtrack(list, [], nums);
  return list;
};

function backtrack(list, temp, nums) {
  // 终止条件
  if (temp.length == nums.length) {
    list.push([...temp]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) continue;
    temp.push(nums[i]);
    backtrack(list, temp, nums);
    temp.pop();
  }
}
// @lc code=end
