function canItBeAPalindrome (str){
  uniques = [];
  var counter = {};
  sortedArr= (str.split('')).sort();
  for (var i = 0; i < sortedArr.length; i++) {
    if (counter[sortedArr[i]] === undefined) {
      counter[sortedArr[i]] = 1;
    } else {
      counter[sortedArr[i]] += 1;
    }

   }
  for (var key in counter){
    console.log(counter[key]);
    if (counter.hasOwnProperty(key)){
      if (counter[key] % 2 != 0){
        uniques.push(key);
      }
    }
  }
  if (uniques.length === 1 || uniques.length === 0){
    return "YES";
  }else{
    return "NO";
  }
}

console.log(canItBeAPalindrome('hannahss'))


 