// 풀이
// 1. 각 기능 진도가 100 이상이 될 때까지 개발 속도 누적
// 2. 최초 개발 기능 진도가 100 이상이 아닐 경우 의미가 없기 때문에 최초 개발 기능 진도 체크해 100 미만일 경우 개발 속도 누적
// 3. 최초 개발 기능 진도가 100 이상이라면 이후 개발 완료된 기능까지 한번에 배포하므로 개발 중인 기능 나올때까지 카운팅
// 4. 개발 완료된 기능은 progress, speeds에서 제거 -> 완료했기 때문에 더 이상 카운팅 필요 없음

function solution(progresses, speeds) {
  const progress = [...progresses];
  const deployment = [];

  const n = progress.length & speeds.length;

  while (progress.length) {
    let completeTask = 0;

    for (let i = 0; i < n; i++) {
      if (progress[i] < 100) progress[i] += speeds[i];
    }

    // console.log(progress);

    while (progress[0] >= 100) {
      progress.shift();
      speeds.shift();
      completeTask++;
    }

    if (completeTask > 0) deployment.push(completeTask);
  }

  return deployment;
}
