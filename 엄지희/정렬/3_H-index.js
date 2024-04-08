/**
  충녕님 답안 참조하여 복습
 */
const citations = [3, 0, 6, 1, 5];

let solution = (citations) => {
  let hIndex = 0;

  for (let i = 1; i <= Math.max(...citations); i++) { // 구조분해 할당하여 배열에서 가장 큰 값 추출하여 i 최댓값 지정
    let moreHQuotation = [];
    let lessHQuotation = [];

    for (let citation of citations) {
      if (citation >= i) moreHQuotation = [...moreHQuotation, citation];
      else lessHQuotation = [...lessHQuotation, citation];
    }

    if (moreHQuotation.length >= i && lessHQuotation.length <= i) hIndex = i;
  }

  return hIndex;
}

solution(citations);