// 채점 결과
// 정확성: 53.3
// 합계: 53.3 / 100.0

// 풀이
// max는 가장 큰 숫자의 자릿수
// 마지막 숫자를 max 길이가 되도록 뒤에 붙임
// 예: numbers가 [3, 30, 34, 5, 9]일 때
//     33, 30, 34, 55, 99 이렇게 만듦
// 두번째 값으로 정렬해서 첫번째 원본 값을 붙임
// 결과: "9534330"

function solution(numbers) {
  const max = Math.max(...numbers).toString().length;
  const transformed = numbers.map((number) => {
    const str = number.toString();
    const multiple = str + str.slice(-1).repeat(max - str.length);
    return [str, multiple];
  });
  transformed.sort((a, b) => b[1] - a[1]);
  return transformed.map((item) => item[0]).join("");
}

// 답안
// 예: 34 3 30
//     30랑 3를 비교할 때 문자열로 잇는다 -> 330 303 -> 330이 큼 -> 330이 됨
function solution(numbers) {
  let answer = numbers.sort((a, b) => b + a - (b - a)).join("");
  return answer[0] === "0" ? "0" : answer;
}
