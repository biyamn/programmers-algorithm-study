function solution(s) {
  if (s[0] === ")") {
    return false;
  }

  stack = [];
  stack.push("x");

  for (let e of s) {
    if (stack[stack.length - 1] === e) {
      stack.pop();
    } else {
      stack.push(")");
    }
  }

  return stack.length === 1 ? true : false;
}
