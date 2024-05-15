/*
    명함은 가로로 눞일 수 있으므로 지갑의 가로는 명함의 최대 가로 길이여야함
    명함 눞이면 세로 -> 가로, 가로 -> 세로가 됨 (30, 70 -> 70, 30)
    가장 큰 값이 가로가 되니까 가장 작은 값이 세로가 됨 
*/

function solution(sizes) {
  const width = [];
  const height = [];

  sizes.forEach((v) => {
    const x = Math.max(v[0], v[1]);
    const y = Math.min(v[0], v[1]);

    width.push(x);
    height.push(y);
  });

  return Math.max(...width) * Math.max(...height);
}
