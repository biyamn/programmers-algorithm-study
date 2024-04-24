function solution(clothes) {
  var answer = 1;
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    const [a, b] = clothes[i];
    if (obj[b] === undefined) {
      obj[b] = 1;
    } else {
      obj[b] += 1;
    }
  }

  for (let k in obj) {
    answer *= obj[k] + 1;
  }

  answer -= 1;

  return answer;
}
