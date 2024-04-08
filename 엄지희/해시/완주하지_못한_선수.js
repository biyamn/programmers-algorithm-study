
let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];

let solution = (participant, completion) => {
  let answer = '';
  let participantMap = new Map(); 
  participant.forEach(ele => {
    if(participantMap.has(ele)) participantMap.set(ele, participantMap.get(ele)+1)
    else participantMap.set(ele, 1);
  });
  
  completion.forEach(ele => {
    if(participantMap.has(ele)) participantMap.get(ele) == 1 ? participantMap.delete(ele) : participantMap.set(ele, participantMap.get(ele) -1)
  })

  const iterator = participantMap.keys();
  answer = iterator.next().value;

  return answer;
}

solution(participant, completion);