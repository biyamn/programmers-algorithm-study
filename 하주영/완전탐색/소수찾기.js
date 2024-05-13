function solution(numbers) {
  var answer = 0;
  const len = numbers.length;

  // 소수 판별 함수
  const isPrime = (n) => {
    if (n <= 1) return false;
    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  const dfs = (str, set, checked) => {
    if (str.length === len) {
      // 종료조건
      return;
    }

    for (let i = 0; i < len; i++) {
      // 숫자를 반복하면서
      if (!checked[i]) {
        // 방문한적이 없는 숫자인 경우
        str += numbers[i]; // 새로운 문자열 생성
        checked[i] = 1; // 방문 체크

        if (isPrime(+str)) {
          // 소수인지 검사하여 배열에 저장
          set.add(+str);
        }

        dfs(str, set, checked);
        // 백트래킹
        str = str.slice(0, -1); // 맨 뒤 문자열 제거
        checked[i] = 0; // 맨 뒤 문자열에 대한 방문체크 해제
      }
    }
  };

  let str = ""; // 문자열
  let set = new Set(); // 조합한 문자열 중 소수만 저장된 배열
  let checked = new Array(len).fill(0); // 방문한 숫자인지 검사하는 배열

  dfs(str, set, checked);

  return set.size;
}
