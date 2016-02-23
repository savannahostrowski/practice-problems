function compress(str) {
	var timesSeen = 0;
	var newString = "";
	var lastChar = str[0];
	for (var i = 0; i < str.length; i++) {
		if (str[i] == lastChar) {
			timesSeen += 1;
		} else {
			newString += lastChar;
			newString += timesSeen;
			timesSeen = 1;
		}
		lastChar = str[i];
	}
	newString += lastChar;
	newString += timesSeen;
	if (newString.length >= str.length) {
		return str;
	} else {
		return newString.split("");
	}

}
