// 채점 결과
// 정확성: 27.3
// 합계: 27.3 / 100.0

// 스택에 며칠이 걸리는지를 담았다.
// 앞뒤 원소의 비교를 위해 맨 앞에 가장 큰 숫자 100을 담았다.
// 그 이후에는 풀다가 포기함

function solution(progresses, speeds) {
  let stack = [100];
  for (let i = 0; i < progresses.length; i++) {
    stack.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  // let count = 0;
  // let answer = [];
  // let temp = [];
  // for (let i = 0; i < queue.length + 1; i++) {
  //   temp.push(queue[i]);
  //   if (queue[i - 1] >= queue[i]) {
  //     count++;
  //     console.log('뒤가 더 작음 count: ', count);
  //   } else {
  //     const m = queue.slice(1);
  //     const max = Math.max(...m);
  //     console.log('max; ', max);
  //     if (queue[i] < 100 && queue[i] >= max) {
  //       console.log('queue[i], max: ', queue[i], max);
  //       console.log('뒤가 더 큼 count: ', count);
  //       answer.push(count);
  //       count = 1;
  //     }
  //   }
  //   if (i === queue.length) {
  //     answer.push(count);
  //   }
  // }
  // return answer;
}

// 답안
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
