/**
 * 정확성 테스트 통과
 * 효율성 테스트 시간초과
 */
let solution = (phone_book) => {
  let answer = true;
    for(i = 0; i <= phone_book.length; i++){
        let cur = phone_book[i]
        let except_phone_book = phone_book.filter(phone => phone !== cur);
        let resultFind = except_phone_book.find(exceptPhone => exceptPhone.startsWith(cur));
        if(resultFind) answer = false;
    }
    return answer;
}
