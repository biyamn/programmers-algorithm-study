// 1차 풀이 (효율성 테스트 시간 초과)
// 2중 for문으로 순회하며 i 인덱스 기준 문자열 길이만큼 j 인덱스 문자열 앞에서부터 컷팅
// i, j 문자열 길이 같으면 접두어로 간주

function solution(phone_book) {
  for (let i = 0; i < phone_book.length; i++) {
    for (let j = 0; j < phone_book.length; j++) {
      if (i === j) continue;

      if (phone_book[j].includes(phone_book[i])) {
        // 접두어인지 체크
        const preFix = phone_book[j].slice(0, phone_book[i].length);

        if (phone_book[i] === preFix) return false;
      }
    }
  }

  return true;
}

// 2차 풀이
// sort() 메서드로 정렬하면 유니코드 값 기준으로 정렬되기 때문에 비슷한 문자끼리 인접해짐 -> 2중 for문 필요 x
// i 인덱스 기준으로 인접한 비슷한 문자열 컷팅해 접두어 체크

function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    const preFix = phone_book[i + 1].slice(0, phone_book[i].length);

    if (phone_book[i] === preFix) return false;
  }

  return true;
}
