function uniqueChar(str) {
	for (var i = 0; i < str.length; i++) {
		for (var j = 1; j < str.length; j++) {
			console.log(str[i], str[j]);
			if (str[i] == str[j]) {
				return false;
			}
		}
	}
	return true;
}
