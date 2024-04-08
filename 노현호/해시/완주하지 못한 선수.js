//객체를 사용해서 해쉬테이블 표현
//Object.keys()로 키값만 배열로 분리
function solution(participant, completion) {
  const hash = {};
  participant.forEach((item, index) => {
    if (hash[item]) {
      hash[item]++;
    } else {
      hash[item] = 1;
    }
  });
  completion.forEach((item, index) => {
    hash[item]--;
    if (hash[item] == 0) {
      delete hash[item];
    }
  });

  const answer = Object.keys(hash);
  return answer.join();
}
