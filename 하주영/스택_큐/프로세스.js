// shift 함수
// 파이썬의 popleft 와 같음
function solution(priorities, location) {
  //위치 배열
  let arr = [];
  for (let i = 0; i < priorities.length; i++) {
    arr.push(i);
  }

  let order = 0; // 프로세스를 처리하는 순서
  let max_val;
  while (priorities.length) {
    max_val = Math.max(...priorities); // 최댓값을 구함

    if (priorities[0] < max_val) {
      // 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있는 경우, 다시 큐에 넣는다.
      priorities.push(priorities.shift());
      arr.push(arr.shift());
    } else {
      order += 1;
      priorities.shift();
      if (arr.shift() === location)
        // 처리할 프로세스가 location과 같을 때 (= 원하는 프로세스의 처리 순서일 때)
        return order;
    }
  }
}
