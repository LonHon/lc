/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode-cn.com/problems/trapping-rain-water/
 */
var trap = function(height) {
  // 暴力解 超时
  /*
  let res = 0;
  for (let i = 1; i < height.length - 1; i++) {
    // i两侧最高的柱子
    let lmax = 0, rmax = 0;
    for (let l = 0; l< i; l++) {
      lmax = Math.max(lmax, height[l]);
    }
    for (let r = i+1; r < height.length; r++) {
      rmax = Math.max(rmax, height[r]);
    }
    const min = Math.min(lmax, rmax);
    res += min > height[i] ? min - height[i] : 0;
  }
  console.log(res);
  return res;
  */

  // DP O(3n) / O(2n)
  /*
  const lmax = [height[0]]; // lmax[i]存i左侧最高
  const rmax = []; // rmax[i]存i右侧最高
  rmax[height.length - 1] = height[height.length - 1];

  for (let i = 1; i < height.length; i++) {
    lmax[i] = Math.max(height[i], lmax[i-1]);
  }

  for (let i = height.length - 2; i > -1; i--) {
    rmax[i] = Math.max(height[i], rmax[i+1]);
  }

  console.log(lmax)
  console.log(rmax)

  let res = 0;
  for (let i = 1; i < height.length-1; i++) {
    const r = Math.min(lmax[i], rmax[i]) - height[i];
    res += r > 0 ? r : 0;
  }

  console.log(res);
  return res;
  */

  // 双指针
  let left = 0, right = height.length - 1;
  // 可以直接初始化为0
  let lmax = height[0], rmax = height[height.length - 1];
  let res = 0;

  while (left < right) {
    lmax = Math.max(height[left], lmax);
    rmax = Math.max(height[right], rmax);
    if (lmax < rmax) {
      res += lmax - height[left];
      left++;
    } else {
      res += rmax - height[right];
      right--
    }
  }

  console.log(res);
  return res;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1]);
trap([4,2,0,3,2,5])