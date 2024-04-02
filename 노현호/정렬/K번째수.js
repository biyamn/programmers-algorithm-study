function solution(array, commands) {
  let a, b, c;
  var answer = [];

  commands.forEach((command) => {
    a = command[0];
    b = command[1];
    c = command[2];
    //자르기
    const newArray = array.slice(a - 1, b);
    //정렬 후 answer배열에 push
    answer.push(newArray.sort((a, b) => a - b)[c - 1]);
  });

  return answer;
}
