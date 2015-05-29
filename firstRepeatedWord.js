function firstRepeatedWord(sentence) {
  var outputlst = [];
  var lst = sentence.split();
  for (var i = 0; i < lst.length; i++) {
    for (var j = 1; j < lst.length; j++) {
      if (str[i] === str[j]) {
        outputlst.push(str[i]);
      }
    }
  }
  var noDuplicates = new Set(outputlst);
  var str = noDuplicates.toString();
  return str;
  }


firstRepeatedWord('He had had a nice day!');
