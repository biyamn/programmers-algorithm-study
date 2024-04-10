//set을 이용하여 중복 제거 후 선택하기
function solution(nums) {
  const choice = nums.length / 2;
  const unique = [...new Set(nums)].length;
  return choice > unique ? unique : choice;
}
