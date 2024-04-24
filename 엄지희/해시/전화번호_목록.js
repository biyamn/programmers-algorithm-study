/**
 * 정확성 테스트 통과
 * 효율성 테스트 시간초과
 * 
 * 채점 결과
  정확성: 83.3
  효율성: 8.3
  합계: 91.7 / 100.0
  테스트 3,4 시간 초과
 */

let phone_book = ["119", "97674223", "1195524421"];

let solution = (phone_book) => {
  let answer = true;
  /*
    for(i = 0; i <= phone_book.length; i++){
        let cur = phone_book[i]
        let except_phone_book = phone_book.filter(phone => phone !== cur);
        let resultFind = except_phone_book.find(exceptPhone => exceptPhone.startsWith(cur));
        if(resultFind) answer = false;
    }
  */
  phone_book = phone_book.sort((a,b) => a.length - b.length);

  for (const phone of phone_book) {
    if(phone_book.filter(ele => ele.startsWith(phone)).length >= 2) return false;
  }
  return answer;
}

solution(phone_book);