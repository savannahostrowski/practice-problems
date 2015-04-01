function twoStrings (s1, s2){
	var substring = [];
	for (var i = 0; i < s1.length; i++){
		for (var j = 0; j < s2.length; j++){
			if (s1[i] === s2[j]){
				substring.push(s1[i]);
			}
		}
	}
	if (substring.length >= 1){
		return "YES";
	} else {
		return "NO";
	}
}

