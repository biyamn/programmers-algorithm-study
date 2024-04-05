// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

// 풀이
// 인용횟수는 1 ~ 가장 많이 인용된 논문 횟수 만큼 범위 지정
// 인용횟수별 인용된 논문, 인용 안된 논문 구별
// 인용횟수만큼 인용된 논문 갯수가 인용횟수 이상 && 인용되지 않은 논문 갯수가 인용횟수 이하이면 H-Index는 인용횟수

function solution(citations) {
  let hIndex = 0;

  for (let i = 1; i <= Math.max(...citations); i++) {
    let moreHQuotation = [];
    let lessHQuotation = [];

    for (let citation of citations) {
      if (citation >= i) moreHQuotation.push(citation);
      else lessHQuotation.push(citation);
    }

    // console.log(i, moreHQuotation, lessHQuotation);

    if (moreHQuotation.length >= i && lessHQuotation.length <= i) hIndex = i;
  }

  return hIndex;
}
