/*
    카펫의 안쪽이 존재하기 위해서는 가로와 세로의 길이가 항상 3 이상, 서로 곱해서 brown + yellow가 되야함.
    -> 가로와 세로의 테두리 부분을 제외하고 곱한 값은 항상 yellow가 되야함
*/

function solution(brown, yellow) {
  const answer = [];
  let total = brown + yellow;

  for (let i = 3; i <= total / 3; i++) {
    if ((i - 2) * (total / i - 2) === yellow) {
      answer.push(total / i, i);
      break;
    }
  }

  return answer;
}
