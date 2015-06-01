function missingNumbers(lst1, lst2){
  d1 = {};
  d2 = {};
  missing = [];
  for (var i = 0; i < lst1.length; i++) {
    if (d1[lst1[i]] === undefined) {
      d1[lst1[i]] = 1;
    } else {
      d1[lst1[i]] += 1;
    }
  }
  for (var j = 0; j < lst2.length; j++) {
    if(d2[lst2[i]] === undefined) {
      d2[lst2[j]] = 1;
    } else {
      d2[lst2[j]] += 1;
    }
  }
  for (var key1 in d1) {
    for (var key2 in d2) {
      if (key1 == key2){
        if (d1[key1] != d2[key2]) {
          diff = Math.abs(d1[key1] - d2[key2]);
          for (var m = 0; m < diff; m++) {
            missing.push(key1);
          }
        }
      }
    }
  }
  console.log(missing);
}

missingNumbers([1,2,2,3,4,5,5,5], [1,2,3,4,5]);
