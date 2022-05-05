/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode-cn.com/problems/container-with-most-water/submissions/
 */
 var maxArea = function(height) {
  //  双指针
  let res = 0, left = 0, right = height.length -1;
  while (left < right) {
    // 当前能盛水的面积：长*宽
      const waters = Math.min(height[left], height[right]) * (right - left);
      res = Math.max(res, waters)
    // 小的一侧往中间缩进
      if (height[left] >= height[right]) {
          right--;
      } else {
          left++;
      }
  }
  console.log(res);
  return res;
};

maxArea([2,3,4,5,18,17,6]); // 17