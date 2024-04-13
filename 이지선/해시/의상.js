// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

// 먼저 문제에서 받은 clothes를 해시맵으로 만든다. 해시맵으로 만드는 이 함수는 따로 뺀다(getHashMap)
// 해시맵의 크기가 1이면 의상 value들의 크기를 그대로 리턴한다
// 해시맵의 크기가 2 이상이면 각 value+1끼리 곱해서 -1 한 값을 리턴한다

function solution(clothes) {
  const getHashMap = (clothes) => {
    const hashMap = new Map();
    for (let i = 0; i < clothes.length; i++) {
      const { value, key } = clothes[i];
      hashMap.has(key)
        ? hashMap.get(key).push(value)
        : hashMap.set(key, [value]);
    }
    return hashMap;
  };

  const hashMap = getHashMap(clothes);

  if (hashMap.size === 1) {
    for (let value of hashMap.values()) {
      return value.length;
    }
  } else {
    let result = 1;
    for (let value of hashMap.values()) {
      result *= value.length + 1;
    }
    return result - 1;
  }
}
