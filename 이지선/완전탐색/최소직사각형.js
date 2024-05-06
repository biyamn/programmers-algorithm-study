// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

function solution(sizes) {
  // size의 원소인 배열 중 인덱스 0인 값이 인덱스 1인 값보다 작으면 둘의 위치를 바꿔줌
  // 큰 값들은 인덱스 0으로, 작은 값들은 인덱스 1으로 가도록 하기 위함
  const switched = sizes.map((size) => {
    if (size[0] < size[1]) {
      const temp = size[0];
      size[0] = size[1];
      size[1] = temp;
      return size;
    } else return size;
  });

  // 큰 값들(switched 배열의 인덱스 0) 중 가장 큰 값과
  // 작은 값들(switched 배열의 인덱스 1) 중 가장 작은 값을 곱하여
  // 명함을 모두 수납 가능하면서 가장 작은 지갑의 크기를 구한다.
  const sorted = switched.sort((a, b) => b[0] - a[0]);
  const maxOfMax = Math.max(...sorted.map((v) => v[0]));
  const maxOfMin = Math.max(...sorted.map((v) => v[1]));

  return maxOfMax * maxOfMin;
}
