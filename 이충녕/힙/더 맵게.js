/*
    스코빌 지수 가장 낮은 음식 뽑기 위해 오름차순 정렬
    가장 낮은 음식, 두 번째로 낮은 음식 섞어서 새로운 음식으로 추가 -> 오름차순 정렬
    스코빌 지수 가장 낮은 음식이 K 이상일 때까지 위 과정 반복
*/

function solution(scoville, K) {
  let shakeTime = 0;
  scoville.sort((a, b) => a - b);

  while (scoville[0] < K) {
    if (scoville.length < 2) return -1;

    const shakeFood = scoville.shift() + scoville.shift() * 2;

    scoville.push(shakeFood);

    scoville.sort((a, b) => a - b);
    shakeTime++;
  }

  return shakeTime;
}
