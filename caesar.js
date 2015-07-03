function caesarCipher(str, k) {
  var newLetterList = [];
  var finalWord = "";
  for (var i = 0; i < str.length; i++) {
    if (typeof str[i] != "symbol") {
      var charVal = str.charCodeAt(i);
      var newVal = charVal + k;
      newLetterList.push (newVal);
    }
  for (var i = 0; i < newLetterList.length; i++) {
    var converted = newLetterList.charCodeAt(i);
    finalWord += converted;
  }
}
return finalWord;
}
