function solution(arr) {
  var answer = [];
  answer.push(arr[0]);

  let last_idx = 0; // 스택의 마지막 인덱스
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== answer[last_idx]) {
      // 현재 원소가 스택의 마지막 원소와 같지 않을 경우만 push
      last_idx += 1;
      answer.push(arr[i]);
    }
  }

  return answer;
}
