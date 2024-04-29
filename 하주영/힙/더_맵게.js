// 오답 코드
// 합계: 54.8 / 100.0
function solution(scoville, K) {
  let answer = 0;

  scoville.sort((a, b) => b - a); // 스코빌 지수를 내림차순으로 정렬

  let a, b;
  let arr = [];
  while (scoville.length) {
    if (scoville[scoville.length - 1] >= K) {
      // 가장 맵지 않은 스코빌 지수의 값이 K보다 크거나 같을 때
      scoville.pop();
    } else {
      // 아닐 경우 섞는 연산 수행
      a = scoville.pop();
      if (scoville.length === 0) {
        // 만약 두번 째 원소가 없는 경우 -1 return
        return -1;
      }
      b = scoville.pop();
      scoville.push(a + b * 2);
      answer++;
    }
  }
  return answer;
}
