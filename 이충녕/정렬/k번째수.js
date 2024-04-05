// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

// 풀이
// 1. 2차원 배열의 자식 배열에서 i, j, k 반환
// 2. 인덱스가 아닌 순서로 접근하기 위해 i - 1 ~ j 범위 컷팅
// 3. 2번에서 얻은 배열 오름차순 정렬 후 k번째 수 추가

function solution(array, commands) {
  const kLocation = [];

  commands.forEach((command) => {
    const i = command[0];
    const j = command[1];
    const k = command[2];

    const sliceArr = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];

    kLocation.push(sliceArr);
  });

  return kLocation;
}
