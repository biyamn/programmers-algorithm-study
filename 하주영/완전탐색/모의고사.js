function solution(answers) {
  let aArr = [1, 2, 3, 4, 5]; // 5개
  let bArr = [2, 1, 2, 3, 2, 4, 2, 5]; // 8개
  let cArr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10개

  let students = [-1, 0, 0, 0];
  answers.forEach((curr, i) => {
    if (aArr[i % 5] === curr) {
      students[1]++;
    }
    if (bArr[i % 8] === curr) {
      students[2]++;
    }
    if (cArr[i % 10] === curr) {
      students[3]++;
    }
  });

  const maxValue = Math.max(...students);
  const answer = students.reduce((acc, curr, i) => {
    if (curr === maxValue) {
      acc.push(i);
    }
    return acc;
  }, []);
  return answer;
}
