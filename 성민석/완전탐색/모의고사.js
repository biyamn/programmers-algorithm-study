function solution(answers) {
  var answer = [];
  var a = [1, 2, 3, 4, 5];
  var a2 = [];
  var b = [2, 1, 2, 3, 2, 4, 2, 5];
  var b2 = [];
  var c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var c2 = [];

  for (let i = 0; i < Math.floor(answers.length / 5); i++) {
    a2.push([1, 2, 3, 4, 5]);
  }
  for (let i = 0; i < answers.length % 5; i++) {
    a2.push(a[i]);
  }
  for (let i = 0; i < Math.floor(answers.length / 8); i++) {
    b2.push([2, 1, 2, 3, 2, 4, 2, 5]);
  }
  for (let i = 0; i < answers.length % 8; i++) {
    b2.push(b[i]);
  }
  for (let i = 0; i < Math.floor(answers.length / 10); i++) {
    c2.push([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);
  }
  for (let i = 0; i < answers.length % 10; i++) {
    c2.push(c[i]);
  }
  a2 = a2.flat();
  b2 = b2.flat();
  c2 = c2.flat();
  var as = 0;
  var bs = 0;
  var cs = 0;
  console.log(a2, b2, c2);
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a2[i]) {
      as++;
    }
    if (answers[i] === b2[i]) {
      bs++;
    }

    if (answers[i] === c2[i]) {
      cs++;
    }
  }
  console.log(Math.max(as, bs, cs));
  if (Math.max(as, bs, cs) === as) {
    answer.push(1);
  }
  if (Math.max(as, bs, cs) === bs) {
    answer.push(2);
  }
  if (Math.max(as, bs, cs) === cs) {
    answer.push(3);
  }
  return answer;
}
