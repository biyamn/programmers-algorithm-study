function solution(citations) {
  var answer = 0;

  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    // 순번이 피인용수보다 작거나 같을 때만 카운트
    if (i + 1 <= citations[i]) {
      answer++;
    }
  }
  return answer;
}
