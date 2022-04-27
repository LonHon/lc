/**
 * @param {number} n
 * @return {number[]}
 * https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 */
var printNumbers = function(n) {
  // 主要考察越界处理 
  const res = [];
  let i = 1;

  while ( i < 10 ** n) {
    res.push(i);
    i++;
  }
  return res;
};

printNumbers(8)