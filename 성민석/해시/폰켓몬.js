function solution(nums) {
  const arr = [...new Set(nums)];
  const pickN = nums.length / 2;

  return arr.length > pickN ? pickN : arr.length;
}
//set으로 중복을 제거한다음
//내가 뽑아야 할 갯수를 정의한후 조건으로 처리
