function solution(numbers) {
  const arr = numbers
    .map((a) => a + "")
    .sort((a, b) => {
      if (a[0] > b[0]) {
        return -1;
      } else if (a[0] === b[0]) {
        const hap1 = +(a + b);
        const hap2 = +(b + a);
        if (hap1 > hap2) {
          return -1;
        } else {
          return 1;
        }
      } else {
        return 1;
      }
    });

  const hap = arr.reduce((a, b) => a + +b, 0);
  return hap === 0 ? "0" : arr.join("");
}

//입출력 예를 보며 숫자의 가장 첫째 자리의 수를 비교해 정렬을 해야겠단 생각을했다
//하지만 주번째 예시를 보니 안되는걸 확인후 정렬할 두수를 더한걸 비교를 해보니 정답과 정확히 일치를 하였다
//그래서 코드를 예시대로 정렬후 출력을 하니 오답이 나왔다
//이유는 만약 0000이 들어오면 답은 0이 나와야 하는데 0000이 나온다
//그래서 reduce로 한번더 조건을 줘서 해결했다
