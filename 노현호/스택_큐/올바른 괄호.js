//stack에 괄호를 넣어서 +1 과 -1을 반복한다
//값이 0이 아니면 하나라도 많은 경우라 false 반환
function solution(s){
    let count = 0;

    for(let i=0; i<s.length; i++) {
        s[i] === '(' ? count += 1 : count -= 1

        if(count < 0) {
            return false;
        }
    }

    return count == 0 ? true : false;
}