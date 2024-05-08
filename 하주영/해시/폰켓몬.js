function solution(nums) {
  var answer = 0;

  let hash_map = new Map();
  // 중복을 포함하지 않고 맵에 저장
  for (let i = 0; i < nums.length; i++) {
    if (!hash_map.has(nums[i])) {
      hash_map.set(nums[i], true);
    }
  }

  // 최대로 선택할 수 있는 폰켓몬의 수는 num.length /2
  // 맵의 저장되어 있는 폰켓몬과 비교하여 최소값이 answer이 됨
  answer = Math.min(hash_map.size, nums.length / 2);
  return answer;
}
