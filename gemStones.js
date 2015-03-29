function gemStones(composition){
// 	each rock has a composition of elements associated
// 	to it - if an element occurs in two or more rocks
// 	it is considered to be a gem element. determine the 
// 	number of gem-elements common in these rocks
  sortedComps = [];
  // sort compositions
  for (var i = 0; i < composition.length; i++){
      toArray = composition[i].split('');
      sort = toArray.sort();
      sortedComps.push(sort);
  }
  for (var i = 0; i < sortedComps.length; i++){
    str = sortedComps[i];
    console.log(str);
    for (var j = 0; j < str.length; j++){
      if (str[j] === str [j + 1]){
        str.splice(j, 1);
      }
    }
  }
  return sortedComps;
}



console.log(gemStones(['aaccdeeeeeee', 'eedscc', 'ddddrdsey']));

//     str = sortedComps[i];
//     for (var j = 0; j < str.length; i++){
//        if (sortedComps[i] == sortedComps[i + 1]){
//         str.splice(j, 1);
//     }
//   }
// }
// return sortedComps;
// }