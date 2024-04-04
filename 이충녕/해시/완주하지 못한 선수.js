// 풀이
// 1. 이름별 인원 수 체크 (동명이인 체크)
// 2. 1번에서 완주자 존재하면 완주자 이름 인원 수 1 감소 -> 0이 되면 해당 이름의 선수 모두 완주 한 것으로 간주해 제거
// 3. 2번에서 제외되지 않은 이름은 완주하지 못한 선수임

function solution(participant, completion) {
  const players = new Map();

  for (let p of participant) {
    if (players.has(p)) players.set(p, players.get(p) + 1);
    else players.set(p, 1);
  }

  for (let c of completion) {
    if (players.has(c)) players.set(c, players.get(c) - 1);

    if (players.get(c) === 0) players.delete(c);
  }

  return Array.from(players.keys()).join("");
}
