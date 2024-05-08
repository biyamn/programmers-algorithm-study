function solution(scoville, K) {
  let answer = 0;
  let arr = scoville.sort((a, b) => a - b);

  while (arr[0] < K) {
    if (arr.length === 1) {
      return -1;
    }

    let jisoo = arr[0] + 2 * arr[1];
    arr.splice(0, 2, jisoo);

    arr.sort((a, b) => a - b);

    answer++;

    if (arr[0] >= K) {
      break;
    }
  }
  return answer;
}
