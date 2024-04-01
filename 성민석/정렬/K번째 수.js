function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let [a, b, c] = commands[i];
    let arr = array.slice(a - 1, b).sort((a, b) => a - b);
    answer.push(arr[c - 1]);
  }
  return answer;
}

//commands배열을 순회하여 구조분해 할당을 통해 자를 범위와 k번째 인덱스를 구한다
// slice메서드를 통해 자르고 구조분해할당한 k번째 인덱스 값을 이용해 결과를 결과 배열에 할당
