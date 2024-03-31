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
