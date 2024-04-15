function solution(clothes) {
  // 같은 종류끼리 그룹화
  let groups = new Map();
  for (let i = 0; i < clothes.length; i++) {
    let [name, type] = clothes[i];

    groups.set(type, groups.has(type) ? groups.get(type) + 1 : 1);
  }

  // 종류가 한개일 경우, 아이템의 개수가 anwer이 된다.
  if (groups.size === 1) {
    return clothes.length;
  }

  // 같은 종류의 아이템이 2개라면, -> (a, b)
  // 한 종류에서 아이템을 선택하는 경우의 수 => (a 선택 or b 선택 or 아무것도 선택하지 않음) => "종류 + 1"
  // 모든 종류에서 아이템을 선택하는 경우의 수 => 위의 경우의 수를 구하여 모두 곱한 후 - 1
  let answer = 1;
  for (let item of groups) {
    let [type, num] = item;
    answer *= num + 1;
  }
  answer -= 1; // 아무것도 선택하지 않는 경우는 포함시키지 않음
  return answer;
}
