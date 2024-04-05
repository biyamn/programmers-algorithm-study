function solution(numbers) {
  var answer = "";

  // 두 수를 앞 뒤로 붙여서 내림차순 정렬함
  // "" + 숫자 => 문자열
  // 문자열 * 1 => 숫자
  numbers.sort((a, b) => ("" + b + a) * 1 - ("" + a + b) * 1);

  answer = numbers.join("");

  return answer[0] === "0" ? "0" : answer;
}
