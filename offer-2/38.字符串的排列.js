/**
 * @param {string} s
 * @return {string[]}
 */
 var permutation = function(s) {
  if(s.length === 1) return [s];
  const unires = new Set();

  const dfs = (prev, i) => {
   if (i === s.length) {
     unires.add(prev);
     return;
   };
   //  插头
   dfs(prev + s[i], i+1);

   // 插中间
   for (let j = 1; j < prev.length; j++) {
     const left = prev.substring(0, j);
     const right = prev.substring(j);
     dfs(left + s[i] + right, i+1);
   }
   //  插尾
   dfs(s[i] + prev, i+1);

  }

  dfs(s[0], 1);
  console.log(unires);

  return Array.from(unires);
 
};
permutation('aab');