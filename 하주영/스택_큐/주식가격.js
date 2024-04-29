function solution(prices) {
  // answer 배열 초기화
  let answer = [];
  for (let i = 0; i < prices.length; i++) {
    answer[i] = prices.length - 1 - i;
  }

  let stack = [];
  stack.push([0, prices[0]]); // [인덱스, 값] 형태로 저장
  let i = 1;
  let last_idx;
  let last_value;
  let current_value;
  while (i < prices.length) {
    last_value = stack[stack.length - 1][1]; // 마지막 원소
    current_value = prices[i]; // 현재 원소

    if (current_value < last_value) {
      // 현재 원소가 마지막 원소보다 작을 때, 스택에서 제거 후 인덱스의 차이를 answer 배열에 저장
      do {
        [last_idx, last_value] = stack.pop();
        answer[last_idx] = i - last_idx;
      } while (stack.length > 0 && current_value < stack[stack.length - 1][1]);
    }
    stack.push([i, current_value]); // 비교 후 [현재 인덱스, 현재 값] push
    i++;
  }

  console.log(answer);

  return answer;
}
