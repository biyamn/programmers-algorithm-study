// 풀이
// 옷의 종류가 3가지, 옷의 개수가 a, b, c라면 경우의 수는 (a + b + c) + (ab + bc+ ac) + (abc) 7가지
// (x + a) (x + b) (x + c) =  x3 + (a+b+c)x2 + (ab+bc+ca)x + (abc)
// 위 식의 계수의 합을 구하려면 x에 1 대입 -> 맨 앞 x3의 계수는 정답에 포함되지 않기 때문에 마지막에 1을 빼줌

function solution(clothes) {
  const closet = new Map();
  let combination = 1;

  clothes.forEach(([name, sorting]) => {
    if (closet.has(sorting)) closet.set(sorting, closet.get(sorting) + 1);
    else closet.set(sorting, 1);
  });

  for (let sorting of closet.values()) {
    combination *= sorting + 1;
  }

  combination -= 1;

  return combination;
}
