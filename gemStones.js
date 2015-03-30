function gemStones(composition) {
  var sortedComps = [];
  var uniques = [];
  var elements = [];
  var gemElems = 0;
  // sort compositions
  for (var i = 0; i < composition.length; i++) {
      toArray = composition[i].split('');
      sort = toArray.sort();
      sortedComps.push(sort);
  }
  //get uniques
  for (var i = 0; i < sortedComps.length; i++) {
      lst = [];
      str = sortedComps[i];
      for (var j = 0; j < str.length; j++) {
          if (str[j] != str[j + 1]) {
              lst.push(str[j]);
          }
      }
      uniques.push(lst);
  }

  var merged = [];
  merged = merged.concat.apply(merged, uniques);
  var elements = uniques.pop();

  for (var i = 0; i < elements.length; i++) {
      var count = 0;
      for (var j = 0; j < merged.length; j++) {
          if (elements[i] === merged[j]) {
              count += 1;
          }
      }
      if (count === sortedComps.length) {
          gemElems += 1;
      }
  }
  return gemElems;
}
