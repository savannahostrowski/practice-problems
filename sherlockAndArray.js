function sherlockAndArray (arr) {
  var subArr = [];
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
      if (subArr.length !== 0) {
      for (var j = 0; j < subArr.length; j++) {
        total += subArr[j];
      }
      if (total === str[i]) {
        console.log('true');
      } else {
        total = 0;
      }
    }
  }
}

console.log(sherlockAndArray([1,2,3,6,5,7]));
