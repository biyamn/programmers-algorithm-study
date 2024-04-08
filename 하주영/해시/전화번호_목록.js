function solution(phone_book) {
  // 정렬
  phone_book.sort();

  // 앞 뒤 번호를 비교하여 앞 번호가 뒷번호의 접두어면, false 리턴
  for (let i = 1; i < phone_book.length; i++) {
    if (
      phone_book[i - 1] === phone_book[i].slice(0, phone_book[i - 1].length)
    ) {
      return false;
    }
  }

  return true;
}
