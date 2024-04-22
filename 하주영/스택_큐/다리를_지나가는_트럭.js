function solution(bridge_length, weight, truck_weights) {
  let bridge = Array(bridge_length).fill(0);

  let answer = 0; // 걸리는 시간

  while (bridge.length) {
    bridge.shift(); // 다리에서 제거
    answer += 1;

    if (truck_weights.length) {
      // 대기 중인 트럭이 있을 경우
      let bridge_sum = bridge.reduce((acc, curr) => acc + curr, 0); // 현재 다리에 걸리는 총 무게
      if (bridge_sum + truck_weights[0] <= weight) {
        // 만약 트럭을 한대 더 올릴 수 있다면
        bridge.push(truck_weights.shift()); // 트럭을 다리에 추가
      } else {
        bridge.push(0); // 빈 0을 추가
      }
    }
  }
  return answer;
}
