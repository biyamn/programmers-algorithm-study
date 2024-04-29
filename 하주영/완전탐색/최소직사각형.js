function solution(sizes) {
  let max_w = 0;
  let max_h = 0;

  for (let e of sizes) {
    let [w, h] = e; // 너비, 높이

    // 너비와 높이 중 더 큰것을 너비로
    if (h > w) {
      let temp = h;
      h = w;
      w = temp;
    }

    if (w > max_w) {
      max_w = w;
    }
    if (h > max_h) {
      max_h = h;
    }
  }
  return max_w * max_h;
}
