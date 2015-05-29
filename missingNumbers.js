function missingNumbers(lst1, lst2){
  d1 = {}
  d2 = {}
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
  
}
