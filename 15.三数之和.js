/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode-cn.com/problems/3sum/
 */
var threeSum = function(nums) {
  const res = [];
  if (nums.length < 3) return res;
  // 排序
  nums.sort((a,b) => a-b);
  for (let i = 0; i < nums.length; i++) {
    let l = i+1, r = nums.length - 1;
    if (nums[i] === nums[i-1]) continue;
    if (nums[i] > 0) break;
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r];
      if (s === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (nums[l] === nums[l+1] && l < r) {
          l++;
        }
        while (nums[r] === nums[r-1] && l < r) {
          r--;
        }
        l++;
        r--;
      } else if (s > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return res;
};

threeSum([-1,0,1,2,-1,-4])
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]