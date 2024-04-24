function solution(progresses, speeds) {
  var answer = [];
  const result = [];
  for (let i = 0; i < speeds.length; i++) {
    let n = 0;
    if ((100 - progresses[i]) % speeds[i] > 0) {
      n = 1;
    }
    answer.push(Math.floor((100 - progresses[i]) / speeds[i] + n));
  }
  console.log(answer);
  let count = 1;
  let flag = answer[0];
  for (let i = 1; i < answer.length; i++) {
    if (flag >= answer[i]) {
      count++;
    } else if (flag < answer[i]) {
      result.push(count);
      count = 1;
      flag = answer[i];
    }
    if (i === answer.length - 1) {
      result.push(count);
    }
  }
  return result;
}
