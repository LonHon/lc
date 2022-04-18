/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * https://leetcode-cn.com/problems/4sum/
 */
var fourSum = function(nums, target) {
  if(nums.length < 4) return [];
  const res = [];
  // 排序
  nums.sort((a,b) => a-b);

  for(let i = 0; i < nums.length; i++) {

    // 剪枝
    if (nums[i] > target && nums[i] > 0) break;
    // 去重
    if (nums[i] === nums[i-1]) continue;

    for (let j = i+1; j < nums.length; j++) {

      if (nums[i] + nums[j] > target  && nums[j] > 0) break;
      if (nums[j] === nums[j-1] && j > i+1) continue;

      let l = j+1, r = nums.length-1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
  
        if (sum === target) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (nums[l] === nums[l+1] && l < r) {
            l++;
          }
          while (nums[r] === nums[r-1] && l < r) {
            r--;
          }
          l++;
          r--;
        } else if (sum > target) {
          r--;
        } else {
          l++;
        }
      }
    }
  }
  console.log(res);
  return res;
};

fourSum([-1,0,1,2,-1,-4], -1)
