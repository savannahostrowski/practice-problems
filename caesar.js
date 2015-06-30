function caesarCipher(str, k) {
  var newLetterList = [];
  for (var i = 0; i < str.length; i++) {
    if (typeof str[i] != "symbol") {
      var charVal = str.charCodeAt(i);
      var newVal = charVal + k;
      newLetterList.push (newVal);
    }

}
}
