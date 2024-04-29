function solution(s) {
  const stack = [];
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else if (s[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    }
  }
  if (stack.length === 0) {
    return true;
  }

  return false;
}
