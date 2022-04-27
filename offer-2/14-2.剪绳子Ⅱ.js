/**
 * @param {number} n
 * @return {number}
 * https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof/
 */
var cuttingRope = function(n) {
  // 纯抄袭数学定理
  // 3越多越好
    if(n == 2) return 1;
    if(n == 3) return 2;
    let res = 1;
    while(n > 4){
        res *= 3;
        res = res % 1000000007;
        n -= 3;
    }
    return (res * n % 1000000007);
};

console.log(cuttingRope(1000))