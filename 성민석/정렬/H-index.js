function solution(citations) {
  var answer = 0;
  const obj = {};
  const max = Math.max(...citations);
  for (let i = 0; i <= max; i++) {
    let count = 0;
    for (let j = 0; j < citations.length; j++) {
      if (i <= citations[j]) {
        count++;
      }
    }
    obj[i] = count;
  }

  for (let k in obj) {
    if (+obj[k] >= +k) {
      answer = k;
    }
  }

  return +answer;
}
//문제의 조건이 이해가 가지않아 블로그를 보고 해결했습니다
