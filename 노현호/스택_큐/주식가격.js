//3가지 고려하기
//현재 위치 주식 가격이 다음 주식 보다 낮을 경우
//다음 주식 보다 클 경우
//마지막 자리 일경우


function solution(prices) {
    const answer = [];
    let len = prices.length;

    for (let i = 0; i < len; i++) {
        let time = 0;
        for (let j = i + 1; j <= len - 1; j++) {
            time += 1;
            if(prices[i] > prices[j]){
                break;
            }
        }   
        answer.push(stack)
    }
    return answer;
}
