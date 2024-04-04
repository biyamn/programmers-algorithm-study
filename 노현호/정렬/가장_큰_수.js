function solution(numbers) {
  var answer = '';

  //두 숫자를 붙이고 서로 값을 비교한다 (문자열로 변환 후 숫자로 비교)
  //ex) 9는 어느 숫자를 붙여도 앞에 있어야 조건 만족함 === 제일 크다
  numbers.sort(
    (a, b) =>
      parseInt(b.toString() + a.toString()) -
      parseInt(a.toString() + b.toString())
  );

  answer = numbers.join('');
  //0이 제일 클 경우
  return answer[0] === '0' ? '0' : answer;
}
