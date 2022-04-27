/**
 * @param {number} n - a positive integer
 * @return {number}
 * https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
 */
var hammingWeight = function(n) {
  let res = 0;
  while (n > 0) {
    res += n & 1;
    
    // n = n >> 1;  ❌ 需要无符号位移
    
    n = n >>> 1;
  }
  return res;
};

hammingWeight(4294967293);