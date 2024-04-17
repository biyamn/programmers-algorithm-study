function solution(clothes) {
    const map = new Map()
    clothes.forEach((item, index) => {
        if(!map.has(item[1])){
            map.set(item[1], 1)
        }
        else{
            map.set(item[1],map.get(item[1]) + 1)
        }
    })
    let answer = 1;
    for(let [key, value] of map){
        answer *= value +1;
    }
    return answer-1
}
//옷은 하나를 무조건 골라야 한다 + 무조건 모든 종류의 옷을 입어야하는 것은 아니다
//=> 안입는 경우의 수를 추가해야한다는 뜻 그래서 모든 종류 + 1
//여기에 최소 하나의 옷을 골라야하므로 모두다 x x x 인 한가지의 경우를 뺀다
//모자 파랑 검정 x 
//상의 레드 x 
//하의 화이트 블루 x
//3 * 2 * 3 - 1 = 17
