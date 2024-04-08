function solution(participant, completion) {
  var answer = "";

  var completion_map = new Map();
  completion.forEach((com) => {
    // 완수자 배열을 순회하면서 완수자의 이름이 같은 경우는 하나로 묶음
    if (completion_map.has(com)) {
      completion_map.set(com, completion_map.get(com) + 1);
    } else {
      completion_map.set(com, 1);
    }
  });

  participant.forEach((part) => {
    // 참가자 배열을 순회하면서 완수자에 포함되어 있는지를 체크
    if (!completion_map.has(part)) {
      answer = part; // 없다면 그것이 정답
    } else {
      completion_map.set(part, completion_map.get(part) - 1); // 있으면 완수자 맵의 값을 -1
      if (completion_map.get(part) === 0) {
        // 만약 값이 0이 되었다면 완수자 맵에서 해당 이름 삭제
        completion_map.delete(part);
      }
    }
  });
  return answer;
}
