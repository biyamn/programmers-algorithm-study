function solution(brown, yellow) {
  var answer = [];

  let w;
  let h;
  let guess_brown;

  // yellow의 약수 찾기
  for (i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      w = yellow / i;
      h = i;

      guess_brown = (h + 2 + w) * 2; // w, h에 맞는 테두리 계산

      if (guess_brown === brown) {
        // 테두리와 brown 값이 일치하면 정답
        answer = [w + 2, h + 2];
        break;
      }
    }
  }

  return answer;
}
