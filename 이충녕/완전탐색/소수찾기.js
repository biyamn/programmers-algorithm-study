/*
    풀이
    numbers 개별 요소, 전체 요소 소수인지 판별
    개별 요소 numbers 맨 뒤로 이동
*/

function solution(numbers) {
  const nums = numbers.split("");

  const answer = [];

  // 소수 판별
  const isPrime = (num) => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      // console.log(nums[j], nums.join(""), nums);

      // 개별 요소
      if (isPrime(Number(nums[j])) && !answer.includes(Number(nums[j]))) {
        answer.push(Number(nums[j]));
      }

      // 전체 요소
      if (
        isPrime(Number(nums.join(""))) &&
        !answer.includes(Number(nums.join("")))
      ) {
        answer.push(Number(nums.join("")));
      }
    }
    nums.push(nums.shift());
  }

  return answer.length;
}
