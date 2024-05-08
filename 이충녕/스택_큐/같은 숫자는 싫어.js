// 풀이
// 인접한 두 요소 비교해 같지 않다면 스택에 추가
// 같다면 스택 최상단 요소 추출해 스택에 추가 (중복 제거)

function solution(arr) {
  const stack = [];

  for (let num of arr) {
    if (stack[stack.length - 1] === num) stack.push(stack.pop());
    else stack.push(num);
  }

  return stack;
}
