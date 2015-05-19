function uniqueChar(str) {
  d = {}
  for (var i = 0; i < str.length; i++) {
    if (d.hasOwnProperty(str[i])) {
      d[str[i]] += 1;
    } else {
      d[str[i]] = 1;
    }
  }
  var keys = Object.keys(d);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] != 1) {
      return false;
    }
  }
  return true;
}

