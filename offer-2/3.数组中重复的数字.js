/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 */
var findRepeatNumber = function(nums) {
  // 暴力解法：O(n^2) ❌

  // DP：O(n) / O(n)
  // const map = new Map();
  // for (let i of nums) {
  //   if (map.get(i)) return i;
  //   else map.set(i, 1)
  // }

  // 原地交换 O(n) / O(1)
  let i = 0;
  while (i < nums.length) {
    if (i === nums[i]) {
      i++;
      continue;
    }
    if (nums[nums[i]] === nums[i]) return nums[i];
    let tmp = nums[i];
    nums[i] = nums[tmp];
    nums[tmp] = tmp;
  }
};