// 풀이
// s 문자열의 각 문자가 여는 괄호라면 스택에 추가
// 닫는 괄호라면 스택 최상단 요소 제거 -> 괄호 한쌍 제거
// 스택에 남은 괄호가 없어야 올바른 괄호

function solution(s) {
  const stack = [];

  // 닫는 괄호로 시작하면 올바른 괄호가 아님
  if (s[0] === ")") return false;

  for (let bracket of s) {
    if (bracket === "(") stack.push("(");
    else stack.pop();
  }

  return stack.length ? false : true;
}
