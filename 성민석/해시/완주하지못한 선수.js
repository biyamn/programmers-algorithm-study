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
