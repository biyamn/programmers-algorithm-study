// 채점 결과
// 정확성: 66.7
// 효율성: 33.3
// 합계: 100.0 / 100.0

function solution(prices) {
  const seconds = [];
  for (let i = 0; i < prices.length; i++) {
    let second = 0;
    for (let j = i + 1; j < prices.length; j++) {
      // 마지막 원소는 가격이 떨어지기까지 무조건 0초여서 바로 break
      if (i === prices.length - 1) {
        break;
      } else if (prices[i] <= prices[j]) {
        // 가격이 떨어지지 않으면 second에 1 더하기
        second++;
      } else {
        // 가격이 떨어져도 어쨌든 1초 걸리니 second에 1 더한 후 break
        second++;
        break;
      }
    }
    seconds.push(second);
  }
  return seconds;
}
