function solution(array, commands) {
  let i, j, k;
  let filtered = []; // [i, j] 범위로 자른 배열
  var answer = []; // k 번째 수들 배열

  // 자르기
  commands.forEach((command) => {
    i = command[0] - 1;
    j = command[1] - 1;
    k = command[2] - 1;
    filtered = array.filter((num, idx) => i <= idx && idx <= j);

    // 정렬하기
    filtered.sort((a, b) => a - b);

    // k 번째 수 찾기
    answer.push(filtered[k]);
  });

  return answer;
}
