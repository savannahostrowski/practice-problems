function maximizedXor(num1, num2) {
  var arr = [];
  for (var i = num1; i <= num2; i++) {
    for (var j = num1; j <= num2; j++) {
      arr.push(i ^ j);
    }
  }
  var maxSoFar = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxSoFar) {
      maxSoFar = arr[i];
    }
  }
  return maxSoFar;
}

console.log(maximizedXor(1, 1000));
