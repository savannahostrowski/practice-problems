function compression (str) {
  var d = {};
  var finalStr = ""
  for (var i = 0; i < str.length; i++) {
    if (d[str[i]] === undefined) {
      d[str[i]] = 1;
    } else {
      d[str[i]] += 1;
    }
   }
   for (var key in d) {
     if (d[key] === 1) {
       finalStr += key;
     } else {
       finalStr += key;
       finalStr+= d[key];
     }
   }
   console.log(finalStr);
}

compression('aaaaaaadddefg');
