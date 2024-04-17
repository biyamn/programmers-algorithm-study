function solution(participant, completion) {
  const obj = {};
  for (let k in participant) {
    if (obj[participant[k]] === undefined) {
      obj[participant[k]] = 1;
    } else {
      obj[participant[k]] += 1;
    }
  }
  for (let k in completion) {
    if (obj[completion[k]] !== undefined) {
      obj[completion[k]] -= 1;
    }
  }
  const result = Object.keys(obj).filter((a) => obj[a] === 1);
  return result.join("");
}
//참가자와 완료자를 각각 객체에 할당한다
// 참가자는 객체에서 다 1로 맞춰주고
//완료자는 기존의 객체에서 같다면 -1을 해준다
//그러면 아직 남아있는 1의 value값이 있을것이다
//그걸 리턴한다
