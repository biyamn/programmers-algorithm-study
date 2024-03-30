// 채점 결과
// 정확성: 85.7
// 합계: 85.7 / 100.0

// 풀이
// commands를 구조분해할당하여 의미있는 값 start, end, index로 나눔
// 인덱스로 나누고(slice), 내림차순으로 정렬하고(sort), 값을 찾음([index])

function solution(array, commands) {
  return commands.map(
    ([start, end, index]) =>
      array.slice(start - 1, end).sort((a, b) => a - b)[index - 1]
  );
}

// 오류
// 처음에 sort()로만 했다가 2번에서 오류가 나서 답지를 봄
// sort()로 하면 2, 10이 있을 때 10을 더 작은 거로 판단함
// 그래서 sort((a, b) => a - b)로 해줘서 해결했다.
