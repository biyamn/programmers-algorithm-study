// 채점 결과
// 정확성: 58.3
// 효율성: 41.7
// 합계: 100.0 / 100.0

// 비교해서 없는 한 명을 찾는 것이므로 정렬하여 같은 인덱스를 비교한 후
// 같지 않으면 없는 거로 간주하여 리턴한다.

function solution(participant, competition) {
  const sortedParticipant = participant.sort();
  const sortedCompetition = competition.sort();

  for (let i = 0; i < sortedParticipant.length; i++) {
    if (sortedParticipant[i] !== sortedCompetition[i])
      return sortedParticipant[i];
  }
}
