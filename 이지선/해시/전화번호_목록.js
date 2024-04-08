// 채점 결과
// 정확성: 66.7
// 효율성: 8.3
// 합계: 75.0 / 100.0

// 혼자 푼 내용
// 이중 for문과 startsWith로 한 번호가 다른 번호의 접두사인 경우를 찾았다.
// 같은 인덱스면 스스로를 검증하는 경우이므로 break한다.

function solution(phone_book) {
  for (let i = 0; i < phone_book.length; i++) {
    for (let j = 1; j < phone_book.length; j++) {
      if (i === j) break;
      if (phone_book[i].startsWith(phone_book[j])) {
        return false;
      }
    }
  }
  return true;
}

// 답지
// 이중 for문을 쓰지 않고 단일 for문을 썼다. 양 옆을 비교했음
// str.substring(a, b): str의 인덱스 a부터 b 전까지를 리턴함

function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (
      phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)
    ) {
      return false;
    }
  }
  return true;
}
