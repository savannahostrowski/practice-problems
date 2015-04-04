function biggerIsGreater (w){
	var newWord = [];
	var dict = {};
	var flag = true;
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (var j = 0; j < alphabet.length; j++){
		dict[alphabet[j]] = j;
	}
	for (var i = w.length - 1; i >= 0; i--){
		if (flag && dict[w[i]] > dict[w[i - 1]]){
			newWord.unshift(w[i - 1]);
			newWord.unshift(w[i]);
			i -= 1;
			flag = false;
		} else {
			newWord.unshift(w[i]);
		}
	}
	newWord = newWord.join('');
	if (newWord === w){
		return 'no answer';
	} else {
		return newWord;
	}
}



 