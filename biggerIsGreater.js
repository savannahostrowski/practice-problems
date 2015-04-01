function biggerIsGreater (w){
	newWord = [];
	count = 0;
	dict = {};
	alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (var j = 0; j < alphabet.length; j++){
		dict[alphabet[j]] = count;
		count += 1;
	}
	return dict;
	for (var i = 0; i < w.length; i++){
		if (dict.hasOwnProperty(w[i]) w[i + 1]){
			newWord.append(w[i]);
		}else{
			newWord.push(w[i + 1]);
		}		
	}
	if (newWord == w){
		return 'no answer';
	} else {
		return newWord;
	};
}

console.log(biggerIsGreater('ba'));




