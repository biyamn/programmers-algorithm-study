// 채점 결과
// 정확성: 61.8
// 효율성: 15.2
// 합계: 77.0 / 100.0

// ()))((() -> 통과하지 못하는 것을 확인
// 일단 길이가 홀수이면 무조건 짝이 안맞으므로 false
// 처음이 )이거나 끝이 (이면 false

// 내 풀이 - 틀림
function solution(s) {
  const array = [...s];
  return array.length % 2 === 1 ||
    array[0] === ")" ||
    array[array.length - 1] === "("
    ? false
    : true;
}

// 현호님 풀이
// ()))((()) -> 통과
function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? (count += 1) : (count -= 1);

    if (count < 0) {
      return false;
    }
  }
  return count == 0 ? true : false;
}
