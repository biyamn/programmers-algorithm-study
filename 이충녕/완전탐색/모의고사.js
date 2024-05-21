/*
    개별 찍는 방식 체크
    -> 맞은 문제 갯수 체크
    가장 많이 맞춘 인원 번호 리턴
*/

function solution(answers) {
  const answer = [];

  const per1 = [1, 2, 3, 4, 5];
  const per2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const per3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const per1Score = answers.filter(
    (v, idx) => v === per1[idx % per1.length]
  ).length;
  const per2Score = answers.filter(
    (v, idx) => v === per2[idx % per2.length]
  ).length;
  const per3Score = answers.filter(
    (v, idx) => v === per3[idx % per3.length]
  ).length;

  const maxScore = Math.max(per1Score, per2Score, per3Score);

  if (per1Score === maxScore) answer.push(1);
  if (per2Score === maxScore) answer.push(2);
  if (per3Score === maxScore) answer.push(3);

  return answer;
}
