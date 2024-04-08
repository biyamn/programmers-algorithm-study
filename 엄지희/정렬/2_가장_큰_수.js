/**
 * 충녕님 답안 참조하여 복습
 */

function solution(numbers) {

  numbers.sort((a, b) => {
    // 4자리로 고정해 내림차순 정렬 -> 범위가 0 이상 1000이하이므로 4자리로 고정하여 최댓값 비교
    // repeat() 함수 사용법 : 반복할 횟수를 인자값으로 전달
    const aFDigits = a.toString().repeat(4).slice(0, 4);
    const bFDigits = b.toString().repeat(4).slice(0, 4);
    return bFDigits - aFDigits;
  });
  // 0만 들어있는 경우 예외 처리
  return numbers.reduce((accr, curv) => accr + Number(curv), 0)
    ? numbers.join("")
    : "0";
}