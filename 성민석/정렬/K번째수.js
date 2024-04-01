function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let [a, b, c] = commands[i];
    let arr = array.slice(a - 1, b).sort((a, b) => a - b);
    answer.push(arr[c - 1]);
  }
  return answer;
}
//command를 순회하면서 자를 범위를 구조분해 할당으로 빼낸다
//배열의 slice를 사용해 배열을 자르고 정렬을 한다
//이제 k 번째 인덱스를 빼내서 정답 배열에 넣고 출력한다
