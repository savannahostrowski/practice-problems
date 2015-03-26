function alternatingChar(str) {
  deletions = 0;
  temp = str[0];
  for (var i = 1; i < str.length; i++) {
    if (temp == str[i]) {
      deletions += 1;
    }
    temp = str[i];
  }
  return deletions;
}

