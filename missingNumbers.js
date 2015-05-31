function missingNumbers(lst1, lst2){
  d1 = {};
  d2 = {};
  missing = [];
  for (var i = 0; i < lst1.length; i++) {
    if (d1[lst[i]] === undefined) {
      d1[lst[i]] = 1;
    } else {
      d1[lst[i]] += 1;
    }
  }
  for (var j = 0; j < lst2.length; j++) {
    if(d2[lst[i]] === undefined) {
      d2[lst[j]] = 1;
    } else {
      d2[lst[j]] += 1;
    }
  }
  for (var key1 in d1) {
    for (var key2 in d2) {
      if (key1 == key2){
        if (d1[key1] != d2[key2]) {
          diff = abs(d1[key1] - d2[key2]);
          for (var m = 0; m < diff; m++) {
            missing.push(key1);
          }
        }
      }
    }
  }
}
