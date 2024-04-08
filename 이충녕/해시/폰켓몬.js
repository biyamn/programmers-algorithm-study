// 풀이
// 다양한 종류의 포켓몬 가져야 하기에 중복 포켓몬 제거
// 중복 제거된 포켓몬 마릿수가 N/2보다 크더라도 N/2 마리의 포켓몬만 가져갈 수 있음

function solution(nums) {
  const poketmons = new Set(nums);

  return poketmons.size > nums.length / 2 ? nums.length / 2 : poketmons.size;
}
