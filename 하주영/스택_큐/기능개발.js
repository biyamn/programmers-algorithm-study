function solution(progresses, speeds) {
  const len = progresses.length;

  let queue = [];

  // 각 작업당 남은 일수를 계산하여 queue 에 저장
  for (let i = 0; i < len; i++) {
    let rest = (100 - progresses[i]) / speeds[i];
    rest = Math.ceil(rest);
    queue.push(rest);
  }

  let count = 1;
  let answer = [];
  let days = queue[0];

  for (let i = 1; i < len; i++) {
    if (days >= queue[i]) {
      // queue의 2개의 원소의 대소비교가 교차되거나 같을 때 (ex. [2, 1] or [1, 1])
      count += 1; // count 1증가
    } else {
      // queue의 원소의 대소비교가 오름차순일 때 (ex. 1, 2)
      // 일을 처리 (answer에 넣기)
      answer.push(count);
      count = 1;
      days = queue[i];
    }
  }

  answer.push(count);

  return answer;
}
