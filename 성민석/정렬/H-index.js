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
  console.log(obj);
  for (let k in obj) {
    if (+obj[k] >= +k) {
      answer = k;
    }
  }

  return +answer;
}
//문제가 이해가 잘안가 블로그를 보고 해결했습니다
