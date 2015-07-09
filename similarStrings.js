function similarStrings (str1, str2) {
  var count = 0;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      count += 1;
    } else {
      return count;
    }
  }
}
