function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    let a = phone_book[i + 1].slice(0, phone_book[i].length);
    if (phone_book[i] === a) {
      return false;
    }
  }

  return true;
}

function solution(phone_book) {
  phone_book.sort();

  for (let k in phone_book) {
    const l = phone_book[k].length;
    for (let i in phone_book) {
      if (+i > +k) {
        if (phone_book[i].slice(0, l) === phone_book[k]) {
          return false;
        }
      }
    }
  }
  return true;
}
//1번 풀이
//폰북을 정렬을 해서 가장 작은것을 앞으로 두고
//배열의 첫 인덱스와 그다음인덱스를 비교하는데 첫 인덱스의 길이를 기준으로 slice를 해서 비교
//정렬을 했기에 반복문을 한번만으로 가능하다? 왜 맞지?
//하지만 이게 좋은 풀이인지를 모르겠습니다

//2번 풀이
//처음 생각한 풀이 폰북을 순회해서 첫인덱스 길이를 구하고
//첫인덱스의 다음인덱스부터 끝까지 순회를 하면서
//폰북의 인덱스 길이만큼 slice를 하여 비교 맞으면 false 틀리면 true
//마지막 한요소만 시간초과가 난다
