// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

// 풀이
// for문으로 가장 큰 인용수부터 1씩 줄여나가며 확인한다
// h번 이상 인용된 논문이 h편 이상인지 확인한다
// 위의 조건을 만족하면 자동으로 나머지 논문은 h번 이하 인용되므로 이 조건문은 신경쓰지 않는다.

function solution(citations) {
  for (let h = Math.max(...citations); h > -1; h--) {
    if (citations.filter((citation) => citation >= h).length >= h) return h;
  }
}
