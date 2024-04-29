function solution(sizes) {
  var answer = 0;
  var arr = [];

  for (let i = 0; i < sizes.length; i++) {
    arr.push(sizes[i].sort((a, b) => b - a));
  }
  console.log(arr);
  var width = arr[0][0];
  var height = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (width < arr[i][0]) {
      width = arr[i][0];
    }
    if (height < arr[i][1]) {
      height = arr[i][1];
    }
  }
  console.log(width, height);
  return width * height;
}
