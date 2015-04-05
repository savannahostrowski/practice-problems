function palindromeIndex(word){
  charlist = word.split('');
  for (var i = 0; i < charlist.length; i++){
  	var newList = charlist;
  	newList.splice(i, 1);
  	console.log(newList, newList.reverse());
  	if (newList === newList.reverse()){
  		return i;
  	} else {
  		return -1;
  	}
  }
}
console.log(palindromeIndex('aaab'));