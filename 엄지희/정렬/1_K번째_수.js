// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

/* 
  1. 1차원 array를
  2. i번째 숫자부터 j번째 숫자까지 자른뒤
  3. 정렬
  4. k번째 수 구하기
  5. 를 i,j,k 원소로 가지는 commands 2차원 배열을 참조하여
  6. 값을 구한 뒤 answer 배열로 담아 return.
*/
// const array = [1, 5, 2, 6, 3, 7, 4];
// const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

// Test2 반례
const array =[10, 2];
const commands = [[1, 2, 1]];

let solution = (array, commands) => {
  let answer = [];
  
  // commands 배열에서 각각의 원소를 뽑아냄
  commands.forEach((cmd) => {
    // cmd의 원소를 lterator로 받아 변수로 할당
    let cmdIter = cmd.values(); // lterator 변수에 담아두고 사용해야 정상적으로 next() 값을 연속적으로 받을 수 있어 담아서 사용
    let first = cmdIter.next().value - 1; // slice() 첫번째 인자가 될 값. 인덱스 0부터 시작하므로 + 1
    let second = cmdIter.next().value; // slice() 두번째 인자가 될 값. 인덱스 -1 의 값을 도출하므로 별도 수정 X
    
    // 1. slice 사용하여 subarr 생성
    // 2. sort 함수 사용. 이 때 sort는 문자열을 default로 하므로 10이 2보다 앞으로 정렬되는 사례 발생
    //    따라서 숫자정렬 할 수 있도록 익명 함수 param값으로 넘겨줌
    // 3. iterator 사용하여 정렬된 arr[k]값 도출
    answer = [...answer, array.slice(first, second).sort((a,b) => a-b)[cmdIter.next().value -1]];
  });

  return answer;
}

solution(array,commands);