function solution(priorities, location) {
  let answer = 0;
  let queue = [];

  queue = priorities.map((priority, index) => {
    return { priority, index };
  });

  while (queue.length > 0) {
    let current = queue.shift();

    let isBig = queue.some((e) => e.priority > current.priority);

    if (isBig) {
      queue.push(current);
    } else {
      answer += 1;

      if (current.index == location) {
        break;
      }
    }
  }

  return answer;
}
