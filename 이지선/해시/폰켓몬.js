// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

// 중복 제거된 배열 원소의 개수를 기본적으로 리턴한다.
// 만약 중복 제거된 배열 원소의 개수가 가져가는 폰켓몬의 마리수보다 크면 가져가는 폰켓몬의 마리수를 리턴한다.

function solution(nums) {
  const set = new Set(nums);
  const setLength = [...set].length;
  const choiceCount = nums.length / 2;

  if (setLength > choiceCount) {
    return choiceCount;
  } else {
    return setLength;
  }
}
