/*
    풀이
    다리를 건너는데 필요한 시간 : bridge_length
    테스트케이스 1을 대표로 보면 bridge_length 2이므로 다리 길이는 2로 간주
    현재 건너고 있는 트럭과 건널 차례를 기다리고 있는 트럭 무게가 weight 이하일 경우 기다리는 트럭은 출발 가능
    weight을 초과한 경우 다리 길이를 맞춰주기
    -> 1초 지날 때마다 트럭 한대는 무조건 건너감

    시간        전체 트럭       다리를 건너는 트럭      다리를 건넌 트럭
    0       [7, 4, 5, 6]        [0, 0]              []
    1       [4, 5, 6]           [7, 0]              []
    2       [4, 5, 6]           [0, 7]              []
    3       [5, 6]              [4, 0]              [7]
    4       [6]                 [5, 4]              [7]
    5       [6]                 [0, 5]              [7, 4]
    6       []                  [6, 0]              [7, 4, 5]
    7       []                  [0, 6]              [7, 4, 5]
    8       []                  [0, 0]              [7, 4, 5, 6]
*/

function solution(bridge_length, weight, truck_weights) {
  // 다리 길이
  const bridge = Array.from({ length: bridge_length }).fill(0);
  let time = 0;

  while (truck_weights.length) {
    time++;

    // 1초 지날 때마다 트럭 한대는 건너감
    bridge.pop();

    const totalWeight = bridge.reduce((accr, curv) => accr + curv, 0);

    if (totalWeight + truck_weights[0] <= weight) {
      bridge.unshift(truck_weights.shift());
    } else {
      bridge.unshift(0);
    }

    // console.log(bridge, truck_weights, time);
  }

  return time + bridge.length;
}
