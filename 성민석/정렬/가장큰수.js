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
//우선 입출력예시를 통해 각수의 첫번재 자리 비교를 통해 결과를 낼수 있다는 생각을 하였다
//하지만 두번째 예시를 보니 잘못된걸 인지한후
//sort할 두수를 문자열로 연결후 비교를 하니 결과가 나오는걸 확인했습니다
//하지만 출력을 하니 에러가 떴는데 이유를 생각해보니
// 만약 0,0,0,0이 들어오면 0이 나와야 하는데 나는 0000이 나오는걸 확인후 리듀스 함수로 최종 결과를 냈습니다
