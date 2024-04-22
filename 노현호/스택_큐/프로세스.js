//거의 다 풀었는데 실패했습니다.
//깔끔한 풀이가 있어서 참고하여 다시 풀어봤습니다
function solution(priorities, location) {
    let answer = 0;
    let queue = [];

    //location 비교를 위해 index 와 item을 묶어서 새로운 배열 생성
    queue = priorities.map((item, index) => {
        return {item, index}
    })

    while(queue.length > 0){
        let cur = queue.shift();
        //some 메소드 : 조건에 해당하는 값이 하나라도 있다면 true 값 반환 아니면 false
        let max = queue.some(e => e.item > cur.item)
        if(max){
            queue.push(cur)
        }
        else{
            //우선순위가 가장 높다면 실행한 프로세스이기 때문에 값 증가
            answer += 1;
            //찾는 값이면 answer 반환
            if(cur.index === location){
                return answer
            }
        }
    }
}