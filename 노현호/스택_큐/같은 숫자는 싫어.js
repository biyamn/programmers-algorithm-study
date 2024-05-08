function solution(arr)
{
    let a = 0
    let answer = []
    for(let i = 0 ; i <arr.length; i++){
        if(i+1 <= arr.length){
            if(arr[i] === arr[i+1]){
                continue
            } 
            else{
                answer.push(arr[i])
            }
        }
    }
    return answer;
}
//다음수를 체크해서 같으면 무시 아니면 push