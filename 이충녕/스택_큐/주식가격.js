/*
    첫 번째 인덱스를 기준으로 이후 인덱스와 가격 비교
    가격 떨어진 시점 발견된다면 이후 시점 비교할 필요 없음 -> 전위 연산자로 시간 증가시켜 반복문 탈출
    가격 떨어진 시점 없다면 계속 시간 증가
*/

function solution(prices) {
  const period = [];

  for (let i = 0; i < prices.length; i++) {
    let stayTime = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        ++stayTime;
        break;
      } else {
        stayTime++;
      }
    }
    period.push(stayTime);

    // console.log(stayTime, period);
  }

  return period;
}
