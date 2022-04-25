/**
 * @param {string} s
 * @return {string}
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 */
var replaceSpace = function(s) {
  let r = '';

  // O(n) / O(n)
  for (let i = s.length -1; i > -1; i--){
    if (s[i] === ' '){
      // 替换
      r = '%20' + r;
    } else {
      r = s[i] + r;
    }
  }
  
  return r;
};
// 输入：s = "We are happy."
// 输出："We%20are%20happy."

replaceSpace('We are happy.')