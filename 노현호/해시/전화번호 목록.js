//js의 정렬은 문자기준 정렬이라 1,2,3,4순으로 정렬
//slice함수로 이전 문자길이만큼 나누어서 비교한다
function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length; i++) {
    if (i < phone_book.length - 1) {
      const len = phone_book[i].length;
      const slicedItem = phone_book[i + 1].slice(0, len);
      if (phone_book[i] === slicedItem) {
        return false;
      }
    }
  }
  return true;
}
