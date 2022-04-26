/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 */
var minArray = function(nums) {
  // 线性查找 O(n)
  // for (let i = nums.length - 1; i > 0; i--) {
  //   if (nums[i] < nums[i-1]) return nums[i]
  // }
  // return nums[0];

  // 二分 O(logn)
  let i = 0, j = nums.length - 1;
  while (i < j) {
    const m = Math.floor((j + i) / 2);
    if (nums[m] < nums[j]) {
      j = m;
    } else if (nums[m] > nums[j]) {
      i = m + 1;
    } else {
      j--;
    }
  }
  return nums[i];
};