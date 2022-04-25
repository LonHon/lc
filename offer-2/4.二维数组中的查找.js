/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 */
var findNumberIn2DArray = function(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

  
  /*
      旋转45°   近似二叉树特性，有两个root

        选左上角，往右走和往下走都增大，不能选

        选右下角，往上走和往左走都减小，不能选

        选左下角，往右走增大，往上走减小，可选  ROOT

        选右上角，往下走增大，往左走减小，可选  ROOT
  */

  // 从右上角开始查找
  // let row = 0, col = matrix[0].length - 1;

  // while (row < matrix.length && col > -1) {
  //   const t = matrix[row][col];
  //   if (t === target) return true;
  //   if (t > target) {
  //     col--
  //   } else {
  //     row++
  //   }
  // }


  // 从左下开始找
  let row = matrix.length - 1, col = 0;

  while (row > -1 && col < matrix[row].length) {
    const t = matrix[row][col];
    if (t === target) return true;
    if (t > target) {
      row--
    } else {
      col++
    }
  }

  return false;

};

console.log(findNumberIn2DArray([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 8))