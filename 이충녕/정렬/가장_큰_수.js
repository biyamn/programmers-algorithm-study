// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

// 풀이
// sort() compaerFn 매개변수
// a : nextValue (10)
// b : prevValue (6)
// 내림차순 비교함수 리턴값이 0보다 크면 자리 변경 x, 0보다 작으면 자리 변경 발생
// b - a, 즉 6 - 10 < 0 이므로 자리 변경 발생

function solution(numbers) {
  numbers.sort((a, b) => {
    // 4자리로 고정해 내림차순 정렬
    const aFDigits = a.toString().repeat(4).slice(0, 4);
    const bFDigits = b.toString().repeat(4).slice(0, 4);

    return bFDigits - aFDigits;
  });
  // 0만 들어있는 경우 예외 처리
  return numbers.reduce((accr, curv) => accr + Number(curv), 0)
    ? numbers.join("")
    : "0";
}
