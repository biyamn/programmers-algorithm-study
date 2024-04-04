function solution(phone_book) {
  let answer = true;
  let arr = [...phone_book].sort();
  for (let i = 0; i < arr.length - 1; i++) {
    let a = arr[i + 1].slice(0, arr[i].length);
    if (arr[i] === a) {
      return false;
    }
  }

  return answer;
}
