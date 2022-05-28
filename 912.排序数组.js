/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 冒泡排序
// var sortArray = function (nums) {
//   for (let i = nums.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] > nums[j + 1]) swap(nums, j, j + 1);
//     }
//   }
//   return nums;
// };

var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let pviotIndex = Math.floor(nums.length / 2);
  // 找到基准，并且把基准从原数组中删除
  let pivot = nums.splice(pviotIndex, 1)[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      leftArr.push(nums[i]);
    } else {
      rightArr.push(nums[i]);
    }
  }
  return sortArray(leftArr).concat([pivot], sortArray(rightArr));
};

function swap(array, left, right) {
  let rightValue = array[right];
  array[right] = array[left];
  array[left] = rightValue;
}
// @lc code=end
