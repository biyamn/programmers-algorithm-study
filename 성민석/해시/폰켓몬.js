function solution(nums) {
  const arr = [...new Set(nums)];
  const pickN = nums.length / 2;

  return arr.length > pickN ? pickN : arr.length;
}
