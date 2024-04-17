// 채점 결과
// 정확성: 71.9
// 효율성: 28.1
// 합계: 100.0 / 100.0

// 첫번째 원소는 스택에 무조건 넣는다.
// 두번째 원소부터는 이전에 넣은 원소와 비교하여 다를 때만 스택에 넣는다.

function solution(arr) {
  let stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) stack.push(arr[i]);
  }
  return stack;
}
