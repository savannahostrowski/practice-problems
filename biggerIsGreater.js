function biggerIsGreater (w){
	newWord = [];
	count = 0
	dict = {};
	alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (var j = 0; j < alphabet.length; j++){
		dict[alphabet[j]] = j;
	}
	for (var i = 0; i < w.length; i++){
		if (dict[w[i]] < dict[w[i + 1]]){
			newWord.push(w[i + 1]);
			newWord.push(w[i]);
			i += 1;
		} else {
			newWord.push(w[i]);
		}
	}
	if (newWord.toString() === w){
		return 'no answer';
	} else {
		return newWord;
	}
}

		

console.log(biggerIsGreater('hefg'));



 