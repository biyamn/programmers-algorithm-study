// 풀이
// 실행 대기 큐의 프로세스 중 최초 프로세스를 기준
// 기준 프로세스보다 우선순위가 높은 프로세스가 존재하면 기준 프로세스는 가장 뒤로 이동
// 기준 프로세스의 우선순위가 가장 높다면 해당 프로세스는 실행되었으므로 큐에 저장
// 최초 실행 대기큐의 프로세스 위치 location과 같은 위치에 존재하는 큐 요소 반환

function solution(priorities, location) {
  const process = priorities.map((v, idx) => [
    String.fromCharCode(65 + idx),
    v,
  ]);
  const stdProcess = process[location];
  const queue = [];

  while (process.length) {
    const [firstProcess, priority] = process.shift();
    const higherPriority = process.find((v) => priority < v[1]);

    if (higherPriority) process.push([firstProcess, priority]);
    else queue.push([firstProcess, priority]);

    // console.log([firstProcess, priority], process, queue);
  }

  return queue.findIndex((v) => v[0] === stdProcess[0]) + 1;
}
