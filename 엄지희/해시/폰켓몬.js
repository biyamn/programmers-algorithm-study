let solution = (nums) => {
  let answer = 0;
  let max = nums.length/2;
  let numMap = new Map(); 
  nums.forEach(ele => {
    if(numMap.has(ele)) numMap.set(ele, numMap.get(ele)+1)
    else numMap.set(ele, 1);
  });
  answer = max > numMap.size ? numMap.size : max;
  return answer;
}